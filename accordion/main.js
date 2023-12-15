const accordionButtonEls = document.querySelectorAll(".accordion-button");
const accordionCollapseEls = document.querySelectorAll(".accordion-collapse");

for (let i = 0; i < accordionButtonEls.length; i++) {
  accordionButtonEls[i].addEventListener("click", toggleContent);

  function toggleContent() {
    accordionCollapseEls[i].classList.toggle("show");
  }
}
