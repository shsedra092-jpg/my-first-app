console.log("app.js loaded");

// 1) اقرأ القيمة المخزنة (إذا ما في، خليه 0)
let n = Number(localStorage.getItem("counter") || "0");

const btn = document.getElementById("btn");
const count = document.getElementById("count");

// 2) اعرض الرقم فوراً
count.textContent = String(n);

// 3) زيد وخزّن
btn.addEventListener("click", () => {
  n += 1;
  count.textContent = String(n);
  localStorage.setItem("counter", String(n));
});

// Offline (Service Worker)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(console.error);
  });
}
