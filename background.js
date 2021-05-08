let microphone_enabled = false,
    stream = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "microphone enabled") {
        sendResponse(microphone_enabled);
    } else if (request.message === "microphone allowed") {
        microphone_enabled = true;
        sendResponse({ message: "success" });
    }
});