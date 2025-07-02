window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParents = document.querySelector(".tabheader__items");

  // TODO: Add event listeners to tabs
  function hideTabContent() {
    tabContents.forEach(item => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach(tab => {
      tab.classList.remove("tabheader__item_active");
    });
  }

  // TODO: Show the content of the active tab
  function showTabContent(index = 0) {
    tabs[index].classList.add("tabheader__item_active");
    tabContents[index].classList.add("show", "fade");
    tabContents[index].classList.remove("hide");
  }

  // TODO: Add click event listener to tab parents
  tabParents.addEventListener("click", event => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, index) => {
        if (target === tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });

  // Initialize the first tab as active
  hideTabContent();
  showTabContent();
});
