const quizDB=[
    {
        question:"Q1: Which Month is called the Pride Month of LGBTQ+",
        a:"September",
        b:"December",
        c:"June",
        d:"All of the above",
        ans:"ans2"
    },
    {
        question:"Q2: In which Year Actually same sex marriage was legalized in US?",
        a:"2013",
        b:"2014",
        c:"2015",
        d:"All of the above",
        ans:"ans1"
    },
    {
        question:"Q3: What are the Goals Lgbtq  people are Fighting For?",
        a:"Equality",
        b:"Rights",
        c:"Both A and B",
        d:"All of the above",
        ans:"ans3"
    },
    {
      question:"Q4: Why LGBT Health is Important?",
      a:"Increased mental and physical well-being",
      b:"Reduction in disease transmission and progression",
      c:"13",
      d:"All of the above",
      ans:"ans3"
    },
    {
      question:"Q5: What Does the Letter T stands for ?",
      a:"Telegender",
      b:"Transgender",
      c:"Trigender",
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
             if(score<=2){
              showScore.innerHTML=`
               <h3>You Scored ${score}/${quizDB.length}</h3>
              <p>As a suggestion you have to remain at second module</p>
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
    
