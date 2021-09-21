const getPreviousValue = timeId => {
    const timeText = document.getElementById(timeId).innerText;
    const time = parseInt(timeText);
    return time;
}

const updateNewvalue = (timeId, time) => {
    if (time < 10) {
        const updateTextTime = document.getElementById(timeId).innerText = '0' + time;
    }
    else {
        const updateTextTime = document.getElementById(timeId).innerText = time;
    }
}

const startCounting = () => {
    let centSeconds = getPreviousValue('cent-seconds');
    let seconds = getPreviousValue('seconds');
    let minutes = getPreviousValue('minutes');
    let hours = getPreviousValue('hours');
    const timeCount = setInterval(() => {
        centSeconds++;
        if (centSeconds === 100) {
            centSeconds = 0;

            // updating seconds 
            seconds++;
            if (seconds === 60) {
                seconds = 0;

                // updating minutes
                minutes++;
                if (minutes === 60) {
                    minutes = 0;

                    // updating hours
                    hours++;
                    updateNewvalue('hours', hours)
                }
                updateNewvalue('minutes', minutes);
            }
            updateNewvalue('seconds', seconds)
        }
        updateNewvalue('cent-seconds', centSeconds);
    }, 10)

    // stop timmer 
    document.getElementById('stop-btn').addEventListener('click', function () {
        clearInterval(timeCount);
    })

    // reset timmer 
    document.getElementById('rest-btn').addEventListener('click', function () {

        // stop counting 
        clearInterval(timeCount);

        // update time to initial value 
        updateNewvalue('cent-seconds', 0);
        updateNewvalue('seconds', 0);
        updateNewvalue('minutes', 0);
        updateNewvalue('hours', 0);
    })
}
