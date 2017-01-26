var autozenCheckbox = $('#autozen-checkbox');
var autozen = false;

chrome.storage.sync.get('autozen', function(result) {
    autozen = !!result.autozen;
    autozenCheckbox.prop('checked', autozen);
});

// Bind click
autozenCheckbox.on('click', function() {
    autozen = autozenCheckbox.prop('checked');
    chrome.storage.sync.set({'autozen': autozen}, function() {
        console.log('Autozen mode set to', autozen);
    });
  });

$('#link-lemonde').on('click', function() {
    chrome.tabs.create({
        'url': 'http://www.lemonde.fr/'
    });
});
