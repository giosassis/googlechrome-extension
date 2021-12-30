let changeColor = document.getElementById("changeColor");

changeColor.addEventListener
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});