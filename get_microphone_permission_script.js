navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
        chrome.runtime.sendMessage({ message: "microphone allowed" }, response => {
            if (response.message === "success") {
                window.close();
            }
        });
    })
    .catch(err => console.log(err));