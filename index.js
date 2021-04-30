const playBtn = document.getElementById('play_quiz');
const backBtn = document.querySelectorAll('#back_main');
const mainSection = document.querySelector('.main-section');
const infoBoxSection  = document.querySelector('.info-box-section');
const highScoreSection = document.querySelector('.highscore-section');
const highScoresBtn = document.getElementById('high_scores');

playBtn.addEventListener('click' , (e) => {
    mainSection.classList.add('hidden');
    infoBoxSection.classList.add('active');
});

backBtn[0].addEventListener('click' , (e) => {
  mainSection.classList.remove('hidden');
  infoBoxSection.classList.remove('active');
});

highScoresBtn.addEventListener('click' , (e) => {
  mainSection.classList.add('hidden');
  highScoreSection.classList.add('active');
  e.preventDefault();
});

backBtn[1].addEventListener('click' , (e) => {
mainSection.classList.remove('hidden');
highScoreSection.classList.remove('active');
});

const highScore = JSON.parse(localStorage.getItem('highScores')) || [];
const list = document.querySelector('#list');
highScore.forEach((player) =>{
  const tr = document.createElement('tr');
  let html;
  html = `<td>${player.username}</td>
          <td>${player.score}</td>`;
  tr.innerHTML = html;
 list.appendChild(tr);
});
