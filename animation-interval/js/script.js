const btn = document.getElementById("btn"),
  btn2 = document.getElementById("btn2");

// TODO: SetTimeout va SetInterval yordamida avtomobilni harakatlantirish
const moveCar = () => {
  const car = document.querySelector(".car");
  let position = 0;

  const animationId = setInterval(frame, 10);

  function frame() {
    if (position >= 1000) {
      clearInterval(animationId);
    } else {
      position += 2; // Harakat tezligi
      car.style.left = position + "px";
    }
  }
};

btn.addEventListener("click", moveCar);

// let timerId,
//   index = 0,
//   index2 = 0;

// TODO: SetTimeout berilgan vaqt oralig'ida funckiyani bir marta bajaradi
// btn.addEventListener("click", () => {
//   timerId = setTimeout(logger, 1000);
// });

// function logger() {
//   if (index === 5) {
//     clearTimeout(timerId);
//     return;
//   }
//   console.log(`Hello world! index=${index}`);
//   index++;
// }

// TODO: SetInterval esa berilgan vaqt oralig'ida funckiyani takrorlaydi
// btn2.addEventListener("click", () => {
//   timerId = setInterval(logger2, 500);
// });

// function logger2() {
//   if (index2 === 10) {
//     clearInterval(timerId);
//     return;
//   }
//   console.log(`Hello world index=${index2}!`);
//   index2++;
// }
