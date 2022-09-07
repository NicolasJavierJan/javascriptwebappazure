console.log("im in incdecfonts")

const pbIncrease = document.querySelector(".pbIncrease")
const pbDecrease = document.querySelector(".pbDecrease")
const lineFirst = document.querySelector(".first")
let fontsize = 10

console.log(lineFirst)
console.log("fontsize = " + lineFirst.style.fontSize)
lineFirst.style.fontSize = "30px";
console.log("fontsize = " + lineFirst.style.fontSize)

function increaseFontSize() {
  fontsize++
  lineFirst.style.fontSize = fontsize + "px"
}

pbIncrease.addEventListener("click", increaseFontSize)
// Same but lambda expression
//pbIncrease.addEventListener("click", () => increaseFontSize())

function keyPressed(key){
  console.log(key)
  console.log(key.key)
}

document.addEventListener("keydown", e => keyPressed(e))

