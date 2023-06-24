const yourDate = new Date("2019-10-04T00:00:00");
const music = ['1', '2'];

document.addEventListener('DOMContentLoaded', function() {
  const rootTime = document.querySelector("time");
  const audioElement = document.querySelector("audio");
  const maskElement = document.createElement("div");
  maskElement.id = "mask";
  document.body.appendChild(maskElement);

  document.querySelector("anni").textContent = `${(yourDate.getDate() > 9) ? yourDate.getDate() : "0" + yourDate.getDate()}-${(yourDate.getMonth() > 8) ? (yourDate.getMonth() + 1) : "0" + (yourDate.getMonth() + 1)}-${yourDate.getFullYear()}`;

  document.querySelector("date").textContent = "DAY " + Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);

  function updateTime() {
    const today = new Date();
    const hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 12;
    const min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60;
    const sec = Math.floor((today - yourDate) / 1000) % 60;
    rootTime.textContent = `${(hrs > 9) ? hrs : "0" + hrs}:${(min > 9) ? min : "0" + min}:${(sec > 9) ? sec : "0" + sec}`;
  }

  updateTime();
  const timer = setInterval(updateTime, 1000);

  audioElement.addEventListener("ended", function() {
    const randomMusicIndex = Math.floor(Math.random() * music.length);
    audioElement.setAttribute("src", `music/${music[randomMusicIndex]}.mp3`);
    audioElement.load();
    audioElement.play();
  });

  const randomMusicIndex = Math.floor(Math.random() * music.length);
  audioElement.setAttribute("src", `music/${music[randomMusicIndex]}.mp3`);
  audioElement.load();
  audioElement.play();
}, false);
