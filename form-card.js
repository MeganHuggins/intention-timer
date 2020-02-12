class MyForm {
  constructor(activity, goal, minutes, seconds) {
    this.activity = activity;
    this.userGoal = goal;
    this.minutes = minutes;
    this.seconds = seconds;
  }
  makeNewCard(){
    pastActivitiesLog.insertAdjacentHTML('beforeend',
      ` <div class="newActivityCard">
          <div class="activity-card-top">
          <p class="new-activity-activity">${this.activity}</p>
            <p class="activity-card-minutes">${this.minutes} MIN
            </p>
            <p class="activity-card-seconds"> ${this.seconds} SECONDS
            </p>
          </div>
          <p class="">${this.userGoal}</p>
        </div>`)
    }
}
