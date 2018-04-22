var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
var myImage = document.querySelector('img');
var h1store = 'Mozilla is cool, '
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = h1store + myName;
}

myButton.onclick = function() {
  setUserName();
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/Internet-chrome-icon.png');
      myImage.setAttribute ('alt','The Chrome logo: A circle with red,yellowgreen and blue');
      var h1store = 'Chrome is cool, ';
        myHeading.textContent = h1store;
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = h1store + storedName;
      }
    }
    else {
      myImage.setAttribute ('src','images/firefox-icon.png');
      myImage.setAttribute ('alt','The Firefox logo: a flaming fox surrounding the Earth.');
      var h1store = 'Mozilla is cool, ';
      myHeading.textContent = h1store;
        if(!localStorage.getItem('name')) {
        setUserName();
        }
        else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = h1store + storedName;
      }
    }
}
