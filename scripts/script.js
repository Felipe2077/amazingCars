let colorsDark = darkColors;
let colorsLight = lightColors;

function activateColorTheme() {
  document.querySelector("#theme-btn").addEventListener("click", function () {
    let theme = document.querySelector("#body").getAttribute("class");

    if (theme === "white-theme") {
      document.querySelector("#body").classList.remove("white-theme");
      document.querySelector("#body").classList.add("dark-theme");
      darkTheme();
    } else if (theme === "dark-theme") {
      document.querySelector("#body").classList.remove("dark-theme");
      document.querySelector("#body").classList.add("white-theme");
      whiteTheme();
    }
  });
}

function setColor(corAtiga, novaCor) {
  return document.body.style.setProperty(corAtiga, novaCor);
}

function darkTheme() {
  //* alterando o botão de tema para o modo escuro
  let btnTheme = document.getElementById("theme-btn");
  btnTheme.classList.toggle("theme-switch-dark");

  //* alterando a cor da variável css
  let bgDark = setColor("--cor-bg-light", colorsDark.bgDarkColor);
  let bgCard = setColor("--cor-bg-card-light", colorsDark.bgCardDarkColor);
  let bgCard2 = setColor("--cor-bg-card-light2", colorsDark.bgCardDark2Color);
  let textDark = setColor("--color-text-1", colorsDark.textColorDark);
  let shadowDark = setColor("--cor-shadow-light", colorsDark.shadowDarkColor);
}
function whiteTheme() {
  //* alterando o botão de tema para o modo escuro
  let btnTheme = document.getElementById("theme-btn");
  btnTheme.classList.toggle("theme-switch-dark");

  //* alterando a cor da variável css
  let bgLight = setColor("--cor-bg-light", colorsLight.bgLightColor);
  let bgCard = setColor("--cor-bg-card-light", colorsLight.bgCardLightColor);
  let bgCard2 = setColor("--cor-bg-card-light2", colorsLight.bgCardLight2Color);
  let textDark = setColor("--color-text-1", colorsLight.textColorLight);
  let shadowDark = setColor("--cor-shadow-light", colorsDark.shadowDarkColor);
}

//* smooth scroll:

function smoothScroll() {
  let menuItem = document.querySelectorAll(".menu a[href^='#']");
  menuItem.forEach((item) => {
    item.addEventListener("click", (clicado) => {
      clicado.preventDefault();
      let id = item.getAttribute("href");
      let section = document.querySelector(id);
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

activateColorTheme();
smoothScroll();
