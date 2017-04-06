$(document).ready(function() {
  var vh = window.innerHeight - 40;

  $(window).on('scroll', function() {
    if($(window).scrollTop() > vh) {
        $('.nav').addClass('nav-blue');
    } else {
       $('.nav').removeClass('nav-blue');
    }
  });
});
