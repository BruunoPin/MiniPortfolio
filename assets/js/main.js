/*=============== FILTERS TABS ===============*/
const projectInput = document.querySelector("#radio-project");
const skillInput = document.querySelector("#radio-skill");
const projects = document.querySelector("#projects");
const skills = document.querySelector("#skills");

skillInput.addEventListener("input", () => {
  projects.classList.add("d-none");
  skills.classList.remove("d-none");
});

projectInput.addEventListener("input", () => {
  projects.classList.remove("d-none");
  skills.classList.add("d-none");
});

/*=============== DARK LIGHT THEME ===============*/
const body = document.querySelector("body");
const themeButton = document.querySelector("#theme-button");
const skillContent = document.querySelector(".skills-content");
const iconThemeSun = "fa-sun";
const iconThemeMoon = "fa-moon";
const buttonSunColor = "theme-button-sun";

const changeToDarkTheme = () => {
  themeButton.classList.remove(iconThemeMoon);
  themeButton.classList.add(iconThemeSun);
  themeButton.classList.add(buttonSunColor);
};
const changeToLightTheme = () => {
  themeButton.classList.remove(iconThemeSun);
  themeButton.classList.remove(buttonSunColor);
  themeButton.classList.add(iconThemeMoon);
};

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  skillContent.classList.toggle("skill-color");

  themeButton.classList.contains(iconThemeMoon)
    ? changeToDarkTheme()
    : changeToLightTheme();
});


// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//   // Add or remove the dark / icon theme
//   document.body.classList.toggle(darkTheme);
//   themeButton.classList.toggle(iconTheme);
//   // We save the theme and the current icon that the user chose
//   localStorage.setItem("selected-theme", getCurrentTheme());
//   localStorage.setItem("selected-icon", getCurrentIcon());
// });
/*=============== SCROLL REVEAL ANIMATION ===============*/
