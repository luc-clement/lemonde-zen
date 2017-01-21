$(document).ready(function() {
    // TRY HARD MODE
    // Try to launch mode zen for 3 seconds at 5Hz
    var intervalId = setInterval(launchZen, 200);

    setTimeout(function() {
        console.log('clear interval');
        clearInterval(intervalId);
    }, 3000);
});

function launchZen() {
    if (!!$('.overlay.lecture_zen').length) {
        return; // Overlay is already displayed
    }
    var button = $('.btn_offre_decouverte_zen');
    if (!button.length) {
        // console.warn('Button not found !');
    } else {
        // console.info('Button found ! clicking...');
        button.trigger("click");
    }
}
