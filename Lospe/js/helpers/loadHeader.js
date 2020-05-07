export default function loadHeader() {
    let header_offset = $(".header").height();

    $(window).on("scroll", (event) => {
        if (window.scrollY >= header_offset) {
            if (!$(".header").hasClass("navbar-header"))
                $(".header").addClass("navbar-header");
        } else {
            if ($(".header").hasClass("navbar-header"))
                $(".header").removeClass("navbar-header");
        }
    });
}

export function changeActiveToOrder() {
    var $listName1 = $(".header .navbar-nav li:nth-child(1)");
    var $listName2 = $(".header .navbar-nav li:nth-child(2)");
    if ($listName1.hasClass("active"))
        $listName1.removeClass("active");
    if (!$listName2.hasClass("active"))
        $listName2.addClass("active");
}

export function changeActiveToHome() {
    var $listName1 = $(".header .navbar-nav li:nth-child(1)");
    var $listName2 = $(".header .navbar-nav li:nth-child(2)");

    if (!$listName1.hasClass("active"))
        $listName1.addClass("active");
    if ($listName2.hasClass("active"))
        $listName2.removeClass("active");
}

export function noActive() {
    var $listName1 = $(".header .navbar-nav li:nth-child(1)");
    var $listName2 = $(".header .navbar-nav li:nth-child(2)");

    if ($listName1.hasClass("active"))
        $listName1.removeClass("active");
    if ($listName2.hasClass("active"))
        $listName2.removeClass("active");
}