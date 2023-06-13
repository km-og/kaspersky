import {
  buttons,
  cardsList,
  listItems,
  dots,
  dotsList,
  cardsContainer,
  cardsArray,
} from "../utils/constants.js";

// обработка переключения кнопок

function handleBtnClick(evt) {
  const activeName = buttons.querySelector(".buttons__name_type_active");
  const activeLine = buttons.querySelector(".buttons__line_type_active");
  const buttonsItem = evt.target.closest(".buttons__item");
  const buttonsName = buttonsItem.querySelector(".buttons__name");
  const buttonsLine = buttonsItem.querySelector(".buttons__line");

  activeName.classList.remove("buttons__name_type_active");
  activeLine.classList.remove("buttons__line_type_active");

  buttonsName.classList.add("buttons__name_type_active");
  buttonsLine.classList.add("buttons__line_type_active");
}

// карусель

const scrollDotLeft = () => {
  dots.append(dotsList[0]);
};

const scrollLeft = () => {
  cardsList.append(listItems[0]);
  scrollDotLeft();
};

const scrollDotRight = () => {
  dots.prepend(dotsList[3]);
};

const scrollRidht = () => {
  cardsList.prepend(listItems[3]);
  scrollDotRight();
};

// Определяем текущую карточку

let currentCard = 0;

// Обработка свайпа

function handleSwipe(touchStartX, touchEndX) {
  const minSwipeDistance = 100;

  if (touchStartX - touchEndX > minSwipeDistance) {
    // Пролистываем влево

    currentCard++;
    scrollCard(currentCard);
    scrollDotRight();
  } else if (touchEndX - touchStartX > minSwipeDistance) {
    // Пролистываем вправо

    currentCard--;
    scrollCard(currentCard);
    scrollDotLeft();
  }
}

// Прокручиваем карусель до выбранной карточки

function scrollCard(cardIndex) {
  const cardWidth = cardsArray[cardIndex].offsetWidth;
  const cardPosition = -cardWidth * cardIndex;
  cardsList.style.transform = `translateX(${cardPosition}px)`;
}

// Устанавливаем начальную позицию карусели

scrollCard(currentCard);

export { handleBtnClick, scrollRidht, scrollLeft, handleSwipe, scrollCard };
