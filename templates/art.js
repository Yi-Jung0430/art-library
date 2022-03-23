/*global $ */
$(document).ready(function() {

    "use strict";
  
    $('.menuArea > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    // Checks if li has sub (ul) and adds class for toggle icon - just an UI
  
    $('.menuArea > ul > li > ul:not(:has(ul))').addClass('normal-sub');
   // Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)
  
    
  
    
  
    $(".menuArea > ul > li").click(function() {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(250);
      }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)
  
    $(".menu-mobile").click(function(e) {
      $(".menuArea > ul").toggleClass('show-on-mobile');
      e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
  


    // 輪播區
            
    $('.active-slider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      //animation
      // animateOut: 'fadeOut',
      slideSpeed : 200,
      autoplay: true,
      //icon for nav
      navText: ['<h1> < </h1>', '<h1> > </h1>']
    });

  
  });

  function myFunc(){
    alert("You Clicked me");
 }