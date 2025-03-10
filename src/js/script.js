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
    spaceBetween: 24,
    autoplay: {
        delay: 1000,
    },

    breakpoints: {
      768: {
        spaceBetween: 40,
      },
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

  //タブの切り替え(campaign)
  // $(function () {
  //   const tabButton = $(".js-tab"),
  //     tabContent = $(".js-tab-content");
  //   tabButton.on("click", function () {
  //     let index = tabButton.index(this);

  //     tabButton.removeClass("is-active");
  //     $(this).addClass("is-active");
  //     tabContent.removeClass("is-active");
  //     tabContent.eq(index).addClass("is-active");
  //   });
  // });

  $(function () {
    var $galleryItems = $(".js-modal-open");
    var $modal = $(".js-modal");
    var $modalImage = $(".modal__img");
    var $body = $("body");

    // 各ギャラリー画像をクリックしたらモーダルを開く
    $galleryItems.on("click", function () {
      var imageUrl = $(this).attr("src"); // クリックした画像のURLを取得
      $modalImage.attr("src", imageUrl); // モーダルの画像に設定
      $modal.fadeIn(200).addClass("is-open"); // フェードインで表示
      $body.addClass("fixed"); // 背景スクロール防止
    });

    // 画像またはモーダルの外側をクリックした際に閉じる
    $('.modal, .modal__img').on("click", function () {
        $modal.removeClass("is-open");
        $body.removeClass("fixed"); // 背景スクロールを許可
    });
  });

  // 【info ページ】
  // タブの切り替え(info)
  $(function () {
    const infoTabButton = $(".js-info-tab"),
      infoTabContent = $(".js-info-tab-content");
    infoTabButton.on("click", function () {
      let index = infoTabButton.index(this);

      infoTabButton.removeClass("is-active");
      $(this).addClass("is-active");
      infoTabContent.removeClass("is-active");
      infoTabContent.eq(index).addClass("is-active");
    });
  });

  // タブの切り替え・ページ遷移(info)
  $(function () {
    //タブへダイレクトリンクの実装
    //リンクからハッシュを取得
    var hash = location.hash;
    hash = (hash.match(/^#info-tab-content\d+$/) || [])[0];

    //リンクにハッシュが入っていればtabnameに格納
    if ($(hash).length) {
        var tabname = hash.slice(1);
    } else {
        var tabname = "info-tab-content1";
    }

    //コンテンツ非表示・タブを非アクティブ
    $(".js-info-tab").removeClass("is-active");
    $(".js-info-tab-content").removeClass("is-active");

    //何番目のタブかを格納
    var tabno = $(".js-info-tab-content#" + tabname).index();

    //コンテンツ表示
    $(".js-info-tab-content").eq(tabno).addClass("is-active");

    //タブのアクティブ化
    $(".js-info-tab").eq(tabno).addClass("is-active");
});



//   $(document).ready(function() {
//     function openTab(hash) {
//         $(".js-info-tab-content").removeClass("is-active");
//         if (hash) {
//             $(hash).addClass("is-active");
//         } else {
//             $("#info-tab1").addClass("is-active"); // デフォルトはタブ1
//         }
//     }

//     // 最初にURLのハッシュを見てタブを開く
//     openTab(location.hash);

//     // タブをクリックしたときにハッシュを更新
//     $(".tab-link").on("click", function(e) {
//         e.preventDefault(); // 通常のリンク動作を防ぐ
//         var target = $(this).attr("href");
//         history.pushState(null, null, target); // URLを変更
//         openTab(target);
//     });

//     // 戻るボタン対応
//     $(window).on("hashchange", function() {
//         openTab(location.hash);
//     });
// });

  // 【blog ページ】
  //トグル展開(サイドバー)
  $(function () {
    $(".js-archive-year").on("click", function () {
      $(this).toggleClass("is-open");
      $(this).next().slideToggle(300);
    });
  });

  //タブの切り替え(voice)
  $(function () {
    const tabButton = $(".js-voice-tab"),
      tabContent = $(".js-tab-content");
    tabButton.on("click", function () {
      let index = tabButton.index(this);

      tabButton.removeClass("is-active");
      $(this).addClass("is-active");
      tabContent.removeClass("is-active");
      tabContent.eq(index).addClass("is-active");
    });
  });

  //アコーディオン(FAQ)
  $(function () {
    $(".js-accordion-box__answer").css("display", "block");
    $(".js-accordion-box__question").addClass("is-open");
    $(".js-accordion-box__question").on("click", function () {
      $(this).toggleClass("is-open");
      $(this).next().slideToggle(300);
    });
  });

  // //リンク遷移先
  // $(function () {
  //   // ヘッダーの高さを取得（padding や border を含む）
  //   const headerHeight = $(".js-header").outerHeight();

  //   // ヘッダーの高さ分だけ main の位置を調整
  //   $("main").css("margin-top", headerHeight);

  //   // ページ内スクロール
  //   $('a[href^="#"]').click(function (event) {
  //     event.preventDefault(); // デフォルトの動作を無効化

  //     const speed = 600;
  //     const href = $(this).attr("href");
  //     const target = $(href === "#" || href === "" ? "html" : href);

  //     if (!target.length) return; // ターゲットがない場合は処理を中断

  //     const position = target.offset().top - headerHeight;

  //     $("html").animate({ scrollTop: position }, speed, "swing");
  //   });
  });

