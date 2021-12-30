let changeColor = document.getElementById("changeColor");

change
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});