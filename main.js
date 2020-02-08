
// //*****If user input goal minutes or seconds is not filled out have warning message appear
// //*****target the user goal input, the minutes input, the seconds input, hidden warning elements and the start activty button
//
// Megans top section with daves code put in for goal and mins/secs
var userGoalInput = document.querySelector('.long-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input')
var hiddenWarning = document.querySelector('.hidden-warning');
var submit = document.querySelector('.start-activity');
//*****create EventListener for submit
submit.addEventListener('click', checkInputValues);
//*****create function for hidden warning to appear if no input present
function checkInputValues() {
  //*****write of or statement
  var goal = true
  if (userGoalInput.value==="") {
    document.querySelector('.goal-hidden-warning').hidden = false;
    goal = false;
  }
  var minutes = true
  if (minutesInput.value==="") {
    document.querySelector('.minutes-hidden-warning').hidden = false;
    minutes = false;
  }
  var seconds = true
  if (secondsInput.value==="") {
    document.querySelector('.seconds-hidden-warning').hidden = false;
    seconds = false;
  }
  var isActivitySelected;
  if (activitySelected==="study" || activitySelected==="meditate" || activitySelected==="exercise") {
    isActivitySelected = true;
  } else {
    document.querySelector('.activity-hidden-warning').hidden = false;
    activitySelected = false;
  }
  if (isActivitySelected && goal && minutes && seconds) {
    var upper = document.querySelector('.upper');
    var middle = document.querySelector('.middle');
    upper.classList.add('hide')
    middle.classList.remove('hide')
    var minutes = Number(document.getElementById('minutes').value);
    var seconds = Number(document.getElementById('seconds').value);
    var minutesDisplayArea = document.querySelector('.time-in-mins');
    var secondsDisplayArea = document.querySelector('.time-in-secs');
    var userGoal = document.querySelector('.long-input').value;
    var userGoalDisplayArea = document.querySelector('.selected-action')
    userGoalDisplayArea.innerHTML = `${userGoal}`
    upper.classList.add('hide');
    middle.classList.remove('hide');
    if (seconds < 10) {
    minutesDisplayArea.innerHTML = `${minutes}:`;
    secondsDisplayArea.innerHTML = `0${seconds}`;
  } else {
    minutesDisplayArea.innerHTML = `${minutes}:`;
    secondsDisplayArea.innerHTML = `${seconds}`;
    }
  }
  var form = document.querySelector(".user-input-form");
  form.addEventListener('submit', handleForm);
  function handleForm(event) {
    event.preventDefault();
  }
  }

// Color change with image click..not sure how event delegation, target but that is probably the best way to do it...did some research but don't understand it yet
console.log('wtf')
var studyButton = document.querySelector(".study-button")
var studyPicActive = document.querySelector(".lightbulb-active")
var studyPicInactive = document.querySelector(".lightbulb")
var meditateButton = document.querySelector(".meditate-button")
var meditatePicActive = document.querySelector(".lotus-flower-active")
var meditatePicInactive = document.querySelector(".lotus-flower")
var exerciseButton = document.querySelector(".exercise-button")
var execerisePicActice = document.querySelector(".shoe-active")
var excercisePicInactive = document.querySelector(".shoe")

studyButton.addEventListener('click', studyPicOn)
meditateButton.addEventListener('click', meditatePicOn)
exerciseButton.addEventListener('click', exercisePicOn)
studyButton.addEventListener('click', studyButtonOn)
meditateButton.addEventListener('click', meditateButtonOn)
exerciseButton.addEventListener('click', exerciseButtonOn)
// targeting text and border
function studyButtonOn() {
  studyButton.classList.add("study-button-active");
  studyButton.classList.remove("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
}

function meditateButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.add("meditate-button-active")
  meditateButton.classList.remove("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
}

function exerciseButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.add("exercise-button-active")
  exerciseButton.classList.remove("exercise-button")
}
// changes picture colors
function studyPicOn() {
  studyPicInactive.classList.add("hide")
  studyPicActive.classList.remove("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
}

function meditatePicOn() {
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.add("hide")
  meditatePicActive.classList.remove("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
}

function exercisePicOn() {
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.add("hide")
  execerisePicActice.classList.remove("hide")
}

var startButton = document.querySelector('.timer');
startButton.addEventListener('click', countdown);

function countdown() {
  var minutes = Number(document.getElementById('minutes').value);
  var seconds = Number(document.getElementById('seconds').value);
  var totalSeconds = (minutes * 60) + seconds;
  // console.log(totalSeconds)
  var minutesDisplayArea = document.querySelector('.time-in-mins');
  var secondsDisplayArea = document.querySelector('.time-in-secs');
  var logButtonArea = document.querySelector('.log-button-area')

  // var logActivityButton = document.querySelector(".log-activity-button");

  var timer = setInterval(function() {
  var minutesRemainingDecimal = (totalSeconds / 60);
  var minutesRemaining = parseInt(minutesRemainingDecimal, 10);
  var secondsRemaining = (totalSeconds % 60);
    totalSeconds--;
    if (totalSeconds < 0) {
      secondsDisplayArea.innerHTML = 'Party On, Garth!'
      minutesDisplayArea.innerHTML = ` `;
      startButton.innerHTML= `COMPLETE!`
      logButtonArea.classList.remove('hide')
    } else if (secondsRemaining % 60 < 10) {
      minutesDisplayArea.innerHTML = `${minutesRemaining}:`
      secondsDisplayArea.innerHTML = `0${secondsRemaining}`
    } else if ((totalSeconds) / 60 > 1) {
      minutesDisplayArea.innerHTML = `${minutesRemaining}:`;
      secondsDisplayArea.innerHTML = `${secondsRemaining}`;
    } else if (totalSeconds / 60 < 1) {
      minutesDisplayArea.innerHTML = `0:`;
      secondsDisplayArea.innerHTML = `${secondsRemaining}`;
    }
  }, 1000);

}

var activitySelected;
var timer = document.querySelector('.timer')

studyButton.onclick = function() {
  activitySelected = 'study'
  console.log(activitySelected)
  timer.classList.add('timer-study')
}

meditateButton.onclick = function() {
  activitySelected = 'meditate'
  console.log(activitySelected)
  timer.classList.add('timer-meditate')
}

exerciseButton.onclick = function() {
  activitySelected = 'exercise'
  console.log(activitySelected)
  timer.classList.add('timer-exercise')
}

//dave trying to get the cards to go to past activity log
// may have duplicate names
var pastActivitiesLog = document.querySelector(".past-activities-log");
var logActivityButton = document.querySelector(".log-activity-button");
logActivityButton.addEventListener("click", logActivity);

function logActivity() {
  pastActivitiesLog.insertAdjacentHTML('beforeend', `test test test`)
  console.log('test')
}






// HEY DAVE!!!!!!!!!copy and paste below 250 before commiting!!!!!













































// New Sections below
