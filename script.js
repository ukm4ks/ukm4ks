document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('audio');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const stopBtn = document.getElementById('stopBtn');
  const restartBtn = document.getElementById('restartBtn');

  playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseBtn.textContent = 'Play';
    }
  });

  stopBtn.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
  });

  restartBtn.addEventListener('click', function() {
    audio.currentTime = 0;
  });
});
