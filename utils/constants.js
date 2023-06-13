const buttons = document.querySelector(".buttons");
const cards = document.querySelector(".cards");
const btnPrev = cards.querySelector(".cards__btn-arrow_type_prev");
const btnNext = cards.querySelector(".cards__btn-arrow_type_next");
const cardsList = cards.querySelector(".cards__list");
const listItems = cardsList.children;

const dots = cards.querySelector(".dots");
const dotsList = dots.children;

const cardsContainer = document.querySelector(".cards__container");
const cardsArray = document.querySelectorAll(".cards__item");

const btnTheme = document.querySelector(".switch-theme__btn");

const page = document.querySelector(".page");
const headerLinks = document.querySelectorAll(".header__link");
const content = document.querySelector(".content");
const title = content.querySelector(".content__title");
const titleMob = content.querySelector(".content__title-mobile");
const subtitle = content.querySelector(".content__subtitle");
const subtitleMob = content.querySelector(".content__subtitle-mobile");
const btnsName = document.querySelectorAll(".buttons__name");

const iconWindows = buttons.querySelector(".buttons__windows");
const iconMac = buttons.querySelector(".buttons__macos");
const iconAndroid = buttons.querySelector(".buttons__android");
const iconIos = buttons.querySelector(".buttons__ios");
const iconFree = buttons.querySelector(".buttons__free");

export {
  buttons,
  cards,
  btnPrev,
  btnNext,
  cardsList,
  listItems,
  dots,
  dotsList,
  cardsContainer,
  cardsArray,
  btnTheme,
  page,
  headerLinks,
  title,
  titleMob,
  subtitle,
  subtitleMob,
  btnsName,
  iconWindows,
  iconMac,
  iconAndroid,
  iconIos,
  iconFree,
};
