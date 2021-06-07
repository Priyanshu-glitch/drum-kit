var n = document.querySelectorAll("button").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerClick = this.innerHTML;
    sound(buttonInnerClick);
    buttonAnimation(buttonInnerClick);
  }

);
}
document.addEventListener("keydown" , function(event){
  sound(event.key);
  buttonAnimation(event.key);
});


function sound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio1 = new Audio('tom-2.mp3');
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio('tom-3.mp3')
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio('tom-4.mp3')
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio('snare.mp3')
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio('kick-bass.mp3')
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio('crash.mp3')
      audio6.play();
      break;
    default:
      var audio = new Audio('crash.mp3')
      audio.play();
  }
}
function buttonAnimation(clickKey){
  document.querySelector("." + clickKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + clickKey).classList.remove("pressed");
  },200);
}
