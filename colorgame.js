var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var mode = 6;

for(var i =0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? mode = 3 : mode = 6;
    reset();
  });
}

function reset() {
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = '';
  resetButton.textContent = "New colors";
};

/*easyBtn.addEventListener("click", function(){
  mode = 3;
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  resetButton.textContent = "New colors";
  for(var i=0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
})

hardBtn.addEventListener("click", function(){
  mode = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  colors = generateRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  resetButton.textContent = "New colors";
  for(var i=0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = 'block ';
  }
})*/

resetButton.addEventListener("click", function() {
  reset();
})

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor) {
      messageDisplay.textContent =  'Correct!';
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  })
}

function changeColors(color) {
  for(var i=0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(number) {
  var colors = [];
  for(var i =0; i < number; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}