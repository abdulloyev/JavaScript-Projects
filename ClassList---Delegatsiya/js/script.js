const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper");

// TODO: #1 Modul
// btns.forEach(btn => console.log(btn.classList.item(0)));
// btns[1].classList.add("yellow");
// btns[0].classList.remove("red");
// btns[0].classList.toggle("red");
// console.log(btns[0].classList.toggle("yellow"));
// btns[0].classList.replace("red", "blue");

// if (btns[0].classList.contains("red")) {
//   console.log("Eementda red klassi mavjud");
// }

// btns[0].addEventListener("click", () => {
//   if (btns[0].classList.contains("red")) {
//     console.log("Eementda red klassi mavjud");
//     btns[0].classList.remove("red");
//   } else {
//     console.log("Eementda red klassi mavjud emas");
//     btns[0].classList.add("red");
//   }
// });

// TODO: #2 Modul
btns.forEach(item => {
  item.addEventListener("click", () => {
    console.log("CLICKED");
  });
});

wrapper.addEventListener("click", event => {
  if (event.target && event.target.tagName === "BUTTON") {
    console.log("CLICK");
  }
});

const button = document.createElement("button");
button.classList.add("blue");
button.textContent = 6;
wrapper.append(button);
