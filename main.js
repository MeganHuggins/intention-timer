//
// // Color change with image click..not sure how event delegation, target but that is probably the best way to do it...did some research but don't understand it yet
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



// var studyButtonInactive = document.querySelector('.lightbulb');
// var meditateButtonInactive = document.querySelector('.lotus-flower');
// var exerciseButtonInactive = document.querySelector('.shoe');
// var studyButtonActive = document.querySelector('.lightbulb-active')
// var meditateButtonActive = document.querySelector('.lotus-flower-active')
// var exerciseButtonActive = document.querySelector('.shoe-active')
//
// studyButtonInactive.addEventListener('click', studyOn);
// meditateButtonInactive.addEventListener('click', meditateOn);
// exerciseButtonInactive.addEventListener('click', exerciseOn);
//
// function studyOn() {
//   studyButtonInactive.classList.add("hide")
//   studyButtonActive.classList.remove("hide")
//   meditateButtonInactive.classList.remove("hide")
//   meditateButtonActive.classList.add("hide")
//   exerciseButtonInactive.classList.remove("hide")
//   exerciseButtonActive.classList.add("hide")
// }
//
// function meditateOn() {
//   studyButtonInactive.classList.remove("hide")
//   studyButtonActive.classList.add("hide")
//   meditateButtonInactive.classList.add("hide")
//   meditateButtonActive.classList.remove("hide")
//   exerciseButtonInactive.classList.remove("hide")
//   exerciseButtonActive.classList.add("hide")
// }
//
// function exerciseOn() {
//   studyButtonInactive.classList.remove("hide")
//   studyButtonActive.classList.add("hide")
//   meditateButtonInactive.classList.remove("hide")
//   meditateButtonActive.classList.add("hide")
//   exerciseButtonInactive.classList.add("hide")
//   exerciseButtonActive.classList.remove("hide")
// }







// var studyButtonInactive = document.querySelector('.lightbulb');
// var studyButtonActive = document.querySelector('.lightbulb-active');
// var meditateButtonInactive = document.querySelector('.lotus-flower');
// var meditateButtonActive = document.querySelector('.lotus-flower-active')
// var exerciseButtonInactive = document.querySelector('.shoe');
// var exerciseButtonActive = document.querySelector('.shoe-active')
//
// studyButtonInactive.addEventListener('click', studyPicOn);
// meditateButtonInactive.addEventListener('click', meditatePicOn);
// exerciseButtonInactive.addEventListener('click', exercisePicOn);
//
// function studyPicOn() {
//   studyButtonInactive.classList.add("hide")
//   studyButtonActive.classList.remove("hide")
//   meditateButtonInactive.classList.remove("hide")
//   meditateButtonActive.classList.add("hide")
//   exerciseButtonInactive.classList.remove("hide")
//   exerciseButtonActive.classList.add("hide")
// }
//
// function meditatePicOn() {
//   studyButtonInactive.classList.remove("hide")
//   studyButtonActive.classList.add("hide")
//   meditateButtonInactive.classList.add("hide")
//   meditateButtonActive.classList.remove("hide")
//   exerciseButtonInactive.classList.remove("hide")
//   exerciseButtonActive.classList.add("hide")
// }
//
// function exercisePicOn() {
//   studyButtonInactive.classList.remove("hide")
//   studyButtonActive.classList.add("hide")
//   meditateButtonInactive.classList.remove("hide")
//   meditateButtonActive.classList.add("hide")
//   exerciseButtonInactive.classList.add("hide")
//   exerciseButtonActive.classList.remove("hide")
// }

// var studyBorder = document.querySelector('.study-Button');
// // var studyBorderActive = document.querySelector('.lightbulb-active');
// var meditateBorder = document.querySelector('.lotus-flower');
// // var meditateBorderActive = document.querySelector('.lotus-flower-active')
// var exerciseBorder = document.querySelector('.shoe');
// var exerciseBorderActive = document.querySelector('.shoe-active')
// studyBorder.addEventListener('click', studyBorderOn);
// meditateBorder.addEventListener('click', meditateBorderOn);
// exerciseBorder.addEventListener('click', exerciseBorderOn);

// function studyBorderOn() {
  // studyBorder.classList.add("study-button-active")
  // studyBorder.classList.remove("study-button")
  // studyBuActive.classList.remove("hide")
  // meditateBorder.classList.remove("hide")
  // meditateBorder.classList.add("meditate-button")
  // meditateButtonActive.classList.add("hide")
  // exerciseBorder.classList.remove("exercise-button")
  // exerciseButtonActive.classList.add("hide")


// function meditateBorderOn() {
  // studyButtonInactive.classList.remove("hide")
  // studyButtonActive.classList.add("hide")
  // meditateButtonInactive.classList.add("hide")
  // meditateButtonActive.classList.remove("hide")
  // exerciseButtonInactive.classList.remove("hide")
  // exerciseButtonActive.classList.add("hide")


// function exerciseBorderOn() {
  // studyButtonInactive.classList.remove("hide")
  // studyButtonActive.classList.add("hide")
  // meditateButtonInactive.classList.remove("hide")
  // meditateButtonActive.classList.add("hide")
  // exerciseButtonInactive.classList.add("hide")
  // exerciseButtonActive.classList.remove("hide")
