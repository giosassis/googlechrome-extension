let changeColor = document.getElementById("changeColor");

changeColor.
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});