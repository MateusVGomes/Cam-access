// Status constants
var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
var session;
var PRELOADER_URL = "https://github.com/flashphoner/flashphoner_client/raw/wcs_api-2.0/examples/demo/dependencies/media/preloader.mp4";
var address;

function init_api() {
  Flashphoner.init({});
  session = Flashphoner.createSession({
    urlServer: "wss://demo.flashphoner.com",
  }).on(SESSION_STATUS.ESTABLISHED, function (session) {
    console.log("ESTABLISHED");
  });

  playBtn.onclick = playClick;
}

// Detect browser
var Browser = {
  isSafari: function () {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },
};

function setAddress() {
  const inputAddress = document.getElementById("address");
  address = inputAddress.value;
  console.log(address);
}

function playClick() {
  const videoContainer = document.getElementById("play");
  if (videoContainer.querySelector("video") === null) {
    if (Browser.isSafari()) {
      Flashphoner.playFirstVideo(document.getElementById("play"), true, PRELOADER_URL).then(function () {
        playStream();
      });
    } else {
      playStream();
    }
  } else {
    const videoElement = videoContainer.querySelector("video");
    videoElement.remove();
    playStream();
  }
}

function playStream() {
  if (address) { // check if address is defined
    session
      .createStream({
        name: address, // specify the RTSP stream address
        display: document.getElementById("play"),
      })
      .on(STREAM_STATUS.PUBLISHING, function (publishStream) {
        console.log("Stream is publishing");
      })
      .on(STREAM_STATUS.PLAYING, function (playStream) {
        console.log("Stream is playing");
      })
      .on(STREAM_STATUS.FAILED, function (stream) {
        console.log("Stream failed to play: " + stream.getInfo());
        alert("Stream failed to play: " + stream.getInfo());
      })
      .play();
  } else {
    console.log("Address is not defined");
  }
}
