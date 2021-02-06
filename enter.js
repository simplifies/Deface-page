function opensesame() {
    var s = document.getElementById('enterSite').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,40)})();


    var videoElem = document.getElementById("video-background");
    videoElem.play();
    startTime()
}