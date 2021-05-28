let readlineSync = require("readline-sync");
const chalk = require('chalk');

let quiz = [
  {
  question: "Who is my favorite Marvel superhero?",
  answer: "Doctor Strange"
},
  {
  question: "What is my favorite youtube channel?",
  answer: "TED ED"
},
  {
  question: "Who is my favorite DC superhero?",
  answer: "Wonder Woman"
},
  {
  question: "What is my favourite anime?",
  answer: "Castlevania"
},
  {
  question: "What is my favourite street food?",
  answer: "Shawarma"
},
  {
  question: "What is my favorite cuisine?",
  answer: "Mexican"
},
  {
  question: "Which do i like more Genshin or Valorant?",
  answer: "Valorant"
},
  {
  question: "Who is my favourite music artist?",
  answer: "Billie Eilish"
},
]

let highscores = [
  {
    name: "random1",
    score: 14
  },
  {
    name: "random2",
    score: 16
  },
]

function StartQuiz(quiz, highscores){
  let yourscore = 0
  let userName = readlineSync.question("Whats your name? ");
  console.log("Welcome "+ userName + ", to a quiz about how well you know me");
  for(let i=0; i < quiz.length; i++){
    let ans = readlineSync.question(quiz[i].question);
    if(ans.toUpperCase() === quiz[i].answer.toUpperCase()){
      yourscore=yourscore+2;
      console.log(chalk.greenBright.bold("correct answer!! your score: ",yourscore));
    }
    else{
      yourscore=yourscore-2;
      console.log(chalk.redBright.bold("wrong answer!! your score: ",yourscore));
      console.log(chalk.redBright.bold("the correct answer is: ",quiz[i].answer));
    }
  }

  console.log(chalk.greenBright.bold("YAY!! FINAL SCORE: ",yourscore));

  for(let j=0; j < highscores.length; j++){
    if(highscores[j].score < yourscore){
      console.log(chalk.cyanBright.bgYellow.bold.underline("ITS A HIGHSCORE !!"));
      return console.log(chalk.blueBright.bold.italic("send a screenshot to be added to the leaderboard"));
    }
  }

 
}

StartQuiz(quiz, highscores);
