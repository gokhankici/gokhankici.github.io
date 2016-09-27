(function() {

    var offsetHeight = 55;
    var scrollDuration = 300;

    // $('.navbar-collapse').scrollspy({
    //     offset: offsetHeight
    // });

    $('body').scrollspy({ 
        target: '#nav-links'
    });

    $('.navbar li a').click(function (event) {
        var scrollPos = $('body > .container')
            .find($(this).attr('href'))
            .offset().top - 
            offsetHeight;
        $('body,html').animate({
            scrollTop: scrollPos
        }, scrollDuration, function () {
            if (!$(this).parent().hasClass('dropdown'))
                $(".navbar-collapse").collapse('hide');
        });
        return false;
    });

    
    $('.navbar-brand').click(function (event) {
        $('body,html').animate({
            scrollTop: 0
        }, scrollDuration);
        return false;
    });

}());
