//When Start Activity is clicked switch from 'main' page to 'timer'

//target the top and middle pages and Start button
var upper = document.querySelector('.upper');
var middle = document.querySelector('.middle');
var submit = document.querySelector('.start-activity');
//create addEventListener to Start Activity button
submit.addEventListener('click', switchPageMiddle)
//create page switch function
function switchPageMiddle() {
  upper.classList.add('hide')
  middle.classList.remove('hide')
  console.log('Why is this not working')
}
