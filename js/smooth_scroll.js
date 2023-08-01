$(function(){
    var $page_top_btn = $('.page_top_btn');

    // ページトップボタンをクリックした場合に処理
    $page_top_btn.click(function() {
       // スクロールの速度
       var speed = 1500; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // ヘッダー高さ分の調整値
       var header_height = $("#header").height();
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得、調整
       var position = target.offset().top - header_height;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });