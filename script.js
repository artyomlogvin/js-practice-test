const img = document.querySelector("img");
fetch("https://dog.ceo/api/breeds/image/random", {
  mode: "cors",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
