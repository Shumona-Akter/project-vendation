$('.work-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    // slidesToShow: 3,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '250px',
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '200px',
              slidesToShow: 2
            }
          },
        {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '150px',
              slidesToShow: 2
            }
          },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '110px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '70px',
          slidesToShow: 1
        }
      },

    ]
  });
      

  // our three steps
  $('.Three-Step-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              autoplay: true,
              arrows: false,
            }
          },
        {
            breakpoint: 1000,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              autoplay: true,
              arrows: false,
            }
          },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          autoplay: true,
          arrows: false,
          centerPadding: '110px',
          
        }
      },
      {
        breakpoint: 620,
        settings: {
          infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              arrows: false,
              autoplay: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 2000,
              arrows: false,
              autoplay: true,
        }
      },

    ]
  });
      
// your vustomer


$('.customer-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  arrows: false,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
            arrows: false,
          }
        },
      {
          breakpoint: 1000,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
            arrows: false,
          }
        },
    {
      breakpoint: 850,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
        
      }
    },
    {
      breakpoint: 620,
      settings: {
        infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows: false,
            autoplay: true,
      }
    },
    {
      breakpoint: 400,
      settings: {
        infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows: false,
            autoplay: true,
      }
    },

  ]
});


// work slider

$('.boots-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 500,
  autoplay: true,
  arrows: false,
  responsive: [
      {
          breakpoint: 1200,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 500,
            autoplay: true,
            arrows: false,
          }
        },
      {
          breakpoint: 1000,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 500,
            autoplay: true,
            arrows: false,
          }
        },
    {
      breakpoint: 850,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false,
        centerPadding: '110px',
        
      }
    },
    {
      breakpoint: 620,
      settings: {
        infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows: false,
            autoplay: true,
      }
    },
    {
      breakpoint: 400,
      settings: {
        infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            arrows: false,
            autoplay: true,
      }
    },

  ]
});


$('.paradise-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});