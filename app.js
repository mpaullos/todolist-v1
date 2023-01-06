const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Comprar Comida", "Comer Comida", "Cozinhar Comida"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("pt-br", options);
  function captlizeFirstWord(word) {
    var splitAt = word.split(" ");
    for (var i = 0; i < splitAt.length; i++) {
      if ( splitAt[i] != "de") {
        splitAt[i] = splitAt[i].charAt(0).toUpperCase() + splitAt[i].slice(1);
      }
    }
    var finalText = splitAt.join(" ");
    return finalText
  }
  let final = captlizeFirstWord(day)

  res.render("list", { listTitle: final, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log(`Server running on 3000`);
});
