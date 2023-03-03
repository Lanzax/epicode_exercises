let array = document.getElementsByTagName("path");
let mAnimation = Array.from(array);

setInterval(() => {
  let lenght = mAnimation.length;

  let number = Math.floor(Math.random() * lenght);
  mAnimation[number].style.opacity = "0";

  let i = Math.floor(Math.random() * 1000);

  setTimeout(() => {
    let number2 = Math.floor(Math.random() * lenght);
    mAnimation[number2].style.opacity = "1";
  }, i);
}, 10);

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.documentElement.scrollTop > 400) {
    document.getElementById("button").style.backgroundColor = "#1a8917";
    document.getElementById("nav").style.backgroundColor = "rgb(255,255,255";
  } else {
    document.getElementById("button").style.backgroundColor = "rgb(0,0,0)";
    document.getElementById("nav").style.backgroundColor = "#ffc017";
  }
}
