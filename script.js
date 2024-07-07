const container = document.querySelector(".pic-div");

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
      let images = document.querySelectorAll("img");
      images[images.length - 1].src = response.message;
    });
}

function addImages() {
  getImage();

  setTimeout(addImages, 3000);
}

addImages();
