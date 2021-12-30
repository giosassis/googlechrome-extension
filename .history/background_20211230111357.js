let color = "#3aa757";

chrome.runtine.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log()
});
