document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("menu");
  var close = document.getElementById("close");
  var nav = document.getElementById("nav");

  // Click event for menu to toggle display
  menu.addEventListener("click", function () {
    close.style.display = "block";
    nav.style.display = "block";
    menu.style.display = "none";
  });

  // Click event for close button to revert changes
  close.addEventListener("click", function () {
    menu.style.display = "block";
    close.style.display = "none";
    nav.style.display = "none";
  });
});
