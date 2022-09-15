function changeMode() {
  let myBody = document.body;
  // myBody.classList.add('myDark');
  document.getElementsByClassName("fa-moon")[0].style.display = "block";
  myBody.classList.toggle("myDark");
}

function loadCoupon() {
  document.getElementById("coupon").style.display = "block";
  document.getElementById("header").style.opacity = "0.5";
}

const closeCoupon = () => {
  document.getElementById("coupon").style.display = "none";
  document.getElementById("header").style.opacity = "1";
};
