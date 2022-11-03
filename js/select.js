$(function(){
    $("select").change(function() {
        var option = $(this).find('option:selected');
        window.location.href = option.data("url");
      });
      $('.burger').on("click" , function(){
        $(".burger__menu").addClass("burger__menu--active")
        $(".burger").addClass("burger--active")
        $(".cross").addClass("cross--active")
        $(".cross").removeClass("cross--footer")
      })
      $(".cross").on("click" , function(){
        $(".burger__menu").removeClass("burger__menu--active")
        $(".cross").removeClass("cross--active")
        $(".burger").removeClass("burger--active")
        $(".burger__menu-list").removeClass("burger__menu-list--active")
      })


      $(".burger__list-item").on("click" , function(){
        $(".burger__menu").removeClass("burger__menu--active")
        $(".cross").removeClass("cross--active")
        $(".burger").addClass("burger--active")

      })
      $('.burger-footer').on("click" , function(){
        $(".burger__menu").addClass("burger__menu--active")
        $(".burger__menu-list").addClass("burger__menu-list--active")
        $(".burger").addClass("burger--active")
        $(".burger").addClass("burger--footer")
        $(".cross").removeClass("cross--active")
        $(".cross").addClass("cross--footer")
      })

})


