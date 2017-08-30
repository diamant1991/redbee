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
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i>предыдущие</div>", 
            "<div class='carousel-btn carousel-btn--next'>следующие<i class='fa fa-long-arrow-right'></i></div>"],
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
$('#about-carousel').owlCarousel({
  loop:true,
  margin: 30,
  nav:true,
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i>предыдущие</div>", 
            "<div class='carousel-btn carousel-btn--next'>следующие<i class='fa fa-long-arrow-right'></i></div>"],
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
  navText: ["<div class='carousel-btn carousel-btn--prev'><i class='fa fa-long-arrow-left'></i>предыдущий</div>", 
            "<div class='carousel-btn carousel-btn--next'>следующий<i class='fa fa-long-arrow-right'></i></div>"],
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