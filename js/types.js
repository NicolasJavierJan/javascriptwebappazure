// You don't define an array of types, just define array. You can put anything in the array.
let arr = [1, 2]
console.log(arr)

arr = [1, 5, "hello", 4>3, [1, 2], {"firstName" : "Nico"}, null, NaN, undefined]
console.log(arr)

function showType(e) {
  console.log("Start showing types")
  for (const obj of e) {
    console.log(obj + " is of type " + typeof obj)
  }
}

console.log(showType(arr))

let aa
// push is .add
arr.push(aa)
showType(arr)

