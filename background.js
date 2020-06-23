// background.js источник https://thoughtbot.com/blog/how-to-make-a-chrome-extension

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        // шлем привет основному срикпту
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action_hometask"});

    });
});
