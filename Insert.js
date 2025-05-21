const prompt = require("prompt-sync")();

const fs = require("fs");
var input = prompt("entre the name:");
fs.writeFile("newfile.txt", input, function (err) {
  if (err) throw err;
  console.log("saved!");
});
fs.readFile("newfile.txt", function (err, data) {
  console.log(data.toString()); //convert buffer to string
});
