const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#444",
  progressColor: "#2563eb",
  cursorColor: "#2563eb",
  barWidth: 3,
  barRadius: 3,
  height: 100,
  responsive: true,
});

wavesurfer.load("assets/img/original-iphone-ring-24302.mp3");

const btn = document.getElementById("playBtn");

btn.onclick = () => {
  wavesurfer.playPause();

  if (wavesurfer.isPlaying()) {
    btn.innerHTML = "⏸ Pause";
  } else {
    btn.innerHTML = "▶ Play";
  }
};
