$(document).ready(function() {
    var full_screens = document.getElementsByClassName('full-page');
    var array_len = full_screens.length;
    for (var i = 0; i < array_len; i++) {
        // console.log(full_screens[i])
        // full_screens[i].style.width = screen.width + "px";
        if (full_screens[i].offsetHeight < window.innerHeight) {
            full_screens[i].style.height = window.innerHeight + "px";
        }
        // console.log(full_screens[i].css(""))
    }
    $("#home-li").click(function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })

    $("#our-story-li").click(function(event) {
        event.preventDefault();
        document.querySelector('#story').scrollIntoView();
        $('html, body').scrollTop -= $('.navbarm').offsetHeight;
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })

    $("#competitions-awards-li").click(function(event) {
        event.preventDefault();
        document.querySelector('#awards').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })


    $("#teams-li").click(function(event) {
        event.preventDefault();
        document.querySelector('#teams').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })

    $("#our-program-li").click(function(event) {
        event.preventDefault();
        document.querySelector('#program').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })

    $("#help-us-li").click(function(event) {
        event.preventDefault();
        document.querySelector('#help').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({ "cssText": "background-color: #f6c90e !important" });
        $("#navbarSupportedContent").removeClass("show");
    })
})

function targetedScroll(id) {
    $('html, body').animate({ scrollTop: $(id).offset().top });
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideing-952G");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";

    setTimeout(carousel, 4000);
}