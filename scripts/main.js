var m = 0
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
if(m<3) {
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
    m = m + 1;
}
}
else {
  alert("Just hover, don't click!");
}
