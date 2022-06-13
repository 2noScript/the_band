const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//handle slide
const slideItems = $$(".slide-item");

function slideChange() {
  let count = 0;
  setInterval(() => {
    slideItems.forEach((element, index) => {
      element.classList.remove("visible");
    });
    slideItems[count].classList.add("visible");
    count++;
    if (count === 2) count = 0;
  }, 3000);
}
slideChange();
