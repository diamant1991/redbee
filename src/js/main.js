$('.navbar-toggle').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

$('.vacancy__header').click(function() {
  var vcontent = $(this).next()
  var fa = $(this).find('.fa')
  if(vcontent.is(":hidden")){
    $('.vacancy__content').slideUp(250)
    vcontent.slideDown(250)
    fa.removeClass('fa-long-arrow-down').addClass('fa-long-arrow-up')
  }
  else{
    vcontent.slideUp(250)
    fa.removeClass('fa-long-arrow-up').addClass('fa-long-arrow-down')
  }
});

$(".file-upload input[type=file]").change(function(){
   var filename = $(this).val().replace(/.*\\/, "");
   $("#filename").val(filename);
});

$('#main-slider').owlCarousel({
  loop:true,
  margin: 0,
  nav:false,
  responsive:{
    0:{
        items:1
    }
  }
})
$('#services-carousel').owlCarousel({
  loop:true,
  margin: 20,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i><span class='middle'>предыдущие</span></div>", 
            "<div class='carousel-btn carousel-btn--next'><span class='middle'>следующие</span><i class='fa fa-long-arrow-right'></i></div>"],
  responsive:{
    0:{
        items:1
    },
    767:{
        items:2
    },
    991:{
        items:3
    },
    1199:{
        items:4
    }
  }
})
$('#treners-carousel').owlCarousel({
  loop:true,
  margin: 0,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i></div>", 
            "<div class='carousel-btn carousel-btn--next'><i class='fa fa-long-arrow-right'></i></div>"],
  responsive:{
    0:{
        items:1
    }
  }
})
$('#about-carousel').owlCarousel({
  loop:true,
  margin: 30,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i><span class='middle'>предыдущие</span></div>", 
            "<div class='carousel-btn carousel-btn--next'><span class='middle'>следующие</span><i class='fa fa-long-arrow-right'></i></div>"],
  responsive:{
    0:{
        items:1
    },
    767:{
        items:2
    },
    1199:{
        items:3
    }
  }
})
$('.build-carousel').owlCarousel({
  loop:true,
  margin: 30,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i><span class='middle'>предыдущие</span></div>", 
            "<div class='carousel-btn carousel-btn--next'><span class='middle'>следующие</span><i class='fa fa-long-arrow-right'></i></div>"],
  responsive:{
    0:{
        items:1
    },
    767:{
        items:2
    },
    1199:{
        items:3
    }
  }
})
$('.review__carousel').owlCarousel({
  loop:true,
  margin: 0,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i><span class='middle'>предыдущий</span></div>", 
            "<div class='carousel-btn carousel-btn--next'><span class='middle'>следующий</span><i class='fa fa-long-arrow-right'></i></div>"],
  responsive:{
    0:{
        items:1
    }
  }
})
$('.schema__floor').click(function(e) {
  $('.schema__floor').removeClass('active')
  $(this).addClass('active')
});

$.fn.equivalent = function (){
  var $blocks = $(this),
      maxH    = $blocks.eq(0).height(); 
  $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
  });

  $blocks.height(maxH + 20); 
}
$('.services-group__descr').equivalent();
$('.services-group__text').equivalent();

$( function() {
  $( "#datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "../img/datepicker.png",
    buttonImageOnly: true,
    minDate: 0,
    buttonText: "Select date"
  });
} );
