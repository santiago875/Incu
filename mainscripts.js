function initSparkline() {
    var e = function() { for (var e = new Array(20), t = 0; t < e.length; t++) e[t] = [5 + n(), 10 + n(), 15 + n(), 20 + n(), 30 + n(), 35 + n(), 40 + n(), 45 + n(), 50 + n()]; return e }(),
        t = { type: "bar", barWidth: 3, height: 15, barColor: "#f46b45" };

    function n() { return Math.floor(80 * Math.random()) }
    $("#mini-bar-chart1").sparkline(e[0], t), t.barColor = "#2c83b6", $("#mini-bar-chart2").sparkline(e[1], t), t.barColor = "#61bda1", $("#mini-bar-chart3").sparkline(e[2], t), t.barColor = "#a5d8a2", $(".sparkline").each(function() {
        var e = $(this);
        e.sparkline("html", e.data())
    }), $(".sparkbar").sparkline("html", { type: "bar" })
}

function skinChanger() {
    $(".choose-skin li").on("click", function() {
        var e = $("#body"),
            t = $(this),
            n = $(".choose-skin li.active").data("theme");
        $(".choose-skin li").removeClass("active"), e.removeClass("theme-" + n), t.addClass("active");
        $(".choose-skin li.active").data("theme");
        e.addClass("theme-" + t.data("theme"))
    }), $(".themesetting .theme_btn").on("click", function() { $(".themesetting").toggleClass("open") }), $(".rtl_mode input").on("change", function() { this.checked ? $("body").addClass("rtl_active") : $("body").removeClass("rtl_active") }), $(".gradient_mode input").on("change", function() { this.checked ? $(".theme-bg").addClass("gradient") : $(".theme-bg").removeClass("gradient") })
}

function CustomJs() {
    $("#main-menu").metisMenu(), $("#left-sidebar .sidebar-scroll").slimScroll({ height: "calc(100vh - 65px)", wheelStep: 10, touchScrollStep: 50, color: "rgba(23,25,28,0.02", size: "3px", borderRadius: "3px", alwaysVisible: !1, position: "right" }), $(".btn-toggle-offcanvas").on("click", function() { $("body").toggleClass("offcanvas-active") }), $("#main-content").on("click", function() { $("body").removeClass("offcanvas-active"), $(".sticky-note").removeClass("open") }), $(".right_toggle, .overlay").on("click", function() { $("#rightbar").toggleClass("open"), $(".overlay").toggleClass("open") }), $(".right_note").on("click", function() { $(".sticky-note").toggleClass("open") }), 0 < $('[data-toggle="tooltip"]').length && $('[data-toggle="tooltip"]').tooltip(), 0 < $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover(), $(window).on("load", function() { $("#main-content").height() < $("#left-sidebar").height() && $("#main-content").css("min-height", $("#left-sidebar").innerHeight() - $("footer").innerHeight()) }), $(window).on("load resize", function() { $(window).innerWidth() < 420 ? $(".navbar-brand logo.svg").attr("src", "assets/images/icon.svg") : $(".navbar-brand icon-light.svg").attr("src", "assets/images/logo.svg") }), $(".full-screen").on("click", function() { $(this).parents(".card").toggleClass("fullscreen") }), document.getElementById("btnFullscreen").addEventListener("click", function() {
        var e;
        e = e || document.documentElement, document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }), $(".progress .progress-bar").progressbar({ display_text: "none" }), $(".header-dropdown .dropdown-toggle").on("click", function() { $(".header-dropdown li .dropdown-menu").toggleClass("vivify fadeIn") }), $(".check-all").on("click", function() { this.checked ? $(this).parents(".check-all-parent").find(".checkbox-tick").each(function() { this.checked = !0 }) : $(this).parents(".check-all-parent").find(".checkbox-tick").each(function() { this.checked = !1 }) }), $(".checkbox-tick").on("click", function() { $(this).parents(".check-all-parent").find(".checkbox-tick:checked").length == $(this).parents(".check-all-parent").find(".checkbox-tick").length ? $(this).parents(".check-all-parent").find(".check-all").prop("checked", !0) : $(this).parents(".check-all-parent").find(".check-all").prop("checked", !1) }), $("a.mail-star").on("click", function() { $(this).toggleClass("active") }), $(".menu_toggle").on("click", function() { $("body").toggleClass("toggle_menu_active") }), $(".sidebar_light input").on("change", function() { this.checked ? $(".sidebar").addClass("light_active") : $(".sidebar").removeClass("light_active") })
}

function SearchDiv() { $(".search-form input").focus(function() { $(".recent_searche").show("slow") }), $(".search-form input").blur(function() { $(this).val() || $(".recent_searche").hide("slow") }) }
$(function() {
    "use strict";
    skinChanger(), initSparkline(), CustomJs(), SearchDiv(), setTimeout(function() { $(".page-loader-wrapper").fadeOut() }, 30)
}), $.fn.clickToggle = function(t, n) {
    return this.each(function() {
        var e = !1;
        $(this).bind("click", function() { return e ? (e = !1, n.apply(this, arguments)) : (e = !0, t.apply(this, arguments)) })
    })
};
var toggleSwitch = document.querySelector('.dark_mode input[type="checkbox"]'),
    currentTheme = localStorage.getItem("theme");

function switchTheme(e) { e.target.checked ? (document.documentElement.setAttribute("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light")) }
currentTheme && (document.documentElement.setAttribute("data-theme", currentTheme), "dark" === currentTheme && (toggleSwitch.checked = !0)), toggleSwitch.addEventListener("change", switchTheme, !1);