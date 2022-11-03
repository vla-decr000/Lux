$(function(){
    $('.hero__slider').slick({
        arrows:false ,
        dots:true ,
        slidesToShow:1 ,
        slidesToScroll:1 ,
        infinite:true,
        autoplay:true ,
        autoplaySpeed:2000
    })
});
$(function(){
    $('.reviews__slider').slick({
        arrows:false ,
        dots:true ,
        slidesToShow:4 ,
        slidesToScroll:2 ,
        infinite:true,
        autoplay:true ,
        autoplaySpeed:3000 ,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    })
})