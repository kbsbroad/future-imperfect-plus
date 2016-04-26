(function($) {
    $(function(){
        var offset = 300;
        var offsetOpacity = 1200;
        var scrollTopDuration = 700;
        var fadeOut = 'fade-out';
        var btnFadeOut = 'btn-' + fadeOut;
        
        var $header = $('#header');
        var $gotoTopBtn = $('#btn-goto-top');

        $(window).scroll(function(){
            if ($(this).scrollTop() > offset) {
                $header.addClass(fadeOut);
                $gotoTopBtn.fadeIn();
            } else {
                $header.removeClass(fadeOut);
                
                $gotoTopBtn.fadeOut();
                $gotoTopBtn.removeClass(btnFadeOut);
            }

            if($(this).scrollTop() > offsetOpacity) {
                $gotoTopBtn.addClass(btnFadeOut);
            }
        });

        //smooth scroll to top
        $gotoTopBtn.on('click', function(event){
            event.preventDefault();
            $('body, html').animate({scrollTop: 0 }, scrollTopDuration);
        });
    });

})(jQuery || $);