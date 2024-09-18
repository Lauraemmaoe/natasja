document.getElementById("play-button").addEventListener("click", function () {
  var audio = document.getElementById("audio");

  if (audio.paused) {
    audio.play(); // Afspil lyden
  } else {
    audio.pause(); // Stop lyden
    audio.currentTime = 0; // Spol lyden tilbage til start
  }
});
