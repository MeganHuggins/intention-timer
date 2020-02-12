class MyForm {
  constructor(activity, goal, minutes, seconds) {
    this.activity = activity;
    this.userGoal = goal;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  makeNewCard(){
    pastActivitiesLog.innerHTML = '';
    pastActivitiesLog.insertAdjacentHTML('beforeend',
      ` <div class="newActivityCard">
          <div>
          <p class="activity-text">${this.activity}</p>
          </div>
          <div>
            <p class="minutes-seconds-text">${this.minutes} MIN ${this.seconds} SECONDS</p>
          </div>
          <div>
          <p class="goal-text">${this.userGoal}</p>
          </div>
        </div>`)
    }
}
