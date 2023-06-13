import {
  buttons,
  btnNext,
  btnPrev,
  cardsContainer,
  btnTheme,
} from "../utils/constants.js";
import {
  handleBtnClick,
  scrollRidht,
  scrollLeft,
  handleSwipe,
  switchTheme,
} from "../utils/utils.js";

// слушатель переключения кнопок
buttons.addEventListener("click", (evt) => {
  handleBtnClick(evt);
});

// слушатель кнопок в карусели

btnNext.addEventListener("click", scrollRidht);
btnPrev.addEventListener("click", scrollLeft);

// Добавляем событие для свайпа

let touchStartX = 0;
let touchEndX = 0;

cardsContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

cardsContainer.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe(touchStartX, touchEndX);
});

// слушатель переключателя темы

btnTheme.addEventListener("click", switchTheme);
