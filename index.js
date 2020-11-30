$( document ).ready(function () {
    var full_screens = document.getElementsByClassName('full-page');
    var array_len = full_screens.length;
    for (var i = 0; i < array_len; i++) {
        // console.log(full_screens[i])
        // full_screens[i].style.width = screen.width + "px";
        if (full_screens[i].offsetHeight < screen.height) {
        full_screens[i].style.height = screen.height + "px";
        }
        // console.log(full_screens[i].css(""))
    }
    $( "#home-li" ).click(function ( event ) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })

    $( "#our-story-li" ).click(function ( event ){
        event.preventDefault();
        document.querySelector('#story').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })

    $( "#competitions-awards-li" ).click(function ( event ){
        event.preventDefault();
        document.querySelector('#awards').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })
    

    $( "#teams-li" ).click(function ( event ){
        event.preventDefault();
        document.querySelector('#teams').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })

    $( "#our-program-li" ).click(function ( event ){
        event.preventDefault();
        document.querySelector('#program').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })

    $( "#help-us-li" ).click(function ( event ){
        event.preventDefault();
        document.querySelector('#help').scrollIntoView();
        $(".nav-item a").css("background-color", '#fff');
        $(this).css({"cssText" :"background-color: yellow !important"});
    })
})

function targetedScroll(id) {
    $('html, body').animate({scrollTop: $(id).offset().top});
}

/* window.addEventListener('scroll', function(){
    if (this.scollY > 467) {
        document.getElementById("navbar").style.position="fixed"
    }
}) */

/* function toTop(){
    window.scrollTo(0, 0);
} */

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}