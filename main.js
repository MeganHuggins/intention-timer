console.log('test')
// all variables
var upper = document.querySelector('.upper');
var middle = document.querySelector('.middle');
var studyButton = document.querySelector('.study-button')
var studyPicActive = document.querySelector('.lightbulb-active')
var studyPicInactive = document.querySelector('.lightbulb')
var meditateButton = document.querySelector(".meditate-button")
var meditatePicActive = document.querySelector(".lotus-flower-active")
var meditatePicInactive = document.querySelector(".lotus-flower")
var exerciseButton = document.querySelector(".exercise-button")
var execerisePicActice = document.querySelector(".shoe-active")
var excercisePicInactive = document.querySelector(".shoe")
var userGoalInput = document.querySelector('.long-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input')
var hiddenWarning = document.querySelector('.hidden-warning');
var submit = document.querySelector('.start-activity');
var startButton = document.querySelector('.timer');
var timer = document.querySelector('.timer')
var pastActivitiesLog = document.querySelector(".past-activities-log");
var activityOriginalMessage = document.querySelector(".activity-original-message")
var logActivityButton = document.querySelector(".log-activity-button");
var createNewActivity = document.querySelector(".create-new-activity")
var intentionAndCountdown = document.querySelector(".intention-and-count-down")
var currentActivityHead = document.querySelector(".current-activity-head")
var completedActivityHead =document.querySelector(".completed-activity-head")
var createNewActivityButton = document.querySelector(".create-new-activity-button")
var logButtonArea = document.querySelector('.log-button-area')
var minutes = document.getElementById('minutes').value;
var seconds = Number(document.getElementById('seconds').value);
var minutesDisplayArea = document.querySelector('.time-in-mins');
var secondsDisplayArea = document.querySelector('.time-in-secs');
var userGoal = document.querySelector('.long-input').value;
var userGoalDisplayArea = document.querySelector('.selected-action')
var logActivityCard = document.querySelector('.newActivityCard')
var clockAndStartButtonDiv = document.querySelector('.clock-and-start-button')
var activitySelected;

// event listeners
studyButton.addEventListener('click', studyButtonOn)
meditateButton.addEventListener('click', meditateButtonOn)
exerciseButton.addEventListener('click', exerciseButtonOn)
submit.addEventListener('click', checkInputValues);
startButton.addEventListener('click', startCountDownAndDisableButton);
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', backToNewActivity)

function createNewForm(){
  newForm = new MyForm(activitySelected, userGoalInput.value, minutesInput.value, secondsInput.value);
  console.log(newForm);
}

// make sure user has selected all values
function checkInputValues() {
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
  if (activitySelected==="Study" || activitySelected==="Meditate" || activitySelected==="Exercise") {
    isActivitySelected = true;
  } else {
    document.querySelector('.activity-hidden-warning').hidden = false;
    activitySelected = false;
  } createNewForm();
  if (isActivitySelected && goal && minutes && seconds) {
    upper.classList.add('hide')
    middle.classList.remove('hide')
    clockAndStartButtonDiv.classList.remove('hide')
    // adding remove classLists to get back to countdown after first go around...
    currentActivityHead.classList.remove('hide')
    intentionAndCountdown.classList.remove('hide')
    timer.classList.remove('hide')
    // need to hide warnings or else they will reappear
    document.querySelector('.goal-hidden-warning').hidden = true;
    document.querySelector('.minutes-hidden-warning').hidden = true;
    document.querySelector('.seconds-hidden-warning').hidden = true;
    document.querySelector('.activity-hidden-warning').hidden = true;
    var minutes = Number(document.getElementById('minutes').value);
    var seconds = Number(document.getElementById('seconds').value);
    var minutesDisplayArea = document.querySelector('.time-in-mins');
    var secondsDisplayArea = document.querySelector('.time-in-secs');
    var userGoal = document.querySelector('.long-input').value;
    var userGoalDisplayArea = document.querySelector('.selected-action')
    userGoalDisplayArea.innerHTML = `${userGoal}`
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


function startCountDownAndDisableButton() {
  countdown();
}

function countdown() {
  startButton.removeEventListener("click", startCountDownAndDisableButton);
  var minutes = Number(document.getElementById('minutes').value);
  var seconds = Number(document.getElementById('seconds').value);
  var totalSeconds = ((minutes * 60) + seconds) - 1;
  // create display areas for minutes/seconds
  var minutesDisplayArea = document.querySelector('.time-in-mins');
  var secondsDisplayArea = document.querySelector('.time-in-secs');
  var timer = setInterval(function() {
  // get total seconds back to minutes and seconds to use
  var minutesRemainingDecimal = (totalSeconds / 60);
  // converts minutes remaining from float to integer
  var minutesRemaining = parseInt(minutesRemainingDecimal, 10);
  // gets minutes out and just leaves seconds
  var secondsRemaining = (totalSeconds % 60);
    totalSeconds = totalSeconds - 1;
    // all if else statement just shows what is displayed
    // when clock hits 0 this is what happens
    if (secondsRemaining < 0) {
      secondsDisplayArea.innerHTML = 'Great Job!'
      minutesDisplayArea.innerHTML = ` `;
      startButton.innerHTML= `COMPLETE!`
      logButtonArea.classList.remove('hide')
      window.clearInterval(timer);
      // if total seconds are less than 10 we need a 0 for place holder, otherwise 3:5
    } else if (secondsRemaining % 60 < 10) {
      minutesDisplayArea.innerHTML = `${minutesRemaining}:`;
      secondsDisplayArea.innerHTML = `0${secondsRemaining}`;
      // normal display with minutes and seconds displaying
    } else if ((totalSeconds) / 60 > 1) {
      minutesDisplayArea.innerHTML = `${minutesRemaining}`;
      secondsDisplayArea.innerHTML = `:${secondsRemaining}`;
      // if less than a minute, minutes will just show 0
    } else if (secondsRemaining / 60 < 1) {
      minutesDisplayArea.innerHTML = `0:`;
      secondsDisplayArea.innerHTML = secondsRemaining;
    }
  }, 1000);
}


// log activity cards
  function logActivity() {
    var newActivity = new MyForm(activitySelected, userGoalInput.value, minutesInput.value, secondsInput.value);
    newActivity.makeNewCard();
    activityOriginalMessage.classList.add('hide')
    currentActivityHead.classList.add('hide')
    intentionAndCountdown.classList.add('hide')
    timer.classList.add('hide')
    logButtonArea.classList.add('hide')
    completedActivityHead.classList.remove('hide')
    createNewActivityButton.classList.remove('hide')
    startButton.innerHTML= `START`
    startButton.addEventListener('click', startCountDownAndDisableButton);
  }


// create new activity button takes back to original screen
function backToNewActivity() {
  // hide current contents
  clockAndStartButtonDiv.classList.add('hide')
  completedActivityHead.classList.add('hide')
  createNewActivityButton.classList.add('hide')
  middle.classList.add('hide')
  // bring back the original
  var upper = document.querySelector('.upper');
  upper.classList.remove('hide')
  // need to clear orignal inputs for all 4
  // targeting activity selected, clears activitySelected value
  activitySelected = '';
  console.log(activitySelected)
  // need to reset pictures/text/border...pics first
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
  // now border/text
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
  // now need to reset the values of the 3 inputes...
  var inputForm = document.querySelector(".input-form")
  inputForm.reset();
}

// trying to combine some functions...
function studyButtonOn() {
  studyButton.classList.add("study-button-active");
  studyButton.classList.remove("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
  studyPicInactive.classList.add("hide")
  studyPicActive.classList.remove("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
  activitySelected = 'Study'
  console.log(activitySelected)
  timer.classList.add('timer-study')
  timer.classList.remove('timer-meditate')
  timer.classList.remove('timer-exercise')
}

// turn meditate button as active, others as inactive
function meditateButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.add("meditate-button-active")
  meditateButton.classList.remove("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.add("hide")
  meditatePicActive.classList.remove("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
  activitySelected = 'Meditate'
  console.log(activitySelected)
  timer.classList.add('timer-meditate')
  timer.classList.remove('timer-exercise')
  timer.classList.remove('timer-study')
}

// turn exercise button as active, others as inacive
function exerciseButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.add("exercise-button-active")
  exerciseButton.classList.remove("exercise-button")
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.add("hide")
  execerisePicActice.classList.remove("hide")
  activitySelected = 'Exercise'
  console.log(activitySelected)
  timer.classList.add('timer-exercise')
  timer.classList.remove('timer-study')
  timer.classList.remove('timer-meditate')
}

// attempt at Event Propagation
// allIconsParent.addEventListener('click', function(event) {
//   if (event.target.className === 'study-button') {
//     console.log(event.target.className)
//     studyButtonOn();
//     // activitySelected = 'Study'
//   } else if (event.target.className === 'meditate-button') {
//     console.log(event.target.className)
//     meditateButtonOn();
//     // activitySelected ='Meditate'
//   } else if (event.target.className === 'exercise-button') {
//     console.log(event.target.className)
//     exerciseButtonOn();
//     // activitySelected = 'Exercise'
//   }
// })
