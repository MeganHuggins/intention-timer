console.log('wtf')

// all variables

var studyButton = document.querySelector(".study-button")
var studyPicActive = document.querySelector(".lightbulb-active")
var studyPicInactive = document.querySelector(".lightbulb")
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
var activitySelected;
var timer = document.querySelector('.timer')
var pastActivitiesLog = document.querySelector(".past-activities-log");
var activityOriginalMessage = document.querySelector(".activity-original-message")
// pastActivitiesLog.innerHTML = '';
var logActivityButton = document.querySelector(".log-activity-button");
var createNewActivity = document.querySelector(".create-new-activity")
var intentionAndCountdown = document.querySelector(".intention-and-count-down")
var currentActivityHead = document.querySelector(".current-activity-head")
var completedActivityHead =document.querySelector(".completed-activity-head")
var createNewActivityButton = document.querySelector(".create-new-activity-button")
var logButtonArea = document.querySelector('.log-button-area')

//*****create EventListener for submit

// event listeners
studyButton.addEventListener('click', studyPicOn)
meditateButton.addEventListener('click', meditatePicOn)
exerciseButton.addEventListener('click', exercisePicOn)
studyButton.addEventListener('click', studyButtonOn)
meditateButton.addEventListener('click', meditateButtonOn)
exerciseButton.addEventListener('click', exerciseButtonOn)
submit.addEventListener('click', checkInputValues);
startButton.addEventListener('click', countdown);
logActivityButton.addEventListener('click', logActivity);
createNewActivityButton.addEventListener('click', backToNewActivity)


//*****create function for hidden warning to appear if no input present

// make sure user has selected all values
// //*****If user input goal minutes or seconds is not filled out have warning message appear
// //*****target the user goal input, the minutes input, the seconds input, hidden warning elements and the start activty button
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
    // adding remove classLists to get back to countdown after first go around...
    currentActivityHead.classList.remove('hide')
    intentionAndCountdown.classList.remove('hide')
    timer.classList.remove('hide')



    var minutes = Number(document.getElementById('minutes').value);
    var seconds = Number(document.getElementById('seconds').value);
    var minutesDisplayArea = document.querySelector('.time-in-mins');
    var secondsDisplayArea = document.querySelector('.time-in-secs');
    var userGoal = document.querySelector('.long-input').value;
    var userGoalDisplayArea = document.querySelector('.selected-action')
    userGoalDisplayArea.innerHTML = `${userGoal}`
    // upper.classList.add('hide');
    // middle.classList.remove('hide');
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



// targeting text and border
// turn study button as active, others as inactive
function studyButtonOn() {
  studyButton.classList.add("study-button-active");
  studyButton.classList.remove("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
}
// turn meditate button as active, others as inactive
function meditateButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.add("meditate-button-active")
  meditateButton.classList.remove("meditate-button")
  exerciseButton.classList.remove("exercise-button-active")
  exerciseButton.classList.add("exercise-button")
}
// turn exercise button as active, others as inacive
function exerciseButtonOn() {
  studyButton.classList.remove("study-button-active")
  studyButton.classList.add("study-button")
  meditateButton.classList.remove("meditate-button-active")
  meditateButton.classList.add("meditate-button")
  exerciseButton.classList.add("exercise-button-active")
  exerciseButton.classList.remove("exercise-button")
}
// changes picture colors
// turn study pic to green, others to white
function studyPicOn() {
  studyPicInactive.classList.add("hide")
  studyPicActive.classList.remove("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
}
// turn meditate pic to purple, others to white
function meditatePicOn() {
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.add("hide")
  meditatePicActive.classList.remove("hide")
  excercisePicInactive.classList.remove("hide")
  execerisePicActice.classList.add("hide")
}
// turn exercise pic to weird color, others to white
function exercisePicOn() {
  studyPicInactive.classList.remove("hide")
  studyPicActive.classList.add("hide")
  meditatePicInactive.classList.remove("hide")
  meditatePicActive.classList.add("hide")
  excercisePicInactive.classList.add("hide")
  execerisePicActice.classList.remove("hide")
}



function countdown() {
  // get minutes and seconds from inputs and convert to total seconds, need integers not strings--use Number
  // remove eventListener so user can't click twice...
  // startButton.removeEventListener("click", countdown, true);
  var minutes = Number(document.getElementById('minutes').value);
  var seconds = Number(document.getElementById('seconds').value);
  var totalSeconds = ((minutes * 60) + seconds) - 1;
  // create display areas for minutes/seconds
  var minutesDisplayArea = document.querySelector('.time-in-mins');
  var secondsDisplayArea = document.querySelector('.time-in-secs');
  // shows time - 1 second
  // work around for delay in start
  // create log button to appear at end
  // var logButtonArea = document.querySelector('.log-button-area')
  // timer function!!!!
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

// changes color of timmer button
// created variable to show what activity is selected


studyButton.onclick = function() {
  activitySelected = 'study'
  console.log(activitySelected)
  timer.classList.add('timer-study')
  timer.classList.remove('timer-exercise')
  timer.classList.remove('timer-meditate')
}

meditateButton.onclick = function() {
  activitySelected = 'meditate'
  console.log(activitySelected)
  timer.classList.add('timer-meditate')
  timer.classList.remove('timer-exercise')
  timer.classList.remove('timer-study')
}

exerciseButton.onclick = function() {
  activitySelected = 'exercise'
  console.log(activitySelected)
  timer.classList.add('timer-exercise')
  timer.classList.remove('timer-study')
  timer.classList.remove('timer-meditate')
}

// dave trying to get the cards to go to past activity log
// may have duplicate names


// issues with interpolating 4 items, making a variable to contain all 4
// var activityCard = (userGoalInput, activitySelected);

function logActivity() {
  // window change
  currentActivityHead.classList.add('hide')
  intentionAndCountdown.classList.add('hide')
  timer.classList.add('hide')
  logButtonArea.classList.add('hide')
  completedActivityHead.classList.remove('hide')
  createNewActivityButton.classList.remove('hide')
  startButton.innerHTML= `START`
  activityOriginalMessage.classList.add('hide')
  // pastActivitiesLog.innerHTML = ` `;
  var log = document.querySelector(".log")
  // pastActivitiesLog.innerHTML = log
  var secondsInput = document.querySelector('.seconds-input');
  pastActivitiesLog.insertAdjacentHTML('beforeend',
  `<section class="past-activity-card">
      <h4 class=>${activitySelected}</h4>
      <p class="past-activities-log-time"> ${minutesInput.value} MIN  ${secondsInput.value} SEC</p>
      <p class="past-activitites-log-user-goal">${userGoalInput.value}</p>
    </section>`)
}

  // button functionality
  // pastActivitiesLog.insertAdjacentHTML('beforeend',  )


// create new activity button takes back to original screen

function backToNewActivity() {
  // hide current contents
  completedActivityHead.classList.add('hide')
  createNewActivityButton.classList.add('hide')
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
  // var secondsDisplayArea = document.querySelector('.time-in-secs');
  // secondsDisplayArea.innerHTML = ` `
}


// create new activity button takes back to original screen

function backToNewActivity() {
  // hide current contents
  completedActivityHead.classList.add('hide')
  createNewActivityButton.classList.add('hide')
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
  // var secondsDisplayArea = document.querySelector('.time-in-secs');
  // secondsDisplayArea.innerHTML = ` `
}







// HEY DAVE!!!!!!!!!copy and paste below 250 before commiting!!!!!

// log a card....
// function logActivity() {}











































// New Sections below
