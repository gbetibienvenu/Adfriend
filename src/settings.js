document.addEventListener("DOMContentLoaded", () => {
  // Load saved preference
  chrome.storage.local.get(["replacement"], (result) => {
    if (result.replacement) {
      document.getElementById("replacementType").value = result.replacement;
    }
  });

  // Save new preference
  document.getElementById("saveSettings").addEventListener("click", () => {
    const replacementType = document.getElementById("replacementType").value;
    chrome.storage.local.set({ replacement: replacementType }, () => {
      alert("Settings saved successfully!");
    });
  });
});
