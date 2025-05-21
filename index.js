console.log("Hello World");
console.log("abhsihek");
const fs = require("fs");
fs.writeFile("file.txt", "Hello world", function (err) {
  if (err) throw err;
  console.log("saved!");
});
fs.readFile("file.txt", function (err, data) {
  console.log(data.toString()); //convert buffer to string
});
