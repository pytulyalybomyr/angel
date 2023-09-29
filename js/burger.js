$(".header__burger-img").click(function () {
    if ($(".header__burger-main").css('width', '0px')) {
        $(".header__burger-main").css('width', '300px')
        $(".header__burger-main").css('height', '100vh')
        $(".header__burger-img").css('opacity', '0.1')
        $(".header__menu").css('display', 'flex')
    } else {
        stop
    }
});

$('.header__burger-img-x').click(function () {
    if ($(".header__burger-main").css('width', '300px')) {
        $(".header__burger-main").css('width', '0')
        $(".header__burger-main").css('height', '0')
        $(".header__burger-img").css('opacity', '1')
        $(".header__menu").css('display', 'none')
    } else {
        stop
    }
});