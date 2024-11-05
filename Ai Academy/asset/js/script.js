
$(document).ready(function(){
    $('.review-slick-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        initialSlide: 0.5,
        slidesToScroll: 1,
        slidesToShow: 2.5,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,
              initialSlide: 0.8,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1,
              initialSlide: 0.2,
              arrows: false,
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
              initialSlide: 0.8,
              arrows: false,
            }
          }
  
        ]
    });
  });

  $(document).ready(function(){
    $('.our-client-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        initialSlide: 0.5,
        slidesToScroll: 1,
        slidesToShow: 2.5,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,
              initialSlide: 0.8,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1,
              initialSlide: 0.2,
              arrows: false,
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1.2,
              slidesToScroll: 1,
              initialSlide: 0.8,
              arrows: false,
            }
          }
  
        ]
    });
});

  $(document).ready(function(){
    $('.our-alumni-section-slick-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1, 
              arrows: false,
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
  
        ]
    });
});



$('.possibilities-section-testimonial').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
      }
    }

  ]
});
$('.most-popular-article-testimonial').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
      }
    }

  ]
});



// navbar

$(document).ready(function () {
	$('.sub-menu').click(function (){
		$('.sub-menu-deatils').toggleClass('sub-menu-deatils-active');   
		$('.fa-chevron-down').toggleClass('top-arrow');
	});
});


$(document).ready(function () {
	$('.toogle-bar').click(function (){
		$('.menu').toggleClass('menu-active');   
		$('.fa-bars').toggleClass('fa-xmark');
	});
});


// topic section faq section
// $(document).ready(function() {
	// 	$(".topic-section-faq-box").click(function(){
		// 		// $(".topic-section-faq-box").removeClass("open-answer");
		// 		$(this).toggleClass("open-answer");
	// 	});
// });

		
new Accordion('.accordion-container');
new Accordion('.accordion-container-2');
$('.possibilities-section-testimonial').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

