jQuery(window).scroll(function(){
  var $sections = $('section');
$sections.each(function(i,el){
 var top  = $(el).offset().top-120;
 var bottom = top +$(el).height();
 var scroll = $(window).scrollTop();
 var id = $(el).attr('id');
if( scroll > top && scroll < bottom){
     $('a.menu__link--active').removeClass('menu__link--active');
$('a[href="#'+id+'"]').addClass('menu__link--active');
 }
})
});

$("nav, .header__logo").on("click","a", function (event) {
 // исключаем стандартную реакцию браузера
 event.preventDefault();

 // получем идентификатор блока из атрибута href
 var id  = $(this).attr('href'),

 // находим высоту, на которой расположен блок
     top = $(id).offset().top;
  
 // анимируем переход к блоку, время: 1800 мс
 $('body,html').animate({scrollTop: top}, 1800);
});



$(".menu__btn").click(function (event) {
  $(".menu__btn,.menu__list").toggleClass("active");
  $('ul li a').click(function() {
    if ( $('.menu__btn, .menu__list').hasClass('active')) {
     $('.menu__btn, .menu__list').removeClass('active');
    }
 });
  $("body").toggleClass("lock")
});

$(function() {

  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.header').addClass("sticky");
    }else{
        $('.header').removeClass("sticky");
    }
})

// $(".menu__list").on("click", "a", function (event) {
//   event.preventDefault();
//   var id = $(this).attr("href"),
//     top = $(id).offset().top;
//   $("body,html").animate({ scrollTop: top }, 800);
// });

    $(".gallery__items").slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint:769,
              settings: {
                slidesToShow: 2,
                arrows:false              
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                arrows:false 
              }
            },
          ]
      });
      $(".testimonials__items").slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint:768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

      $(".header__bottom-wrapper").slick({
        infinite:true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });

      var typed = new Typed(".typing", {
        strings:["Высокое качество обслуживания!","Быстрый сервиc!","Гостеприимство!"],
        typeSpeed:60,
        backSpeed:60,
        loop:true
      });
      
      $(".points__wrapper .tab").on("click", function(event){
        var id = $(this).attr("data-id");
        $(".points__wrapper")
          .find(".tab__item")
          .removeClass("active-tab")
          .hide();
        $(".points__wrapper .tabs")
          .find(".tab")
          .removeClass("active");
        $(this).addClass("active");
        $("#" + id)
          .addClass("active-tab")
          .fadeIn();
        return false;
      });


      window.addEventListener('load', AOS.refresh)
      AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
     
      // var mixer = mixitup(".menus__inner-box");
      var mixer = mixitup(".menus__inner-box",{
        load: {
            filter: '.category-breakfast'
        }
    });    
})





