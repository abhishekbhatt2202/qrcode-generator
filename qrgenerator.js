const prompt = require("prompt-sync")();
const QRCode = require("qrcode");

var input = prompt("Enter the link for qr code: "); // input link

QRCode.toFile(
  "qrcode.png", //file name
  input, //input
  {
    color: {
      dark: "#000",
      light: "#FFF",
    },
  },
  function (err) {
    if (err) {
      console.error("Error!");
    } else {
      console.log("QR code successfully saved!");
    }
  }
);
