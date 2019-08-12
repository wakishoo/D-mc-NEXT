$(function() {
// ハンバーガーメニュー
    $('.menu-trigger').on('click', function() {
	    $(this).toggleClass('active');
	    $('#sp-menu').fadeToggle();
	    return false;
    });

    $('#sp-menu a').on('click', function() {
	    $('.menu-trigger').toggleClass('active');
	    $('#sp-menu').fadeToggle();
	    return false;
    });
});