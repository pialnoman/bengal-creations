function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("multi-level");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//scroll-to-top
 $(document).ready(function() { 
     $('#scroll-to-top').click(function(){
       $("html,body").animate({ scrollTop: 0 }, 1500);
          return false;
     });
     $('#scroll-to-bottom').click(function(){
       $('html,body').animate({scrollTop: $(document).height()}, 1500);
          return false;
     });
 }); 
     
//youtube play	 
	 $(document).ready(function() {
    $('.open-video').on('click', function(ev) {

        $("#video")[0].src += "&autoplay=1";
        ev.preventDefault();
        $('.video-wprap').fadeOut(500);

    });
	 $('.search-btn,.btn-close').on('click', function(ev) {
        $('.search-bar').toggleClass('search-bar-in');
    });
	
	
});

//youtube hiden and show
function showIFrame() {  
 var iframe = document.getElementById("iframe");  
 iframe.style.display="block";  
}  

//news-carousel Start
$('.news-carousel').owlCarousel({
    loop:true,
	items:1,
    margin:0,
	dots:false,
	autoplay:true,
    nav:true,
	navText: ["<img src='img/chevron-left.png'>","<img src='img/chevron-right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//news-carousel End

//youtube-carousel Start
$('.youtube-carousel').owlCarousel({
    loop:true,
	items:1,
    margin:0,
	dots:false,
	autoplay:false,
    nav:true,
    navText: ["<img src='img/chevron-left.png'>","<img src='img/chevron-right.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//award-carousel Start
$('.award-carousel').owlCarousel({
    loop:true,
	items:1,
    margin:0,
	dots:false,
	autoplay:true,
    nav:false,	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//audio-carousel Start
$('.audio-carousel').owlCarousel({
 loop:true,
 items:1,
 margin:0, 
 dots:false,
 nav:true,
 navText:["<img src='img/chevron-left.png'>","<img src='img/chevron-right.png'>"],  
 autoplay:false,    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})