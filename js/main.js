$(function(){

    // mainvisualの動き
    $(".message01").hover(
        function(){
            $(".message01_ja").toggleClass('active');
    });
    $(".message02").hover(
        function(){
            $(".message02_ja").toggleClass('active');
    });
    $(".message03").hover(
        function(){
            $(".message03_ja").toggleClass('active');
    });
    $(".message04").hover(
        function(){
            $(".message04_ja").toggleClass('active');
    });
    $(".message05").hover(
        function(){
            $(".message05_ja").toggleClass('active');
    });


// ファーストビューの動き
    setTimeout(function(){
        $("#firstview").fadeOut(1000);
    },500);
});

// ハンバーガーメニュー
    $(".btn_menu").on("click", function () {
        $("header").toggleClass("active");
    });
    // メニューのリンクをクリックした時
    $(".nav-sp ul li a").on("click", function () {
        $("header").toggleClass("active");
    });

// スムーススクロール
      // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').on('click',function(){
        // クリックしたaタグのリンクを取得
        let href =$(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href=="" ? "html" : href);
        // トップページからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
        // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
        $("html, body").animate({scrollTop: position}, 600, "swing");
        // urlが変化しないようにfalseを返す
        return false;
        });
