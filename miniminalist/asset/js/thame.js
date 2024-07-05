//   ############# navbar #############
var x = document.getElementById("menu-item");

function toggle() {
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleMenu() {
  var ele = document.getElementById("x");

  // Toggle between fa-bars and fa-xmark classes
  if (ele.classList.contains("fa-bars")) {
    ele.classList.remove("fa-bars");
    ele.classList.add("fa-xmark");
  } else {
    ele.classList.remove("fa-xmark");
    ele.classList.add("fa-bars");
  }
}

function toggle() {
  var menu = document.getElementById("menu-item");
  menu.classList.toggle("active");
}
