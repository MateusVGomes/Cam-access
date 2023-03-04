alert("CONECTOU")
//Status constants
var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
var session;
var PRELOADER_URL = "https://github.com/flashphoner/flashphoner_client/raw/wcs_api-2.0/examples/demo/dependencies/media/preloader.mp4";
function init_api() {
    Flashphoner.init({});
        session = Flashphoner.createSession({
        urlServer: "wss://demo.flashphoner.com" 
    }).on(SESSION_STATUS.ESTABLISHED, function(session) {
        console.log("ESTABLISHED");
    });
 
    playBtn.onclick = playClick;
}
 
//Detect browser
var Browser = {
    isSafari: function() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    },
}
function playClick() {
    if (Browser.isSafari()) {
        Flashphoner.playFirstVideo(document.getElementById("play"), true, PRELOADER_URL).then(function() {
            playStream();
        });
    } else {
        playStream();
    }
}
function playStream() {
    session.createStream({
        name: "rtsp://allan.vasconcelos:139ucdSDFN@201.20.88.130:10004/cam/realmonitor?channel=1&subtype=1", //specify the RTSP stream address
        display: document.getElementById("play"),
    }).play();
}