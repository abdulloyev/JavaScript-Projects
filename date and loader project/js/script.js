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

  // TODO: Add a loader
  const loaderWrapper = document.querySelector(".loader-wrapper");
  setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 1500);

  // TODO: Timer
  const deadline = "2025-12-31";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // TODO: Format number
  function formatNumber(num) {
    return num < 10 ? `0${num}` : num;
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const time = getTimeRemaining(endtime);

      days.innerHTML = formatNumber(time.days);
      hours.innerHTML = formatNumber(time.hours);
      minutes.innerHTML = formatNumber(time.minutes);
      seconds.innerHTML = formatNumber(time.seconds);

      if (time.total <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      }
    }
  }

  setClock(".timer", deadline);
});
