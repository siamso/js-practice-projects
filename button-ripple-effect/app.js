const btnEl = document.querySelector('.button');

btnEl.addEventListener('mouseover', event => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty('--posX', x + 'px');
  btnEl.style.setProperty('--posY', y + 'px');

})