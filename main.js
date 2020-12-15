const app = () => {
  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playback");
  }

  function removeBacklight(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.remove("playback");
  }

  window.addEventListener("keydown", playSound);
  window.addEventListener("keyup", removeBacklight);

  function playOnClick(event) {
    let elem = event.target;
    if (elem.tagName !== "DIV") {
      elem = elem.closest("div");
    }
    const audio = document.querySelector(
      `audio[data-key="${elem.dataset.key}"]`
    );
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    elem.classList.add("playback");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.addEventListener("click", playOnClick));

  function removeBacklightMouseUp(event) {
    let elem = event.target;
    if (elem.tagName !== "DIV") {
      elem = elem.closest("div");
    }
    if (!elem) return;
    elem.classList.remove("playback");
  }

  window.addEventListener("transitionend", removeBacklightMouseUp);
};
app();
