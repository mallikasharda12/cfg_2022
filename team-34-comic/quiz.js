const quizDB=[
{
    question:"Q1: What is 6+7?",
    a:"11",
    b:"12",
    c:"13",
    d:"All of the above",
    ans:"ans2"
},
{
    question:"Q2: What is 3+7?",
    a:"11",
    b:"12",
    c:"13",
    d:"All of the above",
    ans:"ans1"
},
{
    question:"Q3: What is 6+7?",
    a:"11",
    b:"12",
    c:"13",
    d:"All of the above",
    ans:"ans3"
}
];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
let score=0;
let questionCount=0;
const loadQuestion=()=>{
    const questionList= quizDB[questionCount];
    question.innerText= questionList.question;
    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
}
const answers= document.querySelectorAll('.answer');
const showScore= document.querySelector('#showScore');
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
     answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
     });
     return answer;
};
const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
      curAnsElem.checked=false;
    })
}
submit.addEventListener('click',()=>{
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans){
       score++; 
    };
    questionCount++;
    deselectAll();
      if(questionCount < quizDB.length){
       loadQuestion();
      }else{
        showScore.innerHTML=`
         <h3>You Scored ${score}/${quizDB.length}</h3>
         <button class="btn">Next </button>
         <p>To move to next video click on next</p>
         <p>To watch the video again click on show button</p>
         <button class="btn" id="show_again"><a href="/quiz.html"> Show </a></button>
        `
        showScore.classList.remove('scoreArea');
      }
})

start=document.querySelector('#start');
hidden=document.querySelector('.hidden');
start.addEventListener('click',()=>{
  hidden.classList.remove('hidden');
  start.classList.add('hidden');
  document.querySelector('.hidit').classList.add('hid');
})
