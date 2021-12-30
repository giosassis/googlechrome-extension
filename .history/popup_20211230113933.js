let changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", () => {
    chrome.storage.sync.get("color", ({ color }) => {
        changeColor.style.backgroundColor = color;
      });
})
