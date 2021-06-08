

window.onresize = () => {
  resizeDiv();
};

const url = "https://api.cloudinary.com/v1_1/dthynvvrp/image/upload";
/**
 


 , {
    headers: {
      Authorization: `token ${token}`
    }
  } 
  


  **/
let button = document.querySelector("[type=file]");
console.log(button);

var UploadImage = () => {
  var files = document.querySelector("[type=file]").files;
  
  var formData = new FormData();
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", "dvjy4hua");
    formData.append("api_key", "449178244385818");
    
  }
  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((obj) => {
      return obj.json();
    })
    .then((data) => {
      var AddImage = document.getElementById("addImage");
AddImage.innerHTML+=`<img class='image' src= ${data.url}>`
console.log(data)

    })
    .catch((e) => {
      alert();
    });
};
button.addEventListener("change", UploadImage);
