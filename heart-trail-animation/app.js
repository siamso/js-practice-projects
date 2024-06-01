const bodyEl = document.querySelector('body');
bodyEl.addEventListener('mousemove', (event) => {
  const positionX = event.offsetX;
  const positionY = event.offsetY;

  const heart = document.createElement('span');
  heart.classList.add('heart');

  heart.innerHTML = `<i class="fas fa-heart"></i>`
  const size = Math.random() * 10;

  heart.style.inset = `${positionY}px ${positionX}px`;
  heart.style.fontSize = `${size}rem`

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove()
  },3000)

})