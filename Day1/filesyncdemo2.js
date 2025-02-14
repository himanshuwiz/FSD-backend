const {
  myReadFile,
  myWriteFile,
  username,
  myAppendFile,
  myDeletFile,
} = require("./filesyncdemo1.js");

console.log(`Username is ${username}`);
myReadFile();
const data = "Hi how are you bro";
myWriteFile(data);
const data1 = "hi himanshu";
myAppendFile(data1);
myReadFile();
myDeletFile("dummy.txt");
