let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/202-front.jpg') {
      myImage.setAttribute('src','images/202-back.jpg');
    } else {
      myImage.setAttribute('src','images/202-front.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'AutoAccessoriesKenya is cool, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'AutoAccessoriesKenya is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
