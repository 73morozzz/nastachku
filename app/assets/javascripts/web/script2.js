/*
 * © Mihail Firsov
 * mihailfirsov.ru
 * dev.firsov@gmail.com
*/
jQuery(document).ready(function ($) {

    var $layout=$('#layout'), $overlay=$('#overlay'), $popups=$('.popup');

    $('.open_this').on('click', function() {
        $(this).toggleClass('open');
    });

    if (check_width(604)) {
        var org_logos_carousel=$("#org_logos").touchCarousel({
            pagingNav: false,
            scrollbar: false,
            directionNavAutoHide: false,
            itemsPerMove: 1,
            loopItems: false,
            directionNav: true,
            autoplay: false,
            autoplayDelay: 2000,
            useWebkit3d: true,
            transitionSpeed: 400
        }).data("touchCarousel");
        var spn_logos_carousel=$("#sponsors_logos").touchCarousel({
            pagingNav: false,
            scrollbar: false,
            directionNavAutoHide: false,
            itemsPerMove: 1,
            loopItems: false,
            directionNav: true,
            autoplay: false,
            autoplayDelay: 2000,
            useWebkit3d: true,
            transitionSpeed: 400
        }).data("touchCarousel");
    }


    ////////////////////////////////////////// POPUPS
    $(document).on('click','.open_popup', function() {open_popup($(this).data('popup'), $layout, $overlay)});
    $(document).on('click','.close_popup', function(){$overlay.click()});
    $overlay.on('click', function() {close_popup($layout, $overlay, $popups)});

}); // End ready

function close_popup ($layout, $overlay, $popups) {
    var top=-(parseInt($layout.css('top')));
    $layout.removeClass('noscroll').css('top','');
    $(window).scrollTop(top);
    $overlay.fadeOut(150);
    $popups.fadeOut(150).removeClass('open');
}

function open_popup (popup_data, $layout, $overlay) {
    var $window=$(window),
        scroll_top=$window.scrollTop();
    $layout.addClass('noscroll').css('top',-scroll_top+'px');
    $('#popup_'+popup_data).fadeIn(150).addClass('open');
    $overlay.fadeIn(150);
    $window.scrollTop(0);
}

function check_width (data_width) {
    if ($(window).width()<=data_width) return true;
    return false;
}

function programm_next (next, prev) {
    var page=Number(next.attr('data-page'));
    if (check_width(604)) {
        if (page<6){
            if (page==5) next.addClass('disable');
            next.attr('data-page', (page + 1));
            prev.removeClass('disable').attr('data-page', (page + 1));
            next.parents('table').attr('class', 'page-' + (page + 1));
        }
    } else if (check_width(964)) {
        if (page==1) {
            next.addClass('disable').attr('data-page',2);
            prev.removeClass('disable').attr('data-page',2);
            next.parents('table').attr('class','page-2')
        }
    }
}

function programm_prev (prev, next) {
    var page=Number(prev.attr('data-page'));
    if (check_width(604)) {
        if (page>1){
            if (page==2) prev.addClass('disable');
            prev.attr('data-page', (page - 1));
            next.removeClass('disable').attr('data-page', (page - 1));
            prev.parents('table').attr('class', 'page-' + (page - 1));
        }
    } else if (check_width(964)) {
        if (page==2) {
            next.removeClass('disable').attr('data-page',1);
            prev.addClass('disable').attr('data-page',1);
            next.parents('table').attr('class','page-1')
        }
    }
}

function contacts_next (next, prev) {
    var page=Number(next.attr('data-page')), contacts_info=$('#contacts_info');
    if (page<3) {
        next.attr('data-page',(page+1));
        prev.removeClass('disable').attr('data-page',(page+1));
        contacts_info.find('li').hide().eq(page).show();
    }
    if (page==2) {
        next.addClass('disable');
    }
}

function contacts_prev (prev, next) {
    var page=Number(next.attr('data-page')), contacts_info=$('#contacts_info');
    if (page>1) {
        prev.attr('data-page',(page-1));
        next.removeClass('disable').attr('data-page',(page-1));
        contacts_info.find('li').hide().eq(page-2).show();
    }
    if (page==2) {
        prev.addClass('disable');
    }
}