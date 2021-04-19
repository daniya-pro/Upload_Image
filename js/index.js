var addimage = document.getElementById("addImage")

function resizeDiv(){

addimage.style.paddingTop=0
addimage.style.paddingTop=addimage.offsetHeight/2+"px"
}
resizeDiv()

window.onresize=()=>{resizeDiv()}