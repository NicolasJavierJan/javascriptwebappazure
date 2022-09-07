console.log("I am in constletvar.js")

// you cannot change it
const a = 8
// you can reassign
let b = "hej"
// is not allowed, because of scope
var c = null

function testScope() {
  let x = "x hello"
  var z = "hello"

  if (x>z) {
    console.log("inside scope2")
    let a = 4
    var b = 5
    if (b>a) {
      let a1 = 10
      let b1 = 11
    }
  }
}

testScope()
console.log(a)
console.log(b)
