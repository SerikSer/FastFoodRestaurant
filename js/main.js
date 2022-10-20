$('.nav__icon').on('click', function(){
  $('.nav__list').addClass('show');
  $('.nav__bgoverlay').addClass('active');
  document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;'
});
$('.nav__close').on('click', function(){
  $('.nav__list.show').removeClass('show');
  $('.nav__bgoverlay.active').removeClass('active');
  document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
});
$('.nav__bgoverlay').on('click', function(){
  $('.nav__list.show').removeClass('show');
  $('.nav__bgoverlay.active').removeClass('active');
  document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
});

// анимация выплывания

AOS.init({
  offset: 200,
  delay:100,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});
