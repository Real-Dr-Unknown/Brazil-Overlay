
let configData = {
    "home_logo": "",
    "away_logo": "",
    "timer_property": "",
    "home": "",
    "away": "",
    "home_color": "",
    "away_color": "",
    "home_Goals": "",
    "away_Goals": "",
    "home_text_color": "",
    "away_text_color": "",
    "score_text_color": "",
    "score_background_color": "",
    "timer_text_color": "",
    "timer_background_color": "",
    "sTimeMin": "",
    "sTimeHour": ""
}

function updateConfig(newData) {
    configData = { ...configData, ...newData };
    console.log(configData)
}

let start = document.getElementById('sBtn')
let coppy = document.getElementById('cBtn')
let reset = document.getElementById('rBtn')
let stopp = document.getElementById('spBtn')
let exx = document.getElementById('exxt')
let clockk = document.getElementById('timerDisplay')
let cdiv = document.getElementById('adiv')

let ajC = null;
let fClera = null;
let isRunning = false;
let sec = 0;
let min = 0;
let temp = false;
let hTOver = false;
let aT = true;
let tStartHour = null;
let tStartMin = null;
let aRun = false;


function minsetter() {
    min = document.getElementById('timMin').value
    min = Number(min)

    if (sec < 10 && min < 10) {
        clockk.textContent = '0' + min + ':' + '0' + sec;
    }
    if (min < 10 && sec > 9) {
        clockk.textContent = '0' + min + ':' + sec;
    }
    if (min > 9 && sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (sec > 9 && min > 9) {
        clockk.textContent = min + ':' + sec;
    }
}

function secsetter() {
    sec = document.getElementById('timSec').value
    sec = Number(sec);

    if (sec > 59) {
        document.getElementById('timSec').value = null
        sec = 0
        min++
    }
    if (sec < 10 && min < 10) {
        clockk.textContent = '0' + min + ':' + '0' + sec;
    }
    if (min < 10 && sec > 9) {
        clockk.textContent = '0' + min + ':' + sec;
    }
    if (min > 9 && sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (sec > 9 && min > 9) {
        clockk.textContent = min + ':' + sec;
    }
}

function hsetter() {
    let HHH = document.getElementById('hhN')
    HHH.textContent = document.getElementById('hName').value.toUpperCase()
    updateConfig({ home: document.getElementById('hName').value.toUpperCase() });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function asetter() {
    let AAA = document.getElementById('aaN')
    AAA.textContent = document.getElementById('aName').value.toUpperCase()
    updateConfig({ away: document.getElementById('aName').value.toUpperCase() });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function hCSetter() {
    let clrdivH = document.getElementById('hhN')
    let imgbackD = document.getElementById('imgBackH')
    clrdivH.style.backgroundColor = document.getElementById('hColor').value
    imgbackD.style.backgroundColor = document.getElementById('hColor').value
    updateConfig({ home_color: document.getElementById('hColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function aCSetter() {
    let clrdivA = document.getElementById('aaN')
    let imgbackC = document.getElementById('imgBackA')
    clrdivA.style.backgroundColor = document.getElementById('aColor').value
    imgbackC.style.backgroundColor = document.getElementById('aColor').value
    updateConfig({ away_color: document.getElementById('aColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function hTCSetter() {
    let HHHC = document.getElementById('hhN')
    HHHC.style.color = document.getElementById('hTColor').value
    updateConfig({ home_text_color: document.getElementById('hTColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function aTCSetter() {
    let AAAC = document.getElementById('aaN')
    AAAC.style.color = document.getElementById('aTColor').value
    updateConfig({ away_text_color: document.getElementById('aTColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function hLSetter() {
    document.getElementById('hImage').src = document.getElementById('hLogo').value
    updateConfig({ home_logo: document.getElementById('hLogo').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function aLSetter() {
    document.getElementById('aImage').src = document.getElementById('aLogo').value
    updateConfig({ away_logo: document.getElementById('aLogo').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function sTSetter() {
    let sT = document.getElementById('scS')
    sT.style.color = document.getElementById('sTColor').value
    updateConfig({ score_text_color: document.getElementById('sTColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function sBSetter() {
    let sB = document.getElementById('scS')
    sB.style.backgroundColor = document.getElementById('sBColor').value
    updateConfig({ score_background_color: document.getElementById('sBColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function tTSetter() {
    let tT = document.getElementById('timerDisplay')
    tT.style.color = document.getElementById('tTColor').value
    updateConfig({ timer_text_color: document.getElementById('tTColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function tBSetter() {
    let tB = document.getElementById('timerDisplay')
    tB.style.backgroundColor = document.getElementById('tBColor').value
    updateConfig({ timer_background_color: document.getElementById('aTColor').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function autooS() {
    if (aT) {
        aT = false
        cdiv.style.backgroundColor = 'grey'
        cdiv.style.justifyContent = 'left'
    }
    else {
        aT = true
        cdiv.style.backgroundColor = 'rgb(56, 232, 255)'
        cdiv.style.justifyContent = 'right'
    }
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }

}

function autoHoursetter() {
    aHour = document.getElementById('autoHour').value
    updateConfig({ sTimeHour: document.getElementById('autoHour').value });
    tStartHour = Number(aHour)
    if (tStartHour !== null && tStartMin !== null && !isRunning && !aRun) {
        ajC = setInterval(astr, 15000)
        aRun = true
    }
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function autoMinsetter() {
    aMin = document.getElementById('autoMin').value
    updateConfig({ sTimeMin: document.getElementById('autoMin').value });
    tStartMin = Number(aMin)
    if (tStartHour !== null && tStartMin !== null && !isRunning && !aRun) {
        ajC = setInterval(astr, 15000)
        aRun = true
    }
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function homeGG() {
    let hhgg = document.getElementById('hhGG')
    hhgg.textContent = document.getElementById('homeG').value
    updateConfig({ home: document.getElementById('home_Goals').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function awayGG() {
    let aagg = document.getElementById('awGG')
    aagg.textContent = document.getElementById('awayG').value
    updateConfig({ home: document.getElementById('away_Goals').value });
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}


coppy.onclick = function generateShareableLink() {
    const configString = encodeURIComponent(JSON.stringify(configData));
    const shareableLink = `${window.location.origin}${window.location.pathname}?config=${configString}`;

    navigator.clipboard.writeText(shareableLink)
        .then(() => {
            console.log("copied")
        })
        .catch(err => {
            console.error("Failed to copy link:", err);
        });
    window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
}

document.getElementById('timMin').addEventListener("input", minsetter)
document.getElementById('timSec').addEventListener("input", secsetter)
document.getElementById('autoMin').addEventListener("input", autoMinsetter)
document.getElementById('autoHour').addEventListener("input", autoHoursetter)
document.getElementById('homeG').addEventListener("input", homeGG)
document.getElementById('awayG').addEventListener("input", awayGG)
document.getElementById('hName').addEventListener("input", hsetter)
document.getElementById('aName').addEventListener("input", asetter)
document.getElementById('hColor').addEventListener("input", hCSetter)
document.getElementById('aColor').addEventListener("input", aCSetter)
document.getElementById('hTColor').addEventListener("input", hTCSetter)
document.getElementById('aTColor').addEventListener("input", aTCSetter)
document.getElementById('sTColor').addEventListener("input", sTSetter)
document.getElementById('sBColor').addEventListener("input", sBSetter)
document.getElementById('tTColor').addEventListener("input", tTSetter)
document.getElementById('tBColor').addEventListener("input", tBSetter)
document.getElementById('hLogo').addEventListener("input", hLSetter)
document.getElementById('aLogo').addEventListener("input", aLSetter)
document.getElementById('autoSwitcher').addEventListener("click", autooS)

async function checker() {
    if (!temp) {
        puranatime = Date.now() / (1000 * 60);
    }

    temp = true;

    while (!hTOver) {

        await new Promise(r => setTimeout(r, 30000));

        if (Math.round((Date.now() / (1000 * 60)) - puranatime) >= 19) {

            exx.style.visibility = 'hidden';

            if (!isRunning) {
                fClera = setInterval(ttemer, 1000);
            }

            isRunning = true;
            hTOver = true;
        }
    }
}

function astr() {
    console.log("15 Sec Interval")
    now = new Date();
    console.log(now.getHours())
    console.log(now.getMinutes())
    if (now.getHours() === tStartHour && now.getMinutes() >= tStartMin) {
        starttimer()
        console.log("Auto Started")
        if (now.getMinutes() > tStartMin) {
            min = now.getMinutes() - tStartMin;
        }
    }
}

function ttemer() {
    if (isRunning) {

        sec++

        if (sec >= 60) {
            sec = 0;
            min++;
        }

        document.getElementById('timSec').value = sec
        document.getElementById('timMin').value = min

        if (sec < 10 && min < 10) {
            clockk.textContent = '0' + min + ':' + '0' + sec;
        }
        if (min < 10 && sec > 9) {
            clockk.textContent = '0' + min + ':' + sec;
        }
        if (min > 9 && sec < 10) {
            clockk.textContent = min + ':' + '0' + sec;
        }
        if (sec > 9 && min > 9) {
            clockk.textContent = min + ':' + sec;
        }
        if (min == 45 && sec == 0 && aT) {
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
            checker();
        }
        if (min == 90 && sec == 0 && aT) {
            exx.textContent = '+8';
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
        }
    }

}


function presetter() {

    if (configData.home_Goals) {
        let HHHG = document.getElementById('hhGG');
        HHHG.textContent = configData.home_Goals;
    }

    if (configData.away_Goals) {
        let AAAG = document.getElementById('awGG');
        AAAG.textContent = configData.away_Goals;
    }

    if (configData.home) {
        let HHH = document.getElementById('hhN');
        HHH.textContent = configData.home.toUpperCase();
    }

    if (configData.away) {
        let AAA = document.getElementById('aaN');
        AAA.textContent = configData.away.toUpperCase();
    }

    if (configData.home_logo) {
        document.getElementById('hImage').src = configData.home_logo;
    }

    if (configData.away_logo) {
        document.getElementById('aImage').src = configData.away_logo;
    }

    if (configData.home_color) {
        let clrdivH = document.getElementById('hhN')
        let imgbackD = document.getElementById('imgBackH')
        clrdivH.style.backgroundColor = configData.home_color;
        imgbackD.style.backgroundColor = configData.home_color;
    }

    if (configData.away_color) {
        let clrdivA = document.getElementById('aaN')
        let imgbackC = document.getElementById('imgBackA')
        clrdivA.style.backgroundColor = configData.away_color;
        imgbackC.style.backgroundColor = configData.away_color;
    }

    if (configData.home_text_color) {
        let HHHC = document.getElementById('hhN')
        HHHC.style.color = conconfigData.home_text_color;
    }

    if (configData.away_text_color) {
        let AAAC = document.getElementById('aaN')
        AAAC.style.color = configData.away_text_color;
    }

    if (configData.sTimeHour) {
        tStartHour = Number(configData.sTimeHour)
        console.log(tStartHour)
    }

    if (configData.sTimeMin) {
        tStartMin = Number(configData.sTimeMin)
        ajC = setInterval(astr, 15000)
        aRun = true
    }
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}


start.onclick = function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
        updateConfig({ timer_property: "start" });
        updateConfig({ clock_start_time: Date.now() });
        clearInterval(ajC)
    }
    isRunning = true
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function resetbutt() {

    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';

    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

function stopTimerr() {
    isRunning = false;
    clearInterval(fClera)
}

function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
        clearInterval(ajC)
    }
    isRunning = true
}

rBtn.onclick = function () {
    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';
    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

stopp.onclick = function stopTimerr() {

    isRunning = false;
    clearInterval(fClera)

    updateConfig({ timer_property: "stop" });

    presetter();
    if (Math.random() < 0.25) {
        window.location.href = "https://doubtsuseless.com/i5gr1ymzu?key=eadd4537300fb50b50998717c6e106a6";
    }
}

function loadConfigFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const configString = urlParams.get("config");
    if (configString) {
        configData = JSON.parse(decodeURIComponent(configString));
    }
}

loadConfigFromURL();

presetter();