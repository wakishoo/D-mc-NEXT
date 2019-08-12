$(function(){

// トップへ戻るアニメーション
  $('#top-btn').click(function(){
      $('html, body').animate({
        'scrollTop':0
      },500);
  });


// スクロールでconceptの文字が出てくる
  $('.animation').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = jQuery(window).height(),
       topWindow = jQuery(window).scrollTop();
   $('.animation').each(function(){
    var targetPosition = jQuery(this).offset().top;
    if(topWindow > targetPosition - windowHeight + 100){
     jQuery(this).addClass("fadeInDown");
    }
   });
  });



// sidebar関連
  $(window).scroll(function(){
      var docHeight = $(document).innerHeight(), //ドキュメントの高さ
        windowHeight = $(window).innerHeight(), //ウィンドウの高さ
        pageBottom = docHeight - windowHeight; //ドキュメントの高さ - ウィンドウの高さ
      //conept
      if ($(window).scrollTop() > $('#concept').offset().top &&　$(window).scrollTop() < $('#wwa').offset().top){
            $('#sidebar').removeClass().addClass("sidebar1");
            $("#sidebar a").css({"animation": "fadeIn 2s ease 0s 1 normal",
                                  "-webkit-animation": "fadeIn 2s ease 0s 1 normal",
                                  });
            $("#sidebar .1").addClass("effect1");
            $("#sidebar .2").removeClass("effect2");
            $("#sidebar .3").removeClass("effect3");
            $("#sidebar .4").removeClass("effect4");
            $("#sidebar .5").removeClass("effect5");
      // wwa
      }else if($(window).scrollTop() > $('#wwa').offset().top &&　$(window).scrollTop() < $('#cm').offset().top){
            $("#sidebar .1").removeClass("effect1");
            $("#sidebar .2").addClass("effect2");
            $("#sidebar .3").removeClass("effect3");
            $("#sidebar .4").removeClass("effect4");
            $("#sidebar .5").removeClass("effect5");
      // cm
      }else if($(window).scrollTop() > $('#cm').offset().top &&　$(window).scrollTop() < $('#activity').offset().top){
            $("#sidebar .2").removeClass("effect2");
            $("#sidebar .3").addClass("effect3");
            $("#sidebar .4").removeClass("effect4");
            $("#sidebar .5").removeClass("effect5");
      // activity
      }else if($(window).scrollTop() > $('#activity').offset().top &&　$(window).scrollTop() < $('#contact').offset().top){
            $("#sidebar .3").removeClass("effect3");
            $("#sidebar .4").addClass("effect4");
      // 一番下
      }else if(pageBottom = $(window).scrollTop()) {
            $("#sidebar .4").removeClass("effect4");
            $("#sidebar .5").addClass("effect5");
      }else{
            $('#sidebar').removeClass().addClass("sidebar");
      }
  });




});