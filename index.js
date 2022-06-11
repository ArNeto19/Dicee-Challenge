function diceeRoll() {

  let randomNumber1 = Math.floor(Math.random() * 6)+1;
  let randomNumber2 = Math.floor(Math.random() * 6)+1;

  document.querySelector(".img1").setAttribute('src', 'images/dice'+randomNumber1.toFixed(0)+'.png')
  document.querySelector(".img2").setAttribute('src', 'images/dice'+randomNumber2.toFixed(0)+'.png')

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".start-btn").innerText = "🚩 Player 1 Won!"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".start-btn").innerText = "Player 2 Won! 🚩"
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector(".start-btn").innerText = "Draw!"
  }

  document.querySelector("h2").style.display="inherit"

};
