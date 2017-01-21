$('#goSurf').click(function() {
    chrome.tabs.create({
        'url': 'http://www.lemonde.fr/'
    });
});
