let currentAudio = null;
let currentBtn = null;

function toggleVoice(id, btn) {
  const audio = document.getElementById(id);
  const icon = btn.querySelector("i");

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentBtn) {
      currentBtn.querySelector("i").classList.remove("fa-pause");
      currentBtn.querySelector("i").classList.add("fa-play");
    }
  }

  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    currentAudio = audio;
    currentBtn = btn;
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}
