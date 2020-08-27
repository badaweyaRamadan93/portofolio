$(document).ready(function(){
    // loader function
    $(window).on('load',function(){
        $('.preloader').fadeOut(1000);
    })
    
        //end loader function
    // start click menue to open nav

    $('.menu-toggeler').on('click',function(){
        $(this).toggleClass('open');
        $(".top-nav").toggleClass('open');
    });
    // end click menue to open nav
    
    // end remove class open
    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggeler').removeClass('open');
        $(".top-nav").removeClass('open');
    });
    // end remove class open
    // start click any links to scroll to the link
    $('nav a[href*="#"]').on('click',function(){
        $('html , body').animate({
            scrollTop:$($(this).attr('href')).offset().top-100
        },1500)
    });
    // end click any links to scroll to the link

    // start click up btn
    $('#up').on('click',function(){
        $('html , body').animate({
            scrollTop:0
        },1500)
    });
    // start click up btn

    // start wow plugin
    new WOW().init();
    // end wow plugin

    // start nicescroll plugin
    $('body').niceScroll({
        cursorcolor: "#fd57bf",
        scrollspeed: 100
        
    });
    // end  nicescroll plugin

}); 
//  end function 