const titleContainers = document.querySelectorAll(
  ".accordion__title-container"
);
const descriptionContainers = document.querySelectorAll(
  ".accordion__description-container"
);

console.log(titleContainers);
console.log(descriptionContainers);

const accordionToggleLogos = document.querySelectorAll(
  ".accordion__title-button-logo"
);

titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    descriptionContainers[index].classList.toggle(
      "accordion__description-container--active"
    );
    accordionToggleLogos[index].classList.toggle("rotate-arrow");
  });
});
