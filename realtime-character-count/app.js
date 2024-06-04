const textArea = document.querySelector('textarea'),
countEl = document.querySelector('.count'),
remainingEL = document.querySelector('.remaining');

const remaining = textArea.getAttribute('maxlength');
remainingEL.textContent = remaining

textArea.addEventListener('keyup', () => {
  const count = textArea.value.length;
  const remainingCount =  remaining - count;
  countEl.textContent = count;
  remainingEL.textContent = remainingCount;
})
