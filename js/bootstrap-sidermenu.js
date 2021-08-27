/**
 * author: guanheng88
 * version: 1.0.0
 */
$(function () {
    var menu = $(".menu-siderbar");
    var menuItem = menu.find(".nav-item");

    if (document.URL == "/courses/") {
        console.log(document.URL);
    };

    const fruits = ["/courses/upcoming-courses/", "/courses/related-courses/", "/courses/past-courses/"];

    if (fruits.includes(window.location.pathname)) {
        $(".courselist").css("display", "block");
    }

    $("#01courselist").click(function (event) {
        //    event.preventDefault(); 
        // $(this).children(".resourcelist").toggleClass("hide")


        x = $(".courselist");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    })

    const fruits2 = ["/resources/publications/"];
    if (fruits2.includes(window.location.pathname)) {
        $(".resourcelist").css("display", "block");
    } else {
        // $(".resourcelist").css("display", "none");
    }
    $("#01resource").click(function (event) {
        //    event.preventDefault(); 
        // $(this).children(".resourcelist").toggleClass("hide")


        x = $(".resourcelist");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    })



    menuItem.find(".nav-link-parent").click(function () {
        var parentItem = $(this).parent();
        var isOpen = parentItem.hasClass("open");

        menuItem.each(function (i, element) {
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
            }
        });

        if (isOpen) {
            parentItem.removeClass("open");
        }
        else {
            parentItem.addClass("open");
        }
    });
});

