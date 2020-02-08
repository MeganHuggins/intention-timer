
// //*****If user input goal minutes or seconds is not filled out have warning message appear
// //*****target the user goal input, the minutes input, the seconds input, hidden warning elements and the start activty button
// var userGoalInput = document.querySelector('.long-input');
// var minutesInput = document.querySelector('.minutes-input');
// var secondsInput = document.querySelector('.seconds-input')
// var hiddenWarning = document.querySelector('.hidden-warning');
// var submit = document.querySelector('.start-activity');
// //*****create EventListener for submit
// submit.addEventListener('click', checkInputValues);
// //*****create function for hidden warning to appear if no input present
// function checkInputValues() {
//   //*****write of or statement
//   var goal = true
//   if (userGoalInput.value==="") {
//     document.querySelector('.goal-hidden-warning').hidden = false;
//     goal = false;
//   }
//   var minutes = true
//   if (minutesInput.value==="") {
//     document.querySelector('.minutes-hidden-warning').hidden = false;
//     minutes = false;
//   }
//   var seconds = true
//   if (secondsInput.value==="") {
//     document.querySelector('.seconds-hidden-warning').hidden =
//     false;
//     seconds = false;
//   }
//   if (goal && minutes && seconds) {
//     //*****When Start Activity is clicked switch from 'main' page to 'timer'
//     // *****target the top and middle pages and Start button
//     var upper = document.querySelector('.upper');
//     var middle = document.querySelector('.middle');
//     // *****create page switch function
//     // *****upper.hidden = true
//     //***** middle.hidden = false
//     upper.classList.add('hide')
//     middle.classList.remove('hide')
//   }
//   var form = document.querySelector(".user-input-form");
//   form.addEventListener('submit', handleForm);
//   function handleForm(event) {
//     event.preventDefault();
//   }
// }
  //***** e.preventDefault()

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
  var createNewActivityArea = document.querySelector('.create-new-activity')
  var timer = setInterval(function() {
  var minutesRemainingDecimal = (totalSeconds / 60);
  var minutesRemaining = parseInt(minutesRemainingDecimal, 10);
  var secondsRemaining = (totalSeconds % 60);
    totalSeconds--;
    if (totalSeconds < 0) {
      // secondsDisplayArea.innerHTML = `00:00`;
      secondsDisplayArea.innerHTML = 'Wow, You did it!'
      minutesDisplayArea.innerHTML = ` `;
      // timer.classList.remove('hide')
      startButton.innerHTML= `COMPLETE!`
      createNewActivityArea.innerHTML =`<button class="log-activity-button">Log Activity</button>`;
      // secondsDisplayArea.innerHTML = `<button>Log Activity</button>`;
      // alert("DONE");
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


// HEY DAVE!!!!!!!!!copy and paste below 250 before commiting!!!!!
//
//
//
//
//
//
//
//
//
//
//
//
















































































//
// Dave's disappear code
// var upper = document.querySelector('.upper');
// var middle = document.querySelector('.middle');
// var startActivityButton = document.querySelector('.start-activity-input')
// startActivityButton.addEventListener('click', switchToStartActivityPage)


// function switchToStartActivityPage() {
//   var minutes = Number(document.getElementById('minutes').value);
//   var seconds = Number(document.getElementById('seconds').value);
//   var minutesDisplayArea = document.querySelector('.time-in-mins');
//   var secondsDisplayArea = document.querySelector('.time-in-secs');
//   var userGoal = document.querySelector('.long-input').value;
//   // maybe rename selected action class to user-goal-display???
//   var userGoalDisplayArea = document.querySelector('.selected-action')
//   userGoalDisplayArea.innerHTML = `${userGoal}`
//   upper.classList.add('hide');
//   middle.classList.remove('hide');
//   if (seconds < 10) {
//   minutesDisplayArea.innerHTML = `${minutes}:`;
//   secondsDisplayArea.innerHTML = `0${seconds}`;
// } else {
//   minutesDisplayArea.innerHTML = `${minutes}:`;
//   secondsDisplayArea.innerHTML = `${seconds}`;
//   }
// }
//
//


// dave trying to implement current activity and time display with megans function to require inputs and switch pages


// function switchToStartActivityPage() {
//   var minutes = Number(document.getElementById('minutes').value);
//   var seconds = Number(document.getElementById('seconds').value);
//   var minutesDisplayArea = document.querySelector('.time-in-mins');
//   var secondsDisplayArea = document.querySelector('.time-in-secs');
//   var userGoal = document.querySelector('.long-input').value;
//   // maybe rename selected action class to user-goal-display???
//   var userGoalDisplayArea = document.querySelector('.selected-action')
//   userGoalDisplayArea.innerHTML = `${userGoal}`
//   upper.classList.add('hide');
//   middle.classList.remove('hide');
//   if (seconds < 10) {
//   minutesDisplayArea.innerHTML = `${minutes}:`;
//   secondsDisplayArea.innerHTML = `0${seconds}`;
// } else {
//   minutesDisplayArea.innerHTML = `${minutes}:`;
//   secondsDisplayArea.innerHTML = `${seconds}`;
//   }
// }

// dave trying to make it not allow you to even enter e, + or -
// var userGoalInput = document.querySelector('.long-input');
// var minutesInput = document.querySelector('.minutes-input');
// var secondsInput = document.querySelector('.seconds-input')
// var hiddenWarning = document.querySelector('.hidden-warning');
// var submit = document.querySelector('.start-activity');
// //*****create EventListener for submit
// submit.addEventListener('click', checkInputValues);
// //*****create function for hidden warning to appear if no input present
// function checkInputValues() {
//   //*****write of or statement
//   var goal = true
//   if (userGoalInput.value==="") {
//     document.querySelector('.goal-hidden-warning').hidden = false;
//     goal = false;
//   }
//   var minutes = true
//   if (minutesInput.value==="") {
//     document.querySelector('.minutes-hidden-warning').hidden = false;
//     minutes = false;
//   }
//   var seconds = true
//   if (secondsInput.value==="") {
//     document.querySelector('.seconds-hidden-warning').hidden =
//     false;
//     seconds = false;
//   }
//   if (goal && minutes && seconds) {
//     //*****When Start Activity is clicked switch from 'main' page to 'timer'
//     // *****target the top and middle pages and Start button
//     var upper = document.querySelector('.upper');
//     var middle = document.querySelector('.middle');
//     // *****create page switch function
//     // *****upper.hidden = true
//     //***** middle.hidden = false
//     upper.classList.add('hide')
//     middle.classList.remove('hide')
//     var minutes = Number(document.getElementById('minutes').value);
//     var seconds = Number(document.getElementById('seconds').value);
//     var minutesDisplayArea = document.querySelector('.time-in-mins');
//     var secondsDisplayArea = document.querySelector('.time-in-secs');
//     var userGoal = document.querySelector('.long-input').value;
//     var userGoalDisplayArea = document.querySelector('.selected-action')
//     userGoalDisplayArea.innerHTML = `${userGoal}`
//     upper.classList.add('hide');
//     middle.classList.remove('hide');
//     if (seconds < 10) {
//     minutesDisplayArea.innerHTML = `${minutes}:`;
//     secondsDisplayArea.innerHTML = `0${seconds}`;
//   } else {
//     minutesDisplayArea.innerHTML = `${minutes}:`;
//     secondsDisplayArea.innerHTML = `${seconds}`;
//     }
//   }
//   var form = document.querySelector(".user-input-form");
//   form.addEventListener('submit', handleForm);
//   function handleForm(event) {
//     event.preventDefault();
//   }
// }

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
    document.querySelector('.seconds-hidden-warning').hidden =
    false;
    seconds = false;
  }
  if (goal && minutes && seconds) {
    //*****When Start Activity is clicked switch from 'main' page to 'timer'
    // *****target the top and middle pages and Start button
    var upper = document.querySelector('.upper');
    var middle = document.querySelector('.middle');
    // *****create page switch function
    // *****upper.hidden = true
    //***** middle.hidden = false
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

// variables to target the clickable 3 options value...
//   function activitySelected() {
//   var studySelected = document.querySelector(".study-button");
//   var meditateSelected = document.querySelector(".meditate-button");
//   var exerciseSelected = document.querySelector(".exercise-butt");
//   if studySelected {
//     console.log('Study!');
//   } else {
//     console.log('not study')
//   }
// }




































































































// daves section
