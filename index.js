function diceeRoll() {

  let randomNumber1 = Math.floor(Math.random() * 7);
  let randomNumber2 = Math.floor(Math.random() * 7);

  if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute('src', 'images/dice1.png')
  } else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute('src', 'images/dice2.png')
  } else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute('src', 'images/dice3.png')
  } else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute('src', 'images/dice4.png')
  } else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute('src', 'images/dice5.png')
  } else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute('src', 'images/dice6.png')
  }

  if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute('src', 'images/dice1.png')
  } else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute('src', 'images/dice2.png')
  } else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute('src', 'images/dice3.png')
  } else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute('src', 'images/dice4.png')
  } else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute('src', 'images/dice5.png')
  } else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute('src', 'images/dice6.png')
  }


  if (randomNumber1 > randomNumber2) {
    document.querySelector(".start-btn").innerText = "🚩 Player 1 Won!"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".start-btn").innerText = "Player 2 Won! 🚩"
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector(".start-btn").innerText = "Draw!"
  }

  document.querySelector(".refresh-btn").style.display="inherit"

};
