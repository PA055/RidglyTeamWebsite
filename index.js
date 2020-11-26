$( document ).ready(function () {
    var full_screens = document.getElementsByClassName('full-page');
    var array_len = full_screens.length;
    for (var i = 0; i < array_len; i++) {
        // console.log(full_screens[i])
        // full_screens[i].style.width = screen.width + "px";
        full_screens[i].style.height = screen.height + "px";
    }
    $( "#home-li" ).click(function ( event ) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    $( "#our-story-li" ).click(function ( event ){
        event.preventDefault();
        targetedScroll('#story')
        
    })
    $( "#competitions-awards-li" ).click(function ( event ){
        event.preventDefault();
        targetedScroll('#awards')
        
    })
    $( "#teams-li" ).click(function ( event ){
        event.preventDefault();
        targetedScroll('#teams')
        
    })
    $( "#our-program-li" ).click(function ( event ){
        event.preventDefault();
        targetedScroll('#program')
        
    })
    $( "#help-us-li" ).click(function ( event ){
        event.preventDefault();
        targetedScroll('#help')
        
    })
})

function targetedScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000);
}

/* window.addEventListener('scroll', function(){
    if (this.scollY > 467) {
        document.getElementById("navbar").style.position="fixed"
    }
}) */

/* function toTop(){
    window.scrollTo(0, 0);
} */