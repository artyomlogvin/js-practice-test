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
      appearSmoothly(newImg, 0);
      container.appendChild(newImg);
      newImg.src = response.message;
    });
}

// Every 3 secs add images
function addImages() {
  if (container.scrollHeight <= container.offsetHeight) {
    getImage();

    setTimeout(addImages, 3000);
  }
}

addImages();

function appearSmoothly(element, startingOpacity) {
  element.style.opacity = startingOpacity;
  if (startingOpacity < 1) {
    element.style.opacity += 0.1;
    setTimeout(appearSmoothly(element, startingOpacity + 0.1), 3000);
  }
}
