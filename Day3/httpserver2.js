const http = require("http");
const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text.html");
  res.statusCode = 200;
  const data = await fetch("https://dummyjson.com/recipes");
  const datajson = await data.json();
  const dataarray = datajson.recipes;
  dataarray.map((recipe) => {
    const data = "<h3 style='color:blue'>" + recipe.name + "<h3>";
    return res.write(data);
  });
  res.end();
});
server.listen(3030, (err) => {
  try {
    if (err) throw err;
  } catch (err) {
    console.log("Server Error", err.message);
  }
});
