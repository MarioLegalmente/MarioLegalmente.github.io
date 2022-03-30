const d = document,
ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");


  let moon = "🌙",
    sun = "☀️";

    const modeLight = () => {
      $selectors.forEach((el) => el.classList.remove(classDark));
      $themeBtn.textContent = moon;
      ls.setItem("theme", "light");
    }

    const modeDark = () => {
      $selectors.forEach((el) => el.classList.add(classDark));
      $themeBtn.textContent = sun;
      ls.setItem("theme", "dark");
    }

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        modeDark();
      } else {
        modeLight();
      }
    }
  });

  d.addEventListener("DOMContentLoaded",(e)=>{
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if(ls.getItem("theme") === "light") {
      modeLight();
    }
    if(ls.getItem("theme") === "dark"){
      modeDark();
    }
  });
}
