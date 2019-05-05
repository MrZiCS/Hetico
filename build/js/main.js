$(window).scroll(function () {
    let scroll = $(this).scrollTop();
    let header = $('header');
    if(scroll >= 80){
        header.addClass('scroll');
    } else {
        header.removeClass('scroll');
    }
})


var topItem = $('.works-item'),
    topItemWidth = topItem.outerWidth();
topItem.css('height', topItemWidth);