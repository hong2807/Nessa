$( document ).ready(function() {
      $('.collaborative__slide').length > 0 && $('.collaborative__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.telemedicine__slide').length > 0 && $('.telemedicine__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.mission__slide').length > 0 && $('.mission__slide').slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        // centerMode: true,
        variableWidth: true,
        // rtl: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              variableWidth: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1050,
            settings: {
              dots: true,
              variableWidth: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });

      // $('.mission__slide').slick('slickGoTo', 3);
      $('.testimonials__slide').length > 0 && $('.testimonials__slide').slick({
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1050,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
         
        ]
      });

      $('.industry__slide').length > 0 && $('.industry__slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1050,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      });

      $('.values-slide').length > 0 && $('.values-slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              dots: true,
              variableWidth: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              dots: true,
              slidesToShow: 2,
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


    // SignUp
    $(".signup__form__item input").blur(function() {
      if($(this).val() !== "") {
          $(this).siblings("label").addClass("active");
      }else {
          $(this).siblings("label").removeClass("active");
      }
  });

  $(".signup__form__item  input[type=date]").change(function() {
      if($(this).val() !== "") {
          $(this).css('color', "#ccc");
          $(this).siblings("label").addClass("active");
      }else {
          $(this).siblings("label").removeClass("active");
      }
  });

  // Show - hide password Signup
  $("#signup_show_hide_password i").on('click', function(event) {
      event.preventDefault();
      if($('#signup_show_hide_password input').attr("type") == "text"){
          $('#signup_show_hide_password input').attr('type', 'password');
          $('#signup_show_hide_password i').addClass( "fa-eye-slash" );
          $('#signup_show_hide_password i').removeClass( "fa-eye" );
      }else if($('#signup_show_hide_password input').attr("type") == "password"){
          $('#signup_show_hide_password input').attr('type', 'text');
          $('#signup_show_hide_password i').removeClass( "fa-eye-slash" );
          $('#signup_show_hide_password i').addClass( "fa-eye" );
      }
  });

  $("#signup_show_hide_confirm_password i").on('click', function(event) {
      event.preventDefault();
      if($('#signup_show_hide_confirm_password input').attr("type") == "text"){
          $('#signup_show_hide_confirm_password input').attr('type', 'password');
          $('#signup_show_hide_confirm_password i').addClass( "fa-eye-slash" );
          $('#signup_show_hide_confirm_password i').removeClass( "fa-eye" );
      }else if($('#signup_show_hide_confirm_password input').attr("type") == "password"){
          $('#signup_show_hide_confirm_password input').attr('type', 'text');
          $('#signup_show_hide_confirm_password i').removeClass( "fa-eye-slash" );
          $('#signup_show_hide_confirm_password i').addClass( "fa-eye" );
      }
  });


  // SignIn
  $(".signin__form__item input").blur(function() {
    if($(this).val() != "") {
        $(this).siblings("label").addClass("active");
    }else {
        $(this).siblings("label").removeClass("active");
    }
  });

  // Show - hide password Signin
  $("#signin_show_hide_password i").on('click', function(event) {
      event.preventDefault();
      if($('#signin_show_hide_password input').attr("type") == "text"){
          $('#signin_show_hide_password input').attr('type', 'password');
          $('#signin_show_hide_password i').addClass( "fa-eye-slash" );
          $('#signin_show_hide_password i').removeClass( "fa-eye" );
      }else if($('#signin_show_hide_password input').attr("type") == "password"){
          $('#signin_show_hide_password input').attr('type', 'text');
          $('#signin_show_hide_password i').removeClass( "fa-eye-slash" );
          $('#signin_show_hide_password i').addClass( "fa-eye" );
      }
  });
});
