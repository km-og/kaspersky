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
};
