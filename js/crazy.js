console.log("I am in crazy.js")

// ; not necessary
const a = 5
console.log(a)
// const cannot be changed
// a = 6 is illegal
let b = 6
console.log(b)
// you can change it to another type!
b = "hello"
console.log(b)
// Dynamic typing

function sum(x, y) {
  return x + y
}

function out(str) {
  console.log(str)
}

out(sum(5, 6))
out(sum(5, "hello"))
out(sum(4>3, "hello"))
out(sum(3>4, "hello"))
out(sum(4, 5.333568))
// Undefined
let c
// NaN
const d = 0/0
// null
let e = null

out(sum(d, c))
out(sum(c, d))


