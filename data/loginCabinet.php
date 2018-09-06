<?php
// header("Access-Control-Allow-Origin: *");
// Variables de connexion à la base de données
$DB_host = "";
$DB_user = "";
$DB_name = "";
$DB_pass = "";
// Entrée du formulaire
$code_cabinet = $_POST['codeCabinet'];
try
{
    // On se connecte et on selectionne la base
    $DB_con = new PDO("mysql:host={$DB_host};dbname={$DB_name}; charset=utf8",$DB_user,$DB_pass);
    $DB_con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // On prépare et exécute la requête SQL
    $query = $DB_con->prepare("SELECT id_cabinet FROM login WHERE code_cabinet = :codeCabinet");
    $query->bindValue(':codeCabinet', $code_cabinet, PDO::PARAM_STR); 
    $query->execute();
    // On teste si le code cabinet est présent dans la table
    if($query->rowCount() == 1){
        // Si OUI on traite le resultat de la requête SQL sous forme de tableau associatif
        $resultat = $query->fetchAll(PDO::FETCH_ASSOC);
        // echo json_encode($resultat);
        
        // On se sert de ce résultat pour récupérer toutes les informations du cabinet portant l'id_cabinet entré par l'utillisateur
        $query = $DB_con->prepare("SELECT cabinet.* FROM login INNER JOIN cabinet ON cabinet.id_cabinet = login.id_cabinet WHERE cabinet.id_cabinet =".$resultat[0]['id_cabinet']);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultat[0]);
    } else {
        echo 'error';
    }
}
catch(PDOException $e)
{
    echo $e->getMessage();
}