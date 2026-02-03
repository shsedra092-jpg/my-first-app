console.log("app.js loaded");

let n = 0;
const btn = document.getElementById("btn");
const count = document.getElementById("count");

btn.addEventListener("click", () => {
  n += 1;
  count.textContent = String(n);
});

// Offline (Service Worker)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(console.error);
  });
}
