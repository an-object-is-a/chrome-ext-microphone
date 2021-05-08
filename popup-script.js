chrome.runtime.sendMessage({ message: 'microphone enabled' }, response => {
    if (response === true) {
        const player = document.getElementById('player');

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                if (window.URL) {
                    player.srcObject = stream;
                } else {
                    player.src = stream;
                }
            });
    } else {
        chrome.tabs.create({
            active: true,
            url: './get_microphone_permission.html'
        });
    }
});