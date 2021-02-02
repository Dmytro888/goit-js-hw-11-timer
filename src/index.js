import './styles.css';

class Timer {
  refs = {
    days: document.querySelector('[data-value=days]'),
    hours: document.querySelector('[data-value=hours]'),
    mins: document.querySelector('[data-value=mins]'),
    secs: document.querySelector('[data-value=secs]'),
  };

  constructor ({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
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
  selector: '#timer-1',
  targetDate: new Date('Sep 17, 2021'),
});

timer.counter();
