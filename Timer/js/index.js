class Timer {
    constructor() {
        this.hoursInput = null;
        this.minutesInput = null;
        this.secondsInput = null;
        this.editBtn = null;
        this.runBtn = null;
        this.rerunBtn = null;
        this.timerInputs = null;
        this.audio = null;
        this.alarm = null;

        this.UiSelectors = {
            hours: 'hours',
            minutes: 'minutes',
            seconds: 'seconds',
            edit: '[data-edit]',
            run: '[data-run]',
            rerun: '[data-rerun]',
            timeInputs: '[data-timer-input]',
            audio: '[data-audio]',
            alarm: '[data-alarm]',
        }
    }
    initializeTimer() {
        this.hoursInput = document.getElementById(this.UiSelectors.hours)
        this.minutesInput = document.getElementById(this.UiSelectors.minutes)
        this.secondsInput = document.getElementById(this.UiSelectors.seconds)

        this.editBtn = document.querySelector(this.UiSelectors.edit)
    }
}