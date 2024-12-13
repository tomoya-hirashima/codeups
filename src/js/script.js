jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-open");
    $(".js-drawer").fadeToggle();
    $(".js-header").toggleClass("is-open");
    $("body").toggleClass("is-scroll");
  });

    // ドロワー  リサイズイベント
    $(window).on("resize", function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".js-hamburger").removeClass("is-open");
        $(".js-drawer").fadeOut();
        $("body").removeClass("is-scroll");
      }
    });
});

$(function () {
  // スライダー(mv)
  const swiperMv = new Swiper(".js-swiper-mv", {
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
  const swiperCampaign = new Swiper(".js-swiper-campaign", {
    loop: true,
    speed: 2000,
    slidesPerView: "auto",
    grabCursor: true,
    spaceBetween:24,
    // autoplay: {
    //     delay: 1000,
    // },

    breakpoints: {
      768: {
        spaceBetween:40,
      }
    },

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

  // ページトップボタン
  $(function () {
    const pageTop = $(".js-pagetop");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });
});
