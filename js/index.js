database.ref("URLs").on('child_added', (data) => {     
  var info = data.val();
  var url = info.URL;
  var name = info.Name;
  var size = info.Size;
  var country = info.Country;
  var city = info.City;
  var region = info.Region;
var ElementImage =`<div class="card 1">
<div class="card_image"> <a href="${url}"><img src="${url}" /></a> </div>
<div class="card_title title-black">
  <span>Size : ${size}</span><br>
  <span>Country: ${country}</span><br>
  <span>City: ${city}</span><br>
  <span>Region: ${region}</span><br>

  <span style="display:block; word-break: normal;
  width: 302px;">Name : ${name}</span>
</div>
</div>`

  var AddImage = document.getElementById("addImage");
AddImage.innerHTML+=ElementImage;
console.log(info)
});

const url = "https://api.cloudinary.com/v1_1/dthynvvrp/image/upload";
/**
 https://codepen.io/abhishek747/pen/BbWKVa

  

 , {
    headers: {
      Authorization: `token ${token}`
    }
  } 
  


  **/

 var error = document.getElementById("error");
let button = document.querySelector("[type=file]");

var UploadImage = () => {
  var files = document.querySelector("[type=file]").files;
  console.log(files)
 var condition = ["image/jpeg","image/png","image/jpg","image/gif"]


 var file;
var formData = new FormData();
var supportedFiles =[];                                                              
for (var i = 0; i < files.length; i++) {
        file = files[i];
//images/jpg
    if(condition.indexOf(file.type) >=0){
   supportedFiles.push(supportedFiles)
    formData.append("file", file);
    error.style.display ="none"

}   else{
 error.innerHTML += file.name+" "
 error.style.display ="block"

}

  }error.innerHTML+="could not be uploaded because it is not a supported file format"
  formData.append("upload_preset", "dvjy4hua");
  formData.append("api_key", "449178244385818");
 if(supportedFiles.length > 0){
  error.style.display ="none"

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((obj) => {
      return obj.json();
    })
    .then((data) => {
      var URL =data.url
      var size =fileSizeSI(file.size)
      console.log(data)
          
fetch(`https://ipinfo.io/json?token=ea4fde52d6eacd`).then(
  response=>response.json() ).then(info=>{
var ip = info.ip
var city = info.city
var country = info.country
var region = info.region
var loc = info.loc
var org = info.org
var postal = info.postal
var timezone = info.timezone
database.ref("/URLs").push({URL:URL,Size:size,Name:file.name,IP:ip,City:city,Country:country,Region:region,Loc:loc,Org:org,Postal:postal,Timezone:timezone})
console.log(info)
  }).catch(e=>{error.innerHTML=e})

    })
    .catch((e) => {
      error.innerHTML=e;
      error.style.display ="block"

    });}else{error.innerHTML="please select a jpeg jpg or png file."
    
  // button.value=''
  }
};
button.addEventListener("change", UploadImage);

function fileSizeSI(a,b,c,d,e){
  return (b=Math,c=b.log,d=1e3,e=c(a)/c(d)|0,a/b.pow(d,e)).toFixed(2)
  +' '+(e?'kMGTPEZY'[--e]+'B':'Bytes')
 }

