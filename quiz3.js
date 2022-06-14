const quizDB=[
    {
        question:"Q1: The term ‘Gay’ is used for:",
        a:"Men ",
        b:"Women",
        c:"Both",
        d:"All of the above",
        ans:"ans2"
    },
    {
        question:"Q2: ‘Bisexuals’ are attracted to:",
        a:"Men",
        b:"Women",
        c:"Both",
        d:"All of the above",
        ans:"ans1"
    },
    {
        question:"Q3:‘Asexual’ people are attarcted to other people:",
        a:"Yes",
        b:"No",
        c:"Less Often",
        d:"All of the above",
        ans:"ans3"
    },
    {
      question:"Q4: ‘Cis’ stands for:",
      a:"Cis - transformation",
      b:"Cis - bonds",
      c:"Cisgender",
      d:"All of the above",
      ans:"ans3"
    },
    {
      question:"Q5: Correct term for ‘Agender’:",
      a:"Genderphobic",
      b:"Genderphilic",
      c:"Gender neutral",
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
              <p>You have to remain at third module</p>
              <button><a href="quiz3.html">Watch module</a></button>
             `
            }else{
                showScore.innerHTML=`
                 <h3>You Scored ${score}/${quizDB.length}</h3>
              <p>You have to completed the modules</p>
              <button><a href="feedback.html">Completed</a></button>
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
    
    
