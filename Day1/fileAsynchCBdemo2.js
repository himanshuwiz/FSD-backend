const { myReadFileAsync, myWriteFileAsync } = require("./fileAsyncCBdemo1");
function f1() {
  console.log("First");
  f2();
}

function f2() {
  console.log("Second");
}

setTimeout(() => {
  console.log("Timer 0");
}, 0);

f1();

myReadFileAsync();
const data1 = "Hello User Welcoome in FSD class";
myWriteFileAsync(data1);
myReadFileAsync();

console.trace();
