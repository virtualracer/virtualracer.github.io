/*
 * December 2014
 * progressScroll 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
 */

$.fn.progressScroll = function(options) {

    var settings = $.extend({
        width: 100,
        height: 100,
        borderSize: 10,
        mainBgColor: "#E6F4F7",
        lightBorderColor: "#A2ECFB",
        darkBorderColor: "#39B4CC",
        fontSize: "30px"
    }, options);

    var innerHeight, offsetHeight, netHeight,
        self = this,
        container = this.selector,
        borderContainer = "progressScroll-border",
        circleContainer = "progressScroll-circle",
        textContainer = "progressScroll-text";

    this.getHeight = function () {
        innerHeight = window.innerHeight;
        offsetHeight = document.body.offsetHeight;
        netHeight = offsetHeight - innerHeight;
    }

    this.addEvent = function () {
        var e = document.createEvent("Event");
        e.initEvent("scroll", false, false);
        window.dispatchEvent(e);
    }

    this.updateProgress = function (per) {
        var per = Math.round(100 * per);
        var deg = per * 360 / 100;
        if (deg <= 180) {
            $("." + borderContainer, container).css("background-image", "linear-gradient(" + (90 + deg) + "deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)");
        }
        else {
            $("." + borderContainer, container).css("background-image", "linear-gradient(" + (deg - 90) + "deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)");
        }
        $("." + textContainer, container).text(per + "%");
    }

    this.prepare = function () {
        $(container).addClass("progressScroll");
        $(container).html("<div class='" + borderContainer + "'><div class='" + circleContainer + "'><span class='" + textContainer + "'></span></div></div>");

        $(".progressScroll").css({
            "width" : settings.width,
            "height" : settings.height,
            "position" : "fixed",
            "top" : "20px",
            "right" : "20px"
        });
        $("." + borderContainer, container).css({
            "position" : "relative",
            "text-align" : "center",
            "width" : "100%",
            "height" : "100%",
            "border-radius" : "50%",
            "background-color" : settings.darkBorderColor,
            "background-image" : "linear-gradient(91deg, transparent 50%," + settings.lightBorderColor + "50%), linear-gradient(90deg," +  settings.lightBorderColor + "50%, transparent 50%"
        });
        $("." + circleContainer, container).css({
            "position": "relative",
            "top" : "50%",
            "left" : "50%",
            "transform" : "translate(-50%, -50%)",
            "text-align" : "center",
            "width" : settings.width - settings.borderSize,
            "height" : settings.height - settings.borderSize,
            "border-radius" : "50%",
            "background-color" : settings.mainBgColor
        });
        $("." + textContainer, container).css({
            "top" : "50%",
            "left" : "50%",
            "transform" : "translate(-50%, -50%)",
            "position" : "absolute",
            "font-size" : settings.fontSize
        });
    }

    this.init = function () {

        self.prepare();

        $(window).bind("scroll", function () {
            var getOffset = window.pageYOffset || document.documentElement.scrollTop,
                per = Math.max(0, Math.min(1, getOffset / netHeight));
            self.updateProgress(per);
        });

        $(window).bind("resize", function () {
            self.getHeight();
            self.addEvent();
        });

        $(window).bind("load", function () {
            self.getHeight();
            self.addEvent();
        });
    }

    self.init();
}