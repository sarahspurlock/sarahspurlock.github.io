$(document).ready(function () {

    rain = $('.sky__rain');
    sky = $('.js-object-sky');
    startRain();

    $(document).keypress(function (event) {
        switch (event.charCode) {
            case 115:
                location.reload();
                break;
            default:
                console.log("keypress");
        }
    });

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        sky.on('mousedown touchstart', handleEventStart);
        sky.on('mousemove touchmove', handleEventMove);
        sky.on('mouseup touchend touchcancel', handleEventEnd);
    }

    function handleEventStart(e) {
        alert("touchstart");
    }

    function handleEventMove(e) {
        alert("touchMove");
    }

    function handleEventEnd(e) {
        alert("tuochEnd");
    }
});

function bringTheRain() {
    startRain();
    startRain('middle');
    startRain('back');
}

function startRain(plane) {

    rain.addClass("rain-color");
    plane = plane || '';
    setInterval(function () {
        var $rainDrop = $('<div class="sky__rain rain"></div>');
        $rainDrop.addClass("rain-color");
        if (plane) {
            $rainDrop.addClass('rain--' + plane);
        }
        sky.append($rainDrop);

        $rainDrop.css('left', Math.floor(Math.random() * 100) + '%');

        setTimeout(function () {
            $rainDrop.remove();
        }, 3000);
    }, 25);
}


function stopRain() {
    clearInterval(rainInterval);
}