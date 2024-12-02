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
      document.querySelector("#skip").classList.add("skill");
      document.querySelector("#skip1").classList.add("skill");
      document.querySelector("#skip2").classList.add("skill");
      document.querySelector("#skip3").classList.add("skill");
    });

    whiteMode.addEventListener("click", () => {
      whiteMode.style.display = "none";
      darkMode.style.display = "block";
      document.querySelector("body").classList.remove("dark");
      document.querySelector("#text-h1").classList.remove("text-black");
      document.querySelector("#text-p").classList.remove("text-black");
      document.querySelector("#text-p1").classList.remove("text-black");
      document.querySelector("#about-text").classList.remove("text-black");
      document.querySelector("#skip").classList.remove("skill");
      document.querySelector("#skip1").classList.remove("skill");
      document.querySelector("#skip2").classList.remove("skill");
      document.querySelector("#skip3").classList.remove("skill");
    });
}

darkMode();



// popup show\
function popupShow() {
  const popup = document.querySelector("#popup");
  const sendbtn = document.querySelector("#sendbtn");
  const okbutton = document.querySelector("#okbutton");

  sendbtn.addEventListener("click", () => {
    
  setTimeout(() => {
      popup.classList.add("show");
    }, 1000);
  });

  okbutton.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

popupShow();


// contact from list
function contactmessagelist() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwRDORMtrBXV5AdUaxzUjLRUjXKwxz_Gq8HEZzP3NHxuzt1JJ5RGrPceZUfr1T7iEuo/exec";
  const form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });
}

contactmessagelist();


// slide nav
function slideNavbar() {
  const header = document.querySelector("#header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
}

slideNavbar();



// animatoin
function textAnimation () {
  const container = document.querySelector("#container");

  let career = ["Front-End Developer"];

  let careerIndex = 0;

  let characterIndex = 0;

  updateText();

  function updateText() {
    characterIndex++;

    container.innerHTML = `
                        <p class="text-xl mb-4 text-[var(--p-tag)] font-semibold lg:text-2xl lg:mb-6">I am a
                        <span id="text-ani" class="text-[var(--Blue)] ml-2">${career[
                          careerIndex
                        ].slice(0, characterIndex)}</span></p>
`;

    if (characterIndex === career[careerIndex].length) {
      careerIndex++;
      characterIndex = 0;
    }

    if (careerIndex === career.length) {
      careerIndex = 0;
    }

    setTimeout(updateText, 200);
  }
}

textAnimation();