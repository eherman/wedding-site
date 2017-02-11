define([
    'jquery',
    'handlebars',
    'radio',
    'countdown'
], function ($, Handlebars, Radio, Countdown) {

    'use strict';

    return {
        initialize: function() {

            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if(scroll >= 150) {
                    $('.header').addClass('fixed');
                } else {
                    $('.header').removeClass('fixed');
                }
            });

            $('.counter').countdown('2017/09/23', function(event) {
                $(this).html(event.strftime('%m months %n days %H hours %M minutes %S seconds'));
            });

        }
    };

});
