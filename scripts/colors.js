//* selecionando o body
const allColors = document.querySelector("body");

let darkColors = {
  bgDarkColor: getComputedStyle(allColors).getPropertyValue("--cor-bg-dark"),
  //*
  bgCardDarkColor:
    getComputedStyle(allColors).getPropertyValue("--cor-bg-card-dark"),
  //*
  bgCardDark2Color: getComputedStyle(allColors).getPropertyValue(
    "--cor-bg-card-dark-2"
  ),
  //*
  textColorDark: getComputedStyle(allColors).getPropertyValue(
    "--color-text-1-dark"
  ),
  //*
  shadowDarkColor:
    getComputedStyle(allColors).getPropertyValue("--cor-shadow-light"),
};

//** */

let lightColors = {
  bgLightColor: getComputedStyle(allColors).getPropertyValue("--cor-bg-light"),
  //*
  bgCardLightColor: getComputedStyle(allColors).getPropertyValue(
    "--cor-bg-card-light"
  ),
  //*
  bgCardLight2Color: getComputedStyle(allColors).getPropertyValue(
    "--cor-bg-card-light2"
  ),
  //*
  textColorLight:
    getComputedStyle(allColors).getPropertyValue("--color-text-1"),
  //*
  shadowLightColor:
    getComputedStyle(allColors).getPropertyValue("--cor-shadow-light"),
};
