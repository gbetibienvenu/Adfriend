chrome.runtime.onInstalled.addListener(() => {
  console.log("AdFriend extension installed successfully!");
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") {
    console.log("Storage updated:", changes);
  }
});