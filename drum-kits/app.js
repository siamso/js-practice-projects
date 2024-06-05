const kits = ['crash', 'kick', 'snare', 'tom'];
const drumContainer = document.querySelector('.drum-container');
kits.forEach(kit => {
  const btnEl = document.createElement('button');
  btnEl.textContent = kit
  btnEl.style.backgroundImage = `url(./images/${kit}.png)`
  const audioEl = document.createElement('audio');
  audioEl.src = `./sounds/${kit}.mp3`
  btnEl.appendChild(audioEl);
  drumContainer.appendChild(btnEl);
  btnEl.addEventListener('click', () => {
    audioEl.play()
  });
  window.addEventListener('keydown', e => {
    if(e.key === kit.slice(0,1)){
      audioEl.play();
      btnEl.style.scale = '1.1';
      setTimeout(() => {
        btnEl.style.scale = '1'
      },300);
    }
  })
})