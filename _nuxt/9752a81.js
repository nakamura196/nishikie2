/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{418:function(o,t,n){n(18),n(55),n(28),function(o){"use strict";o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=o(this.hash);if((t=t.length?t:o("[name="+this.hash.slice(1)+"]")).length)return o("html, body").animate({scrollTop:t.offset().top-71},1e3,"easeInOutExpo"),!1}})),o(document).scroll((function(){o(this).scrollTop()>100?o(".scroll-to-top").fadeIn():o(".scroll-to-top").fadeOut()})),o(".js-scroll-trigger").click((function(){o(".navbar-collapse").collapse("hide")})),o("body").scrollspy({target:"#mainNav",offset:80});var t=function(){o("#mainNav").offset().top>100?o("#mainNav").addClass("navbar-shrink"):o("#mainNav").removeClass("navbar-shrink")};t(),o(window).scroll(t),o((function(){o("body").on("input propertychange",".floating-label-form-group",(function(t){o(this).toggleClass("floating-label-form-group-with-value",!!o(t.target).val())})).on("focus",".floating-label-form-group",(function(){o(this).addClass("floating-label-form-group-with-focus")})).on("blur",".floating-label-form-group",(function(){o(this).removeClass("floating-label-form-group-with-focus")}))}))}(jQuery)}}]);