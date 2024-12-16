
let configData = {
    "timer_property": "",
    "home": "",
    "away": "",
    "home_color": "",
    "away_color": "",
    "home_text_color": "",
    "away_text_color": "",
    "score_text_color": "",
    "score_background_color": "",
    "timer_text_color": "",
    "timer_background_color": "",
    "clock_start_time": "",
    "minute": "",
    "second": "",
    "link": ""
}

const scoreElement = document.getElementById("scS");

function updateConfig(newData) {
    configData = { ...configData, ...newData };
    console.log(configData)
}


function getData(fotmobLink) {
    url = fotmobLink;
    proxy = 'https://cors-anywhere.herokuapp.com/';

    myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7");
    myHeaders.append("if-none-match", "\"1lzbvxech2554e\"");
    myHeaders.append("priority", "u=1, i");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");
    myHeaders.append("x-mas", "eyJib2R5Ijp7InVybCI6Ii9hcGkvbWF0Y2hEZXRhaWxzP21hdGNoSWQ9NDUxNDEwMCZzaG93TmV3VWVmYUJyYWNrZXQ9dHJ1ZSIsImNvZGUiOjE3MzQzNDYwOTEyOTUsImZvbyI6Ijc4YzI5YjYwYyJ9LCJzaWduYXR1cmUiOiJEMTlENkEyNTBCQjYyMjcwM0QwRUVCQjdCMDcxRkQ0NyJ9");

    requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(proxy + url, requestOptions)
        .then(response => response.json())
        .then(data => {
            scoreElement.childNodes[0].textContent = data.header.teams[0].score
            scoreElement.childNodes[2].textContent = data.header.teams[1].score
        })
        .catch(err => console.error(err));
}


function converttime(tiptop) {

    let tip = tiptop / 1000
    let tip_min = Math.floor(tip / 60);
    let tip_sec = Math.floor(tip % 60);

    console.log(tip_min, tip_sec, tiptop)
    min = Number(configData.minute) + tip_min
    sec = Number(configData.second) + tip_sec
}


function autoPreSetter(fotmobLink) {
    url = fotmobLink;
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7");
    myHeaders.append("if-none-match", "\"1lzbvxech2554e\"");
    myHeaders.append("priority", "u=1, i");
    myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");
    myHeaders.append("x-mas", "eyJib2R5Ijp7InVybCI6Ii9hcGkvbWF0Y2hEZXRhaWxzP21hdGNoSWQ9NDUxNDEwMCZzaG93TmV3VWVmYUJyYWNrZXQ9dHJ1ZSIsImNvZGUiOjE3MzQzNDYwOTEyOTUsImZvbyI6Ijc4YzI5YjYwYyJ9LCJzaWduYXR1cmUiOiJEMTlENkEyNTBCQjYyMjcwM0QwRUVCQjdCMDcxRkQ0NyJ9");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(proxy + url, requestOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById('hImage').src = data.header.teams[0].imageUrl
            scoreElement.childNodes[0].textContent = data.header.teams[0].score
            document.getElementById('aImage').src = data.header.teams[1].imageUrl
            scoreElement.childNodes[2].textContent = data.header.teams[1].score

        })
        .catch(err => console.error(err));
}



let start = document.getElementById('sBtn')
let coppy = document.getElementById('cBtn')
let reset = document.getElementById('rBtn')
let stopp = document.getElementById('spBtn')
let exx = document.getElementById('exxt')
let clockk = document.getElementById('timerDisplay')
let cdiv = document.getElementById('adiv')

let fClera = null
let isRunning = false
let sec = 0;
let min = 0;
let temp = false
let hTOver = false;
let aT = true
let fotmobLink = "https://www.fotmob.com/api/matchDetails?matchId="


function minsetter() {
    min = document.getElementById('timMin').value
    updateConfig({ minute: document.getElementById('timMin').value });
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
    updateConfig({ second: document.getElementById('timSec').value });
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
}

function asetter() {
    let AAA = document.getElementById('aaN')
    AAA.textContent = document.getElementById('aName').value.toUpperCase()
    updateConfig({ away: document.getElementById('aName').value.toUpperCase() });
}

function hCSetter() {
    let clrdivH = document.getElementById('hhN')
    let imgbackD = document.getElementById('imgBackH')
    clrdivH.style.backgroundColor = document.getElementById('hColor').value
    imgbackD.style.backgroundColor = document.getElementById('hColor').value
    updateConfig({ home_color: document.getElementById('hColor').value });
}

function aCSetter() {
    let clrdivA = document.getElementById('aaN')
    let imgbackC = document.getElementById('imgBackA')
    clrdivA.style.backgroundColor = document.getElementById('aColor').value
    imgbackC.style.backgroundColor = document.getElementById('aColor').value
    updateConfig({ away_color: document.getElementById('aColor').value });
}

function hTCSetter() {
    let HHHC = document.getElementById('hhN')
    HHHC.style.color = document.getElementById('hTColor').value
    updateConfig({ home_text_color: document.getElementById('hTColor').value });
}

function aTCSetter() {
    let AAAC = document.getElementById('aaN')
    AAAC.style.color = document.getElementById('aTColor').value
    updateConfig({ away_text_color: document.getElementById('aTColor').value });
}

function sTSetter() {
    let sT = document.getElementById('scS')
    sT.style.color = document.getElementById('sTColor').value
    updateConfig({ score_text_color: document.getElementById('sTColor').value });
}

function sBSetter() {
    let sB = document.getElementById('scS')
    sB.style.backgroundColor = document.getElementById('sBColor').value
    updateConfig({ score_background_color: document.getElementById('sBColor').value });
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

}

function linkgetter() {
    let uselessLink = document.getElementById('fotmob').value
    let matchID = uselessLink.split('#')
    fotmobLink = "https://www.fotmob.com/api/matchDetails?matchId="
    fotmobLink = fotmobLink + matchID[1]
    updateConfig({ link: fotmobLink })
    autoPreSetter(fotmobLink)
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
}

document.getElementById('timMin').addEventListener("input", minsetter)
document.getElementById('timSec').addEventListener("input", secsetter)
document.getElementById('hName').addEventListener("input", hsetter)
document.getElementById('aName').addEventListener("input", asetter)
document.getElementById('hColor').addEventListener("input", hCSetter)
document.getElementById('aColor').addEventListener("input", aCSetter)
document.getElementById('hTColor').addEventListener("input", hTCSetter)
document.getElementById('aTColor').addEventListener("input", aTCSetter)
document.getElementById('sTColor').addEventListener("input", sTSetter)
document.getElementById('sBColor').addEventListener("input", sBSetter)
document.getElementById('autoSwitcher').addEventListener("click", autooS)
document.getElementById('fotmob').addEventListener("input", linkgetter)

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

    if (configData.link) {
        fotmobLink = configData.link
        autoPreSetter(fotmobLink)
    }

    if (configData.home) {
        let HHH = document.getElementById('hhN');
        HHH.textContent = configData.home.toUpperCase();
    }

    if (configData.away) {
        let AAA = document.getElementById('aaN');
        AAA.textContent = configData.away.toUpperCase();
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
    if (configData.minute) {

        min = configData.minute
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

    if (configData.second) {

        sec = configData.second
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

    if (configData.timer_property == "start") {
        let spend_time = Date.now() - configData.clock_start_time
        converttime(spend_time)
        starttimer();
    }

    if (configData.timer_property == "stop") {
        stopTimerr()
    }

    if (configData.timer_property == "reset") {
        resetbutt()
    }

    if (configData.minute) {

        min = configData.minute
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

    if (configData.second) {

        sec = configData.second
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
}


start.onclick = function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
        updateConfig({ timer_property: "start" });
        updateConfig({ clock_start_time: Date.now() });
    }
    isRunning = true
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
    }
    isRunning = true
}

rBtn.onclick = function () {
    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = 'LIVE';
    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

stopp.onclick = function stopTimerr() {

    isRunning = false;
    clearInterval(fClera)

    updateConfig({ timer_property: "stop" });

    presetter();
}

function loadConfigFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const configString = urlParams.get("config");
    if (configString) {
        configData = JSON.parse(decodeURIComponent(configString));
    }
}

loadConfigFromURL();

setInterval(() => getData(fotmobLink), 30000)

presetter();