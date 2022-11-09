window.addEventListener("QuestionStart",answer)

function checkname(event) {
  console.log(event.detail.PlayerName) 
}

window.addEventListener("QuizJoin",checkname);
