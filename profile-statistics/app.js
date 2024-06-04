const counter = document.querySelectorAll('.counter');

counter.forEach(currentEl => {
  currentEl.textContent = 0
  scaleNumber()
  function scaleNumber () {
    let currentNum =+ currentEl.textContent
    const dataCeil = currentEl.getAttribute('data-ceil')
    let initialNum = dataCeil / 15
    currentEl.textContent = Math.ceil(initialNum + currentNum)
    if(currentNum < dataCeil){
      setTimeout(scaleNumber,50)
    }
    else{
      currentEl.textContent = dataCeil
    }
  }
})