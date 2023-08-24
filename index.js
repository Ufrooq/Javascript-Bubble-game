let circles = "";
for (let i = 0; i <= 120; i++) {
  circles += `<div class="bg-sky-600 w-11 h-11 rounded-full relative hover:bg-sky-700 cursor-pointer">
                    <p class="text-white font-semibold mt-[10px] text-center  ">
                    ${Math.floor(Math.random() * 9)}
                    </p>
                </div>`;
}

document.querySelector("#circle-container").innerHTML = circles;
