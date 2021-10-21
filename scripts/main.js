let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/football-in-water.jpeg") {
    myImage.setAttribute("src", "images/playing-football-preview.jpeg");
  } else {
    myImage.setAttribute("src", "images/football-in-water.jpeg");
  }
};
