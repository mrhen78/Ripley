// Image switcher code
let myImage = document.querySelector('img');

let images = ['images/ripley1.jpg', 'images/ripley2.jpg', 'images/ripley3.jpg', 'images/ripley4.jpg', 'images/ripley5.jpg', 'images/ripley6.jpg', 'images/ripley7.jpg', 'images/ripley8.jpg', 'images/ripley9.jpg', 'images/ripley10.jpg', 'images/ripley11.jpg', 'images/ripley12.jpg', 'images/ripley13.jpg', 'images/ripley14.jpg', 'images/ripley2.jpg', 'images/ripley15.jpg', 'images/ripley16.jpg', 'images/ripley17.jpg', 'images/ripley18.jpg', 'images/ripley19.jpg', 'images/ripley20.jpg', 'images/ripley21.jpg', 'images/ripley22.jpg', 'images/ripley23.jpg', 'images/ripley24.jpg', 'images/ripley25.jpg', 'images/ripley26.jpg', 'images/ripley27.jpg', 'images/ripley28.jpg', 'images/ripley29.jpg', 'images/ripley30.jpg', 'images/ripley31.jpg', 'images/ripley32.jpg', 'images/ripley33.jpg', 'images/ripley34.jpg', 'images/ripley35.jpg', 'images/ripley36.jpg', 'images/ripley37.jpg', 'images/ripley38.jpg', 'images/ripley39.jpg', 'images/ripley40.jpg', 'images/ripley41.jpg', 'images/ripley42.jpg', 'images/ripley43.jpg', 'images/ripley44.jpg', 'images/ripley45.jpg', 'images/ripley46.jpg', 'images/ripley47.jpg', 'images/ripley48.jpg', 'images/ripley49.jpg', 'images/ripley50.jpg', 'images/ripley51.jpg', 'images/ripley52.jpg', 'images/ripley53.jpg', 'images/ripley54.jpg', 'images/ripley55.jpg', 'images/ripley56.jpg', 'images/ripley57.jpg', 'images/ripley58.jpg', 'images/ripley59.jpg', 'images/ripley60.jpg'];

myImage.setAttribute('data-index', 0)

myImage.onclick = function () {
  let currentIndex = Number(myImage.getAttribute('data-index'));
  let nextIndex = currentIndex + 1 < images.length ? currentIndex + 1 : 0;
  let image = images[nextIndex];

  myImage.setAttribute('data-index', nextIndex);
  myImage.setAttribute('src', image);
}
// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Watch Ripley Develop, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Watch Ripley Develop, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}