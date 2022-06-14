const quizDB=[
{
    question:"Q1 : Abbreviation of POSH:",
    a:"Protection of Women From Sexual & Harmful Act",
    b:"Protection of World From Sexual Harassment Act ",
    c:"Protection of Women From Sexual Harassment Act ",
    d:"All of the above",
    ans:"ans2"
},
{
    question:"Q2: What is the symbol of the LGBT community?",
    a:"A 6-pointed star ",
    b:"A colourful rose ",
    c:"A rainbow flag",
    d:"All of the above",
    ans:"ans1"
},
{
    question:"Q3: In 1978, the rainbow flag was first displayed at the Gay Freedom Day Parade in which U.S. City?",
    a:"New York City",
    b:"Los Angeles",
    c:"San Francisco",
    d:"All of the above",
    ans:"ans3"
},
{
  question:"Q4: Which of the following famous CEOs publicly came out as gay?",
  a:"Jeff Bezos",
  b:"Richard Branson",
  c:"Tim Cook",
  d:"All of the above",
  ans:"ans3"
},
{
  question:"What does the letter T in LGBT stands for?",
  a:"Telegender",
  b:"Trigender",
  c:"Transgender",
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
        `
        if(score<2){
          showScore.innerHTML=`
           <h3>You Scored ${score}/${quizDB.length}</h3>
           <p>As a suggestion you should view the video again</p>
           <button><a href="quiz1.html">Watch module</a></button>
          `
        }else if(score<=2 && score<= 4){
          showScore.innerHTML=`
           <h3>You Scored ${score}/${quizDB.length}</h3>
          <p>You can go to second module</p>
          <button><a href="quiz2.html">Watch module</a></button>
         `
        }else{
          showScore.innerHTML=`
           <h3>You Scored ${score}/${quizDB.length}</h3>
          <p>You can go to the third module</p>
          <button><a href="quiz3.html">Watch module</a></button>
         `
        }
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

