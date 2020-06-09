
function print(message) {
  document.write(message);
}

let quizContent = [
  [`What is Jonah's last name?`, `TARVER`],
  [`What is Danielle's last name?`, `RYCE`],
  [`What is Rajah's last name?`, `TARVER`]
];
let correctAns = 0;
let answeredCor = `<h2>These are the questions you answered correctly:</h2>`;
let answeredWrong = `<h2>These are the questions you answered incorrectly:</h2>`;
let finalResult;

const quiz = () => {
  for (let i = 0; i < quizContent.length; i += 1){
    quizContent[i].push(prompt(quizContent[i][0]).toUpperCase());
    if(quizContent[i][1] === quizContent[i][2]){
      correctAns += 1;
      answeredCor += `<p>${quizContent[i][0]} Correct Answer: ${quizContent[i][1]}</p>`;
    } else {
      answeredWrong += `<p>${quizContent[i][0]} Correct Answer: ${quizContent[i][1]} Your Answer: ${quizContent[i][2]}</p>`;
    }
  }
}

quiz();

finalResult = `<h1>You answered ${correctAns} out of ${quizContent.length} questions correctly.</h1>`;
finalResult += answeredCor + answeredWrong;

print(finalResult);
