let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let homeScore = 0
let awayScore = 0

// Home Score
function homeOnePoint() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homeTwoPoints() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function homeThreePoints() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

// Away Score
function awayOnePoint() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}
function awayTwoPoints() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}
function awayThreePoints () {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}




// TIMER SECTION -------------------------------------------------
// Timer variables
let time = 24;
let timerInterval;

// Display the initial time
updateTimerDisplay();

// Function to start or pause the timer
function startPauseTimer() {
  const startPauseBtn = document.getElementById('startPauseBtn');
  if (timerInterval) {
    // Pause the timer
    clearInterval(timerInterval);
    timerInterval = null;
    startPauseBtn.textContent = 'Start';
  } else {
    // Start the timer
    timerInterval = setInterval(decrementTimer, 100);
    startPauseBtn.textContent = 'Pause';
  }
}

// Function to restart the timer
function restartTimer() {
  // Reset the time and update the display
  time = 24;
  updateTimerDisplay();

  // Clear the interval if it's running
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  const startPauseBtn = document.getElementById('startPauseBtn');
  startPauseBtn.textContent = 'Start';
}

// Function to decrement the timer and update the display
function decrementTimer() {
  time -= 0.1;
  if (time <= 0) {
    // Time's up, pause the timer and reset the time
    clearInterval(timerInterval);
    timerInterval = null;
    time = 0;
    const startPauseBtn = document.getElementById('startPauseBtn');
    startPauseBtn.textContent = 'Start';
  }
  updateTimerDisplay();
}

// Function to update the timer display
function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = time.toFixed(1);
}