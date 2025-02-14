const http = reuire("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  const data = fetch("https://dummyjson.com/recipes");
  const datajson = data.json;
});
server.listen(3001, (err) => {
  try {
    if (err) throw err;
  } catch (err) {
    console.log("Server Error", err.message);
  }
});
