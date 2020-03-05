$(function(){
  
  

  // //код автозакрытия выпадающих меню
  // $(".all__product-page").on("click", function(e) {
  //   e.preventDefault();
  //   $(".all__products").slideToggle(200);
  //   $(document).mouseup(function(e) {
  //     // событие клика по веб-документу
  //     let div = $(".all__product-page"); // тут указываем ID элемента
  //     if (
  //       !div.is(e.target) && // если клик был не по нашему блоку
  //       div.has(e.target).length === 0
  //     ) {
  //       $(".all__products").hide(100); // скрываем его
  //     }
  //   });
  // });

  $('.rate-star').rateYo({
    rating: 5,
    starWidth: "15px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 100,
    to: 600,
    prefix: "$"
  });

  var mixer = mixitup('.products__inner-box');


})