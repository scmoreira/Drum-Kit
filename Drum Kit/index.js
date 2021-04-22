// Detecting the click event
let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {

  drumButtons[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

// Detecting the keydown event
  document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
  });

// Function to execute in case of both events.
// the case represents both, the innerHTML and the key
function playSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(key);
  }
}

// Animating the button with a CSS style.
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
