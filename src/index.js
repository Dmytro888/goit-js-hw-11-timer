import './styles.css';
import timerTemplate from './templates/timerTemp.hbs';

class Timer {
  constructor ({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.markup = document.body.insertAdjacentHTML(
      'beforeend',
      timerTemplate(selector),
    );
    this.refs = {
      days: document.querySelector(`#${selector} [data-value=days]`),
      hours: document.querySelector(`#${selector} [data-value=hours]`),
      mins: document.querySelector(`#${selector} [data-value=mins]`),
      secs: document.querySelector(`#${selector} [data-value=secs]`),
    };
  }

  counter () {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }, 1000);
  }
}

const timer = new Timer({
  selector: 'timer-1',
  targetDate: new Date('Sep 17, 2021 21:00'),
});

timer.counter();

const timer2 = new Timer({
  selector: 'timer-2',
  targetDate: new Date('Jul 17,2021 13:30'),
});

timer2.counter();

const timer3 = new Timer({
  selector: 'timer-3',
  targetDate: new Date('Jul 23,2021 12:00'),
});

timer3.counter();
