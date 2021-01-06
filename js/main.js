$( document ).ready(function() {
    $('.collaborative__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.telemedicine__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.mission__slide').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        // centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              variableWidth: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.testimonials__slide').slick({
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.industry__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

    //   $('.mission__slide').slick({
    //     initialSlide: $('.mission__slide > .mission__item').length - 1
    //   });

      $('.values-slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });


    // Hamburger Menu
    if( 'ontouchstart' in window ){ 
      var click = 'touchstart'; 
    } else { 
      var click = 'click'; 
    }

    $('div.burger-mobile').on(click, function(){
      if( !$(this).hasClass('open') ){ 
        openMenu(); 
      } else { 
        closeMenu(); 
      }
      this.classList.toggle("open");
    });

    function openMenu(){
      $('.menu li').addClass('animate');
      $('.menu').css('height', 'calc(100vh - 97px - 100px)');
      $('.screen').css('backgroundColor', 'rgba(0, 0, 0, 0.3)').css('height', "calc(100vh - 97px)");
      $('body').css('overflow', 'hidden');
    }

    function closeMenu(){				
      $('.menu li').removeClass('animate');
      $('.menu').css('height', '0px');
      $('.screen').css('backgroundColor', 'unset').css('height', 0);
      $('body').css('overflow', 'auto');
    }

    // Avtive Menu
    var pathname = window.location.pathname;
    // console.log( 'pathname', pathname );
    $(`header .header__right li a[href="${pathname}"]`).addClass("activeMenu");
});
