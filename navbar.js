// navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarTemplate = document.getElementById("navbar-script").innerHTML;
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarTemplate;
  }
});

