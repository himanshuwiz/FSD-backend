const fspromises = require("fs/promises");
const data = "my WT classes";
const pr = fspromises.writeFile("./dummy.txt", data);
pr.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log("file writing error", err.message);
});
