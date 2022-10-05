$(function () {
  $(".header__stars").rateYo({
    rating: 4.5
  });
});


var mixer = mixitup('.blog__section');


$('.blog__mark-item').on('click', function () {
  $('.blog__mark-item').removeClass('blog__mark-item--active')
  $(this).addClass('blog__mark-item--active')
})



$('.rewiew__slider').slick({
  arrows: false,
  slidesToShow: 2,
  draggable: false,
  appendArrows: $('.rewiew__arrows'), 
  dots: true,
  appendDots: $('.rewiew__selectors'),
  responsive:
  [
    {
     breakpoint: 900,
      settings: {
      slidesToShow: 1,
      draggable: true,
      },
    },
  ]
})




$('.arrow__prev').on('click', function (e) {
  e.preventDefault()
  $('.rewiew__slider').slick('slickPrev')
})


$('.arrow__next').on('click', function (e) {
  e.preventDefault()
  $('.rewiew__slider').slick('slickNext')
})

/*
$('.question__link').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('question__link--active')
  $(this).children(".question__acc-text").slideToggle()
})*/


$('.question__link').on('click', function (e) {
  e.preventDefault()
 /* $('.question__link').removeClass('question__link--active')
  $('.question__acc-text').slideUp()
  $(this).toggleClass('question__link--active')*/
  
  if ($(this).hasClass('question__link--active')) {
    $(this).removeClass('question__link--active')
    $(this).children(".question__acc-text").slideUp()
  } else {
    $('.question__link').removeClass('question__link--active')
    $('.question__acc-text').slideUp()
    $(this).addClass('question__link--active')
    $(this).children('.question__acc-text').slideDown()
  }
})



$(".header__nav-items, .footer__link").on("click","a", function (event) {
event.preventDefault();
var id  = $(this).attr('href'),
top = $(id).offset().top;
$('body,html').animate({scrollTop: top}, 1000);
});
  



/*$('.question__link').on('click', function(e) {
  e.preventDefault()
  $(this).toggleClass('.question__link--active')
})
*/




if(localStorage.getItem("scrolPoss")) {
  let yCord = localStorage.getItem("scrolPoss")
  window.scrollTo({top:yCord, behavior:"smooth"})
}

let scrolling = false;

window.addEventListener("scroll", () => {
  scrolling - true
})

setInterval(() => {
  if (scrolling) {
    scrolling = false;
    localStorage.setItem("scrolPoss", Math.ceil(window.scrollY))

  }
},500);



/*
 

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.65348622900736, lng: -82.820903466592 },
    zoom: 12,
  });
}

window.initMap = initMap;

*/

$('.burger, .overlay').on('click', function(e) {
  e.preventDefault()
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})

$('.close-button').on('click', function(e) {
  e.preventDefault()
  $('.header__top').removeClass('header__top--open')
  $('.overlay').removeClass('overlay--show')
})

$('.header__nav-item').on('click', function(e){
  e.preventDefault()
  $('.header__top').removeClass('header__top--open')
  $('.overlay').removeClass('overlay--show')
})


$(window).on('scroll', function() {
  if ($(window).scrollTop() > 0) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
})



/*setInterval(() => {
  if ($(window).scrollTop() > 0) {
    $('.burger').addClass('burger--follow')
  } else {
    $('.burger').removeClass('burger--follow')
  }
}, 0);*/