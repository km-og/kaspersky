import {
  buttons,
  cardsList,
  listItems,
  dots,
  dotsList,
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

const scrollLeft = () => {
  cardsList.append(listItems[0]);
  dots.append(dotsList[0]);
};

const scrollRidht = () => {
  cardsList.prepend(listItems[3]);
  dots.prepend(dotsList[3]);
};

export { handleBtnClick, scrollRidht, scrollLeft };
