console.log("im in setbackgroundcolor.js")

const inpColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")

const body = document.querySelector("body")

function changeBodyColor() {
  let col = inpColor.value;
  console.log(col)
  body.style.backgroundColor = col;
}

pbSetColor.addEventListener("click", changeBodyColor)
