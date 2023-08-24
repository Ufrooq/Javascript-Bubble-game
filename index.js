let timer = 60;
let hits = 0;

const makeBubble = () => {
  let circles = "";
  for (let i = 0; i <= 120; i++) {
    circles += `<div class="bg-sky-600 w-11 h-11 rounded-full relative hover:bg-sky-700 cursor-pointer">
                    <p class="text-white font-semibold mt-[10px] text-center  ">
                    ${Math.floor(Math.random() * 9)}
                    </p>
                </div>`;
  }
  document.querySelector("#circle-container").innerHTML = circles;
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
  document.querySelector("#hits-val").textContent = Math.floor(
    Math.random() * 9
  );
};

newValueToGuess();
runTimer();
makeBubble();
