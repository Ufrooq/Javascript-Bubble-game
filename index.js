let timer = 60;
let newValue;

function addEventListenerToCircles() {
  let circleBtns = document.querySelectorAll("#cirkle");
  circleBtns.forEach((circleBtn) => {
    circleBtn.addEventListener("click", () => {
      console.log(newValue);
    });
  });
}
const makeBubble = () => {
  let circles = "";
  for (let i = 0; i <= 120; i++) {
    circles += `<div id="cirkle" class="bg-sky-600 w-11 h-11 rounded-full relative hover:bg-sky-700 cursor-pointer">
                    <p class="text-white font-semibold mt-[10px] text-center  ">
                    ${Math.floor(Math.random() * 9)}
                    </p>
                </div>`;
  }
  document.querySelector("#circle-container").innerHTML = circles;
  addEventListenerToCircles();
};

const runTimer = () => {
  const timerid = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-val").textContent = timer;
    } else {
      clearInterval(timerid);
    }
  }, 1000);
};

const newValueToGuess = () => {
  newValue = Math.floor(Math.random() * 9);
  document.querySelector("#hits-val").textContent = newValue;
};

newValueToGuess();
runTimer();
makeBubble();
