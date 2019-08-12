$(function() {
// vegas2
    $('#mv').vegas({
        slides: [
        	{ src: 'sample3.jpg' },
        	{ src: 'sample6.jpg' },
            { src: 'sample1.jpg' },
            { src: 'sample4.jpg' },
            { src: 'sample5.jpg' }
        ],
        overlay: 'overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 4000, //スライドの遷移アニメーションの時間
        delay: 10000, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 20000, //スライド表示中のアニメーションの時間
    });

});