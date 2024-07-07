const container = document.querySelector(".pic-div");

// Add one image from API
function getImage() {
  fetch("https://dog.ceo/api/breeds/image/random", {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let newImg = document.createElement("img");
      container.appendChild(newImg);
      newImg.src = response.message;
    });
}

// Every 3 secs add images
function addImages() {
  getImage();

  setTimeout(addImages, 3000);
}

addImages();
