define([
    'jquery',
    'handlebars',
    'radio',
    'countdown',
    'moment',
    'moment-tmz',
    'slick'
], function ($, Handlebars, Radio, Countdown, Moment) {

    'use strict';

    return {
        initialize: function() {
            var scroll = $(window).scrollTop();
            if(scroll >= 150) {
                $('.header').addClass('fixed');
            } else {
                $('.header').removeClass('fixed');
            }
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if(scroll >= 150) {
                    $('.header').addClass('fixed');
                } else {
                    $('.header').removeClass('fixed');
                }
            });

            Moment.tz.add("America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6");

            var weddingDate = Moment.tz("2017-09-23 16:00", "America/New_York");
            $('.counter').countdown(weddingDate.toDate(), function(event) {
                $(this).html(event.strftime('<div class="numCount">%m</div> months <div class="numCount">%n</div> days <div class="numCount">%H</div> hours <div class="numCount">%M</div> minutes <div class="numCount">%S</div> seconds'));
            });

            var disableArrows = false;
            $('.fa-angle-right').on('click', function() {
                if(!disableArrows) {
                    var carLeft = parseInt($('.img-carousel').css('left').split('px'));
                    var carWidth = $('.img-carousel').width();
                    disableArrows = true;
                    if(carLeft - 600 > -carWidth) {
                        $('.img-carousel').animate({
                            left: "-=600"
                        }, 300, function() {
                            disableArrows = false;
                        });
                    } else {
                        $('.img-carousel').animate({
                            left: 0
                        }, 300, function() {
                            disableArrows = false;
                        });
                    }
                }
            });
            $('.fa-angle-left').on('click', function() {
                if(!disableArrows) {
                    var carLeft = parseInt($('.img-carousel').css('left').split('px'));
                    var carWidth = $('.img-carousel').width();
                    disableArrows = true;
                    if(carLeft < 0) {
                        $('.img-carousel').animate({
                            left: "+=600"
                        }, 300, function() {
                            disableArrows = false;
                        });
                    } else {
                        $('.img-carousel').animate({
                            left: -carWidth + 600
                        }, 300, function() {
                            disableArrows = false;
                        });
                    }
                }
            });
        }
    };

});
