jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-open");
    $(".js-drawer").fadeToggle();
    // $("body").toggleClass("is-scroll");

    if ($("body").css("overflow") === "hidden") {
      $("body").css({ height: "", overflow: "" });
    } else {
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });
});

$(function () {
  // スライダー(mv)
  const swiperMv = new Swiper(".swiper-mv", {
    loop: true,
    effect: "fade",
    speed: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

  // スライダー(campaign)
  const swiperCampaign = new Swiper(".swiper-campaign", {
    loop: true,
    speed: 2000,
    // spaceBetween:24,
    // centeredSlides: true,
    initialSlide: 0,
    slidesPerView: "auto",

    // autoplay: {
    //     delay: 1000,
    // },

    // ナビゲーションボタンの設定
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });

  //画像の出現アニメーション
  var box = $(".img-animation"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");

    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
