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
  if (container.scrollHeight <= container.offsetHeight) {
    getImage();

    setTimeout(addImages, 3000);
  }
}

addImages();

// Table code
const tableBody = document.querySelector("tbody");

const getdata = async () => {
  const endpoint =
      "https://dummyjson.com/users?limit=10&select=id,username,email,firstName,lastName,birthDate,height,ip",
    response = await fetch(endpoint),
    data = await response.json(),
    users = data.users;

  users.forEach((userObj) => {
    let { id, username, email, firstName, lastName, birthDate, height, ip } =
      userObj;
    tableBody.innerHTML += `<tr>
        <td>${id}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${firstName + " " + lastName}</td>
        <td>${birthDate}</td>
        <td>${height}</td>
        <td>${ip}</td>
    </tr>`;
  });
};
getdata();
