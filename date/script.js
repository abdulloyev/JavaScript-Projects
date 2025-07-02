const now = new Date();

// Hozirgi vaqtni olish
console.log(now.getHours());

// UTC vaqtli oladi
console.log(now.getUTCHours());

// Hozirgi vaqtni olish va uni formatlash
const formattedTime = now.toLocaleTimeString("uz-UZ", {
  // hour: "2-digit",
  // minute: "2-digit",
  // second: "2-digit",
  hour12: false,
});

console.log(formattedTime.replace(/:/g, ":"));
