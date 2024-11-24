// Menu bar hide show 
function menubarHideShow() {
    const menuIcon = document.querySelector("#menu-icon");
    const menuLink = document.querySelector("#menu-link");
    const closeIcon = document.querySelector("#close-icon");

    menuIcon.addEventListener("click", () => {
      menuLink.style.opacity = "1";
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      menuLink.style.opacity = "0";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
}

menubarHideShow();