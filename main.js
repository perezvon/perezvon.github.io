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


var vid = document.getElementById("hero-video");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});
