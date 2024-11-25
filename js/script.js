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


// dark mode section
function darkMode() {
    const whiteMode = document.querySelector("#white-mode");
    const darkMode = document.querySelector("#dark-mode");

    darkMode.addEventListener("click", () => {
      whiteMode.style.display = "block";
      darkMode.style.display = "none";
      document.querySelector("body").classList.add("dark");
      document.querySelector("#text-h1").classList.add("text-black");
      document.querySelector("#text-p").classList.add("text-black");
      document.querySelector("#text-p1").classList.add("text-black");
      document.querySelector("#about-text").classList.add("text-black");
    });

    whiteMode.addEventListener("click", () => {
      whiteMode.style.display = "none";
      darkMode.style.display = "block";
      document.querySelector("body").classList.remove("dark");
      document.querySelector("#text-h1").classList.remove("text-black");
      document.querySelector("#text-p").classList.remove("text-black");
      document.querySelector("#text-p1").classList.remove("text-black");
      document.querySelector("#about-text").classList.remove("text-black");
    });
}

darkMode();