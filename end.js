const finalScore = document.getElementById('final_score');
const saveBtn = document.getElementById('savebtn');
const username = document.getElementById('username');

const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.textContent = mostRecentScore ? mostRecentScore : 0;

const highScore = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
username.addEventListener('keyup' , () => {
  saveBtn.disabled = !username.value;
});

function saveHighScore (e) {
  e.preventDefault();

  const score ={
    score: mostRecentScore,
    username: username.value
  };

  highScore.push(score);
  highScore.sort((a , b) => {
    return b.score - a.score
  });

  highScore.splice(MAX_HIGH_SCORES);
  localStorage.setItem('highScores', JSON.stringify(highScore));
  window.location.assign('index.html');
}
