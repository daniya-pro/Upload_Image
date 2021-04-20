var addimagecont = document.getElementById("addImagecont")

function resizeDiv(){
    var offHeight =addimagecont.offsetHeight
addimagecont.style.backgroundSize = addimagecont.offsetWidth+"px "+offHeight+"px";
addimagecont.style.paddingTop=0
addimagecont.style.paddingTop=offHeight/2+"px"
}
resizeDiv()


window.onresize=()=>{resizeDiv()}
