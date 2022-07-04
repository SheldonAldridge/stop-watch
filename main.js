window.onload = function(){
  //get vairables
  let startButton = document.querySelector(".start");
  let stopButton = document.querySelector(".stop");
  let resetButton = document.querySelector(".reset");
  let appendseconds = document.querySelector(".seconds");
  let appendsplit = document.querySelector(".splitSecs");
  let seconds = 00;
  let split = 00;
  let interval; 

  startButton.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = function () {
    clearInterval(interval);
  };

  resetButton.onclick = function () {
    clearInterval(interval);
    split = "00";
    seconds = "00";
    appendsplit.innerHTML = split;
    appendseconds.innerHTML = seconds;
  };

  function startTimer() {
    split++;

    if (split <= 9) {
      appendsplit.innerHTML = "0" + split;
    }

    if (split > 9) {
      appendsplit.innerHTML = split;
    }

    if (split > 99) {
      console.log("seconds");
      seconds++;
      appendseconds.innerHTML = "0" + seconds;
      split = 0;
      appendsplit.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendseconds.innerHTML = seconds;
    }
  }
}