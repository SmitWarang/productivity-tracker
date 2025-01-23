chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      chrome.storage.local.get(['activity'], (result) => {
        const activity = result.activity || {};
        const domain = new URL(changeInfo.url).hostname;
        activity[domain] = (activity[domain] || 0) + 1;
        chrome.storage.local.set({ activity });
      });
    }
  });
  