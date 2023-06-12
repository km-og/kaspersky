import { buttons, btnNext, btnPrev } from "../utils/constants.js";
import { handleBtnClick, scrollRidht, scrollLeft } from "../utils/utils.js";

// слушатель переключения кнопок
buttons.addEventListener("click", (evt) => {
  handleBtnClick(evt);
});

// слушатель кнопок в карусели

btnNext.addEventListener("click", scrollRidht);
btnPrev.addEventListener("click", scrollLeft);
