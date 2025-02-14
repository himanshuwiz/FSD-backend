const fs = require("node:fs");
function myReadFile() {
  const data = fs.readFileSync("./dummy.txt");
  console.log(data.toString());
}
function myWriteFile(data) {
  //   const data = "Hello how are you";
  fs.writeFileSync("./dummy.txt", data);
}
function myAppendFile(data) {
  fs.appendFileSync("./dummy.txt", data);
}
function myDeletFile(filename) {
  fs.unlinkSync(filename);
}
// myReadFile();
// myWriteFile();
// myReadFile();
module.exports = {
  myReadFile: myReadFile,
  myWriteFile: myWriteFile,
  myAppendFile: myAppendFile,
  myDeletFile: myDeletFile,
  username: "Himanshu",
};
