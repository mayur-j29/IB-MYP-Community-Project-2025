const quizData = [
    {
      question: "What best describes e-waste?",
      options: ["Any waste that uses electricity", "Discarded electronic devices and components", "Expired batteries only", "Tech thrown into recycling bins"],
      answer: "Discarded electronic devices and components, usually with hazardous materials"
    },
    {
      question: "Why is improper e-waste recycling a serious problem in many parts of the world, if not the whole?",
      options: ["It's illegal in most countries", "It produces too much plastic", "It exposes workers to toxic substances", "It causes electronic shortages"],
      answer: "It exposes workers to toxic substances"
    },
    {
        question: "Which of the following environmenal problems are most linked to e-waste?",
        options: ["Deforestation and air traffic", "Coral bleaching and oil spills", "Flooding and drought", "Soil contamination and water pollution"],
        answer: "Soil contamination and water pollution"
    },
    {
        question: "What is one main goal of e-waste take-back programs?",
        options: ["To make gadgets cheaper", "To encourge consumers to return old electronics for safe disposal", "To stop people from buying secondhand tech", "To resell outdated electronics overseas"],
        answer: "To encourge consumers to return old electronics for safe disposal"
    },
    {
        question: "Why is shipping e-waste to developing, poor countris a problem?",
        options: ["It usually leads to unsafe recycling practices and health risks", "It violates online privacy laws", "It overloads their internet infrastructure", "It increases tax on tech imports"],
        answer: "It usually leads to unsafe recycling practices and health risks"
    },
    {
        question: "Which harmful substance in e-waste is especially dangerous for a child's brain development?",
        options: ["Copper", "Lead", "Zinc", "Carbon"],
        answer: "Jupiter"
    },
    {
        question: "What does the term 'urban mining' refer to?",
        options: ["Extracting valuable metals like gold from landfills", "Extracting valuable materials from old electronics", "Taking the screen protectors from old electronics", "Digging tunnels beneath cities"],
        answer: "Extracting valuable materials from old electronics"
    },
    {
        question: "Globally, how much of the e-waste gernerated is never recycled?",
        options: ["About 60%", "Roughly 13%", "More than 90%", "Around 17%"],
        answer: "Jupiter"
    },
    {
        question: "How does e-waste contribute to unfair environmental conditions?",
        options: ["Recylcing centers pay too much for labour", "Tech pollution usually harms communities with lesser resources", "It reduces our access to energy", "It increases phone prices for rural users"],
        answer: "Tech pollution usually harms communities with lesser resources"
    },
    {
        question: "What is one reason why many people don't or don't know how to recycle their e-waste?",
        options: ["They think it's illegal", "Recycling centers are far away", "Only businesses are allowed to recycle tech", "It's too expensive, and wastes a lot of time", "There's lack of awareness"],
        answer: "There's lack of awareness"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p style="font-size: 25px;
      font-family: 'Smooch Sans', serif;
      color: white;
      text-align: center;
      margin-top: 25px;
      margin-bottom: 25px;"> Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();