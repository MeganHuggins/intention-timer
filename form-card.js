class MyForm {
  constructor(activity, goal, minutes, seconds) {
    this.activity = activity;
    this.userGoal = goal;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  makeNewCard(){
    // var newLoggedCard = document.createElement('div');
    // newLoggedCard.classList.add('newActivityCard');
    // newLoggedCard.classList.add('card-text');
    // newLoggedCard.innerHTML =
    pastActivitiesLog.innerHTML = '';
    pastActivitiesLog.insertAdjacentHTML('beforeend',
      ` <div class="newActivityCard">
          <p class="">${this.activity}</p>
          <div class="">
            <p class="">${this.minutes} MIN
            </p>
            <p class=""> ${this.seconds} SECONDS
            </p>
          </div>
          <p class="">${this.userGoal}</p>
        </div>`)
      // return pastActiviesLog;
    }
}
