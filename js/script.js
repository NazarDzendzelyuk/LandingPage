//THIS SCRIPT IS FOR BURGER MENU;
$(".cross").hide();
$(".menu").hide();
//open the burger menu;
$(".hamburger").show();
$(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
    });
});
//close the burger menu;
$(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
    });
});
//this function allows you to close the burger menu by clicking on the menu list;
$('.click').click(function () {
    $('.menu').slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();

    });
});
// this 2 functions make a hover effect on blocks in section named "WHY CHOOSE US";
if ($(window).width() > '1024') {
    $('.content--box').mouseover(function () {
        $(this).children('.content--box__subscription').hide();
        $(this).children('.content--box--onhover').show();
    });
}
if ($(window).width() > '1024') {
    $('.content--box').mouseout(function () {
        $(this).children('.content--box__subscription').show();
        $(this).children('.content--box--onhover').hide();
    });
}

//End of the script

// this one allows stop carousel slider if window width is less than 768px;
if ($(window).width() < '768') {
    $('.carousel').carousel({
        interval: false
    })
    $('.carousel-indicators').hide();
}

//this script make effects on the main menu depends on scrolling possition; Works only till 1024px;
//after you click the menu button, you'll move to the appropriate document section;
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        $('.topmenu li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

    });
});
// this script can change the main menu color depends on scrolling possition;
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");

        }
    })
}
// animate your scrolling. U can use it if window width is greater than 992px;
// the next few are doing the same;
if ($(window).width() > '992') {
    $(".homeScroll").click(function () {
        $("html, body").animate({
            scrollTop: $("header").height() - 65
        }, 1600);
        return false;
    });
}

if ($(window).width() >= '992' && $(window).width() <= '1024') {
    $(".productsScroll").click(function () {
        $("html, body").animate({
            scrollTop: $("header").height() + 1740
        }, 1600);
        return false;
    });
}
if ($(window).width() > '1024') {
    $(".productsScroll").click(function () {
        $("html, body").animate({
            scrollTop: $("header").height() + 1400
        }, 1600);
        return false;
    });
}
if ($(window).width() >= '992' && $(window).width() <= '1024') {
    $(".contactsScroll").click(function () {
        $("html, body").animate({
            scrollTop: $("header").height() + 2640
        }, 1600);
        return false;
    });
}
if ($(window).width() > '1024') {
    $(".contactsScroll").click(function () {
        $("html, body").animate({
            scrollTop: $("header").height() + 2270
        }, 1600);
        return false;
    });
}

//google maps script;
//an array for possition;
var position = [49.85, 24.0166666667];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 14,
        streetViewControl: false,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);


//THE END
