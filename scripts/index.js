let openBtn = document.querySelector(".js-card-opener");

openBtn.onclick = function () {
  document.body.classList.toggle("open");
  if (document.body.classList.contains("open")) {
    jsConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 500,
            confettiColors: [
                '#E57200', '#232D4B',
              ],
        });
    }
};

const jsConfetti = new JSConfetti()