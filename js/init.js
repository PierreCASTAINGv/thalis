// Chargement de la page 
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
  }, 0); // Régler durée minimale du chargement
	
});

// Eléments Materialize
$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
  // $('.carousel').carousel();
});

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function () {
  $('select').formSelect();
});

// A NETTOYER !!!
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var instance = M.Carousel.init({
  fullWidth: true,
  indicators: true
});

// Or with jQuery
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});
