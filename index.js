//Here is the start of the dark mode button

import hamburgerMenu from "./menuHamburger.js";
import darkTheme from "./darkMode.js";
import form from "./form.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".menu-btn", ".menu", ".menu a");
});

form("#form")
darkTheme(".dark-theme", "darkmode");