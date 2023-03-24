var express = require('express');
var router = express.Router();
const fs = require("fs");
const cryptoJS = require("crypto-js");

/* GET users listing. */
router.get('/', function(request, response, next) {
/*   fs.readFile("users.json", function(error, data) {
    if(error) {
      console.log(error);
    }
    const users = JSON.parse(data);
    response.send(users);
    return; 
  });*/
  response.send('users routern ');
  const password = "lösenordet";
  console.log(password);

  let encryptedPassword = cryptoJS.AES.encrypt(password, "sefjkh").toString();
  console.log(encryptedPassword);

  let originalPassword = cryptoJS.AES.decrypt(encryptedPassword, "sefjkh").toString(cryptoJS.enc.Utf8);
  console.log(originalPassword);
});

router.get("/addNewUser", function(request, response, next) {
  fs.readFile("users.json", function(error, data) {
    if(error) {
      console.log(error);
      if(error.code == "ENOENT") {
        console.log("filen finns inte");
      }
      response.send("404 sidan hittas inte");
    }
    const users = JSON.parse(data);
    let newUser = {"username": "Elin", "email": "elin@mail.com,"};
    users.push(newUser);
    fs.writeFile("users.json", JSON.stringify(users, null, 2), function(error) {
      if(error) {
        console.log(error);
      }
    });
    response.send(users);
    return;
  });
});

module.exports = router;
