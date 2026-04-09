(function () {
  const SCORE_KEY = 'hotel-review-score';

  function readScore() {
    const rawValue = localStorage.getItem(SCORE_KEY);
    const parsedValue = Number.parseInt(rawValue ?? '0', 10);
    return Number.isFinite(parsedValue) && parsedValue >= 0 ? parsedValue : 0;
  }

  function writeScore(value) {
    localStorage.setItem(SCORE_KEY, String(Math.max(0, value)));
  }

  window.GameScore = {
    get() {
      return readScore();
    },
    increment() {
      const nextScore = readScore() + 1;
      writeScore(nextScore);
      return nextScore;
    },
    reset() {
      writeScore(0);
    },
    render(selector) {
      const target = document.querySelector(selector);
      if (target) {
        target.textContent = `${readScore()}/5`;
      }
    }
  };
})();