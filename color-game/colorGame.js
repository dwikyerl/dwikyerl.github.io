let colorDisplay = document.getElementById("color-display");
let squares = document.getElementsByClassName("square");
let messageDisplay = document.getElementById("message");
let resetButton = document.getElementById("reset");
let modeButton = document.getElementsByClassName("mode");
let h1 = document.querySelector("h1");
let numSquares = 6;
let colors = [];
let pickedColor;

function init() {
  setupSquares();

  //mode buttons event listeners
  setupModeButton();

  reset();
};

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
};

function setupModeButton() {
  for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      numSquares = (this.textContent === "Easy") ? 3 : 6;
      reset();
    })
  }
};

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor(colors);
  //chang colorDisplay to match pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  h1.style.background = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
       squares[i].style.display = "block";
       squares[i].style.backgroundColor = colors[i];
     } else {
       squares[i].style.display = "none";
     }
  }
};

function generateRandomColors(num) {
  //add num random colors to an array
  //return that array
  let arr = [];
  for (let i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
};

function randomColor() {
  //pick "red" from 0 - 255
  let r = Math.floor(256 * Math.random());
  //pick "green" from 0 - 255
  let g = Math.floor(256 * Math.random());
  //pick "blue" from 0 - 255
  let b = Math.floor(256 * Math.random());
  return "rgb(" + r + ", " + g + ", " + b+ ")";
};

function changeColors(color) {
  //loop through all squares
  //change each color to match given color
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor(colors) {
  let random = Math.floor(colors.length * Math.random());
  return colors[random];
};

init();

resetButton.addEventListener("click", function() {
  reset();
});

