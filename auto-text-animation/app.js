const texts = ['YouTuber','Web Developer','Freelancer','Influencer'];

let textsIndex = 0
let textLength = 0

const h1El = document.createElement('h1');
document.body.appendChild(h1El);
updateText()

function updateText () {
  textLength++
  h1El.innerText = `I am ${texts[textsIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${texts[textsIndex].slice(0,textLength)}`
  if(textLength === texts[textsIndex].length){
    textsIndex++
    textLength = 0
  }
  if(textsIndex === texts.length){
    textsIndex = 0
  }
  setTimeout(updateText,400)
};


