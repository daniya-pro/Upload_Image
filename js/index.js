var cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});
var addimagecont = document.getElementById("addImagecont")

function resizeDiv(){
    var offHeight =addimagecont.offsetHeight
addimagecont.style.paddingTop=0
addimagecont.style.paddingTop=offHeight/2+"px"
}
resizeDiv()


window.onresize=()=>{resizeDiv()}




const url = "https://api.cloudinary.com/v1_1/dthynvvrp/image/upload";
/**
 


 , {
    headers: {
      Authorization: `token ${token}`
    }
  } 
  


  **/
  const button = document.getElementById("button")
  button.addEventListener("click",UploadImg)
var uploadImage=()=>{


  
}