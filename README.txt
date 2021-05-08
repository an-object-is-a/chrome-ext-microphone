when the user opens the 'popup.html', the popup messages the background to ask if the microphone is enabled; it isn't

so we open up a new tab and call the microphone in the new tab so the user can allow or deny (we don't use the microphone in this tab)

if the user allows, then we close the new tab and set the 'microphone_enabled' variable (in the background script) to 'true'

when the user opens the 'popup.html' again, the popup messages the background asking if the microphone is enabled; it is
so we request the microphone in the popup page now
we save the stream object and we can use the microphone input