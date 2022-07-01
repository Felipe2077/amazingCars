//* selecionando o body
const allColors = document.querySelector("body");

function getColor(color) {
  return getComputedStyle(allColors).getPropertyValue(color);
}

let darkColors = {
  bgDarkColor: getColor("--cor-bg-dark"),
  bgCardDarkColor: getColor("--cor-bg-card-dark"),
  bgCardDark2Color: getColor("--cor-bg-card-dark-2"),
  textColorDark: getColor("--color-text-1-dark"),
  shadowDarkColor: getColor("--cor-shadow-light"),
};

let lightColors = {
  bgLightColor: getColor("--cor-bg-light"),
  bgCardLightColor: getColor("--cor-bg-card-light"),
  bgCardLight2Color: getColor("--cor-bg-card-light2"),
  textColorLight: getColor("--color-text-1"),
  shadowLightColor: getColor("--cor-shadow-light"),
};
