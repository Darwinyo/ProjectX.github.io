/// <reference path="jquery-3.1.1.js" />
$('.level2').hide(500);
$('.level1 ul').prev().append('<span class="caret"></span>')
$('#side-collapse').on('click', function (e) {
    e.preventDefault();
    if ($('#Wrapper').hasClass('wrapper') == false) {
        $('.pagewrapper, .headerbar').animate({ left: '250px', width: '-=250px' })
        $('.sidebarwrapper').animate({ width: '250px' })
        $('#Wrapper').toggleClass('wrapper');
    }
    else {
        $('.pagewrapper, .headerbar').animate({ left: '-=250px', width: '+=250px' })
        $('.sidebarwrapper').animate({ width: '0px' })
        $('#Wrapper').toggleClass('wrapper');
    }
});
$('.level1').mouseenter(function (e) {
    $(this).addClass('hovered');
    $('.hovered ul > .level2').show(500);
});
$('.level1').mouseleave(function (e) {
    $('.hovered ul > .level2').hide(500);
    $(this).removeClass('hovered');
});