var title = $('.accordion h1');

//アコーディオンをクリックした時の動作
title.on('click', function() {//タイトル要素をクリックしたら
    console.log('clocked title.');
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });
  