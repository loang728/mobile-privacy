$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3.4, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    infinite: true, // Infinite loop
    prevArrow: '<button type="button" class="slick-prev">Previous</button>', // Customize the previous arrow
    nextArrow: '<button type="button" class="slick-next">Next</button>', // Customize the next arrow
    responsive: [
	{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3 // Adjust the number of slides to show at even smaller screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2 // Adjust the number of slides to show at smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1 // Adjust the number of slides to show at even smaller screens
        }
      }
    ]
  });
  
 $(".menu-open").click(function(){
             $("ul.menu").toggleClass("show");
         	$(".menu-open").toggleClass("cross");
			
});

  
});
