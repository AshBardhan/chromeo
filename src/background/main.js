chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if (tab) {
		chrome.tabs.sendMessage(tab.id, {text: "make_meme"}, function (response) {
			trackGAEvent('meme_menu-option', 'select');
			return true;
		});
	}
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.msg) {
		// Add code here for interacting message between content script and background pages
	}
});