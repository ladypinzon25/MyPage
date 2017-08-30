//Galeria
//Inspiration: http://codepen.io/vineethtr/pen/mydgyQ
$(function() {
    var thumbnailC =  $('.thumbnailC');
    var container = $('.viewer-body');
    var close = $('.close');
    var next = $('.next');
    var prev = $('.prev');

    thumbnailC.click(function(){
        var content = $(this).html();
        thumbnailC.removeClass('open');
        $(this).addClass('open');
        $('body').addClass('view-open');

        container.html(content);
    });

    next.click(function() {

        if($('.open').next().length!=0)
        {
            $('.open').removeClass('open').next().toggleClass('open');
        }
        else
        {
            var nextElement =$('.open').prev().prev();
            $('.open').removeClass('open');
            nextElement.toggleClass('open');
        }
        var content = $('.open').html();
        container.html(content);
    });

    prev.click(function() {
        // if ($('.open').index() == 0){$('.thumbnailC:first-child').addClass('open');}
        // else{ $('.open').removeClass('open').prev().toggleClass('open');}
        if($('.open').prev().length!=0)
        {
            $('.open').removeClass('open').prev().toggleClass('open');
        }
        else
        {
            var prevElement =$('.open').next().next();
            $('.open').removeClass('open');
            prevElement.toggleClass('open');
        }
        var content = $('.open').html();
        container.html(content);
    });

    close.click(function() {$('body').removeClass('view-open'); });

});

