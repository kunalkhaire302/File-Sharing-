document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

let cnt = 0;
function hide() {
  const logoMain = document.getElementById("logo-main");
  const logoMainn = document.getElementById("logo-mainn");
  if (cnt == 0) {
    logoMain.style.display = "none";
    logoMainn.style.display = "none";
    cnt++;
    console.log(cnt);
  } else {
    logoMain.style.display = "flex";
    logoMainn.style.display = "flex";
    cnt--;
    console.log(cnt);
  }
}
