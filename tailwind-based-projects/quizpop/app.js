function log(item){
    console.log(item);
}

const questions = [
    {
        ques: 'What is my brother name?',
        a: 'Sadi',
        b: 'Pork',
        c: 'Bruh',
        d: 'None of them',
        correct: 'c'
    },
    {
        ques: 'What is my dog name?',
        a: 'Nok',
        b: 'Fok',
        c: 'Sok',
        d: 'I dont have dog',
        correct: 'd'
    }
]
let currentIndex = 0;
const questionEl = document.querySelector('[data-question]');
let optionsEl =  document.querySelector('#hi');
function loadQuiz(){

questionEl.textContent = questions[currentIndex].ques

optionsEl.innerHTML = `

                <li>${questions[currentIndex].a}</li>
                <li>${questions[currentIndex].b}</li>
                <li>${questions[currentIndex].c}</li>
                <li>${questions[currentIndex].d}</li>
`
currentIndex++
}
optionsEl.addEventListener('click', e => {
    if(e.target.value === questions[currentIndex].correct){
        log('yesss')
        loadQuiz()
    }
    else{
        log('nooo')
    }
    
})
