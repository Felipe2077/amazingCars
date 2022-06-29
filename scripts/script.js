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
function darkTheme() {
  //* alterando o botão de tema para o modo escuro
  let btnTheme = document.getElementById("theme-btn");
  btnTheme.classList.toggle("theme-switch-dark");
  //* alterando a cor da variável css

  let bgDark = document.body.style.setProperty(
    //*body
    "--cor-bg-light",
    colorsDark.bgDarkColor
  );
  let bgCard = document.body.style.setProperty(
    //*card
    "--cor-bg-card-light",
    colorsDark.bgCardDarkColor
  );
  let bgCard2 = document.body.style.setProperty(
    "--cor-bg-card-light2",
    colorsDark.bgCardDark2Color
  );
  let textDark = document.body.style.setProperty(
    "--color-text-1",
    colorsDark.textColorDark
  );

  let shadowDark = document.body.style.setProperty(
    "--cor-shadow-light",
    colorsDark.shadowDarkColor
  );
}
function whiteTheme() {
  //* alterando o botão de tema para o modo escuro
  let btnTheme = document.getElementById("theme-btn");
  btnTheme.classList.toggle("theme-switch-dark");

  //* alterando a cor da variável css
  let bgLight = document.body.style.setProperty(
    "--cor-bg-light",
    colorsLight.bgLightColor
  );

  let bgCard = document.body.style.setProperty(
    "--cor-bg-card-light",
    colorsLight.bgCardLightColor
  );
  let bgCard2 = document.body.style.setProperty(
    "--cor-bg-card-light2",
    colorsLight.bgCardLight2Color
  );
  let textDark = document.body.style.setProperty(
    "--color-text-1",
    colorsLight.textColorLight
  );

  let shadowDark = document.body.style.setProperty(
    "--cor-shadow-light",
    colorsDark.shadowDarkColor
  );
}
activateColorTheme();

//* smooth scroll:

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
