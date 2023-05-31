let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");
let homeScoreContainerEl = document.getElementById("home-score-container");
let awayScoreContainerEl = document.getElementById("away-score-container");
let homeScore = 0;
let awayScore = 0;

// Home Score
function homeOnePoint() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    resetTimer();
}

function homeTwoPoints() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    resetTimer();
}

function homeThreePoints() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    resetTimer();
}

// Away Score
function awayOnePoint() {
    awayScore += 1;
    awayScoreEl.textContent = awayScore;
    resetTimer();
}

function awayTwoPoints() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
    resetTimer();
}

function awayThreePoints() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
    resetTimer();
}

function resetGame() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    awayScore = 0
    awayScoreEl.textContent = awayScore
    // Reset the time and update the display
    time = 24;
    updateTimerDisplay();

    // Clear the interval if it's running
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    startPauseBtn.textContent = 'Start';
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

// Function to reset the timer
function resetTimer() {
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

// Function to highlight the higher score
function highlightHigherScore() {
    const homeScoreValue = parseInt(homeScoreEl.textContent);
    const awayScoreValue = parseInt(awayScoreEl.textContent);

    if (homeScoreValue > awayScoreValue) {
        homeScoreContainerEl.style.backgroundColor = 'rgba(10,14,23,80%)';
        awayScoreContainerEl.style.backgroundColor = '';
    } else if (awayScoreValue > homeScoreValue) {
        awayScoreContainerEl.style.backgroundColor = 'rgba(10,14,23,80%)';
        homeScoreContainerEl.style.backgroundColor = '';
    } else {
        homeScoreContainerEl.style.backgroundColor = '';
        awayScoreContainerEl.style.backgroundColor = '';
    }
}

// Event listeners for score changes
homeScoreContainerEl.addEventListener('DOMSubtreeModified', highlightHigherScore);
awayScoreContainerEl.addEventListener('DOMSubtreeModified', highlightHigherScore);

// Event listener for spacebar key press
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent scrolling on spacebar press
        startPauseTimer(); // Call the startPauseTimer() function
    }
});