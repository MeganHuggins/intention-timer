//If user input goal minutes or seconds is not filled out have warning message appear
//target the user goal input, the minutes input, the seconds input, hidden warning elements and the start activty button
var userGoalInput = document.querySelector('.long-input');
var minutesInput = document.querySelector('.minutes-input');
var secondsInput = document.querySelector('.seconds-input')
var hiddenWarning = document.querySelector('.hidden-warning');
var submit = document.querySelector('.start-activity');
//create EventListener for submit
submit.addEventListener('click', checkInputValues);
//create function for hidden warning to appear if no input present
function checkInputValues() {
  //write of or statement
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
    //When Start Activity is clicked switch from 'main' page to 'timer'
    // target the top and middle pages and Start button
    var upper = document.querySelector('.upper');
    var middle = document.querySelector('.middle');
    // create page switch function
    upper.hidden = true
    middle.hidden = false
    // upper.classList.add('hide')
    // middle.classList.remove('hide')
  }
  // e.preventDefault()
}
