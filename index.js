window.onload = function () {
    var full_screens = document.getElementsByClassName('full-page');
    var array_len = full_screens.length;
    for (var i = 0; i < array_len; i++) {
        console.log(full_screens[i])
        full_screens[i].style.width = screen.width + "px";
        full_screens[i].style.height = screen.height + "px";
    }
}

window.addEventListener('scroll', function(){
    if (this.scollY > screen.height) {
        document.getElementById("navbar").style.position="fixed !important"
        document.getElementById("navbar").style.top="0px";
    }
})