$(document).ready(function(){
$(".icon").click(function(){
  $(this).toggleClass('active');
  $('.main-menu').toggleClass('new-menu');
 });
});

$(document).ready(function(){
$('.icon').click(function(){
  if($(window).width() > 400 ){
    $(".active-menu").css({'display':'block'});
  }
  else{
   $(".active-menu").css({'display':'none'}); 
  }
});
});

$(document).ready(function(){
$(".active-menu").click(function(){
  $('.active-menu').css({'display':'none'});
  $('.main-menu').removeClass('new-menu');
  $('.icon').removeClass('active');
});
});
$(document).ready(function(){
$(window).resize(function(){
  if($(window).width() > 694){
    $(".active-menu").css({'display':'none'});
    $('.icon').removeClass('active');
    $('.main-menu').css({'right':'-50%'});
  }
});
});
$(document).ready(function(){
$(window).resize(function(){
  if($(window).width() < 401 ){
    $(".active-menu").css({'display':'none'});
  }
});
});

$(document).ready(function(){
$(window).resize(function(){
  if($(window).width() < 401 ){
    $(".active-menu").css({'display':'none'});
  }
});
});

// $(document).ready(function(){
// $(window).resize(function(){
//   if($(window).width() < 694){
//     $('.icon').click(function(){
//     $('.active-menu').css({'display':'block'});
//     });
//   }
//   else($(window).width() < 400){
//     $('.active-menu').css({'display':'none'});
//   }
// });
// });




// $(document).ready(function(){
//   $('.icon').click(function(){
//     $(this).toggleClass('active');
//   });
//   $('.icon').click(function(){
//     $('.menu-open').slideToggle();
//     $('.menu-open').find('ul').slideUp();
//     $('.menu-main').find('.menu-open span').removeClass();
//   });
//   $(window).resize(function(){
//     if($(window).width() > 742){

//       $('.menu-main ul').removeAttr('style');
//       $('.icon').removeClass('active');

//     }
//   });
// });
// $(document).ready(function(){
// $('.menu-open span').click(function(){
//   $(this).next().slideToggle();
//   $(this).siblings().find('ul').slideUp();
//   $(this).closest('li').siblings().find('ul').slideUp();
// });
// $('.menu-open span').click(function(){
//   $(this).toggleClass('rotate');
//   $(this).next().find('.rotate').removeClass('rotate');
//     $(this).parent().siblings().find('.rotate').removeClass('rotate');
// });
// });


// $('.slider').slick({
//                 dots:false,
//                 autoplay: true,
//                 infinite: true,
//                 speed: 1000,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 responsive: [{
//                     breakpoint: 1500,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1
//                     }
//                 }]
//             });
// // count
// $('.count').each(function () {
//             $(this).prop('Counter',0).animate({
//                 Counter: $(this).text()
//             }, {
//                 duration: 10000,
//                 easing: 'swing',
//                 step: function (now) {
//                     $(this).text(Math.ceil(now));
//                 }
//             });
//          });
// $(window).scroll(function(){
//   var header_height = $('.my-header').height();
//   var scroll = $(window).scrollTop();
//   if(scroll > 200){
//     $('.my-header').addClass('fixed')
//     $('.my-header').css({'top' : 0, 'transition': 'all 1s ease-in-out'})
//   }
//   else{
   
//       $('.my-header').css({'top' :0, 'transition': 'all 1s ease-in-out'})
//       $('.my-header').removeClass('fixed')

//   }
// });