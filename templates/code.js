   

    $( "p" ).click(function() {
        $( this ).slideUp();
    });

    // 輪播區
            
    $('.active-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        //animation
        //animateOut: 'fadeOut',
        slideSpeed : 200,
        autoplay: true,
        //icon for nav
        navText: ['<h1> < </h1>', '<h1> > </h1>']
    });
  
