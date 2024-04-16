var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    video = document.querySelector("video");

    // Play
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        updateVolumeInfo();
    });

    // Pause
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
    });

    // Slow Down
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    // Speed Up
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate.toFixed(5));
    });

    // Skip Ahead
    document.getElementById("skip").addEventListener("click", function() {
        video.currentTime += 10;
        if (video.currentTime > video.duration) {
            video.currentTime = 0;
        }
        console.log("Current time: " + video.currentTime.toFixed(5));
    });

    // Mute
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume Slider
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Old School
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
});

// Vol Information
function updateVolumeInfo() {
    document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
}

