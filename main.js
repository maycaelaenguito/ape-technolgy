// NAVIGATION BAR
function navigation() {
  let navbar = document.getElementById("navbar");
  let icon = document.getElementById("icon");

  if (!navbar.style.left || navbar.style.left === "-100%") {
    navbar.style.left = "0";
    icon.classList.toggle("open-toggle_btn");
  } else {
    navbar.style.left = "-100%";
    icon.classList.toggle("open-toggle_btn");
  }
}







// var openNav = false;
// function navBtn()
// {
//   if(!openNav)
//   {
//     document.querySelector("#mobileNav").style.display = "block";
//     openNav = true;
//   }
//   else
//   {
//     document.querySelector("#mobileNav").style.display = "none";
//     openNav = false;
//   }
// }




