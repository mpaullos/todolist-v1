const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
   switch (currentDay) {
    case 0:
        day = "Domingo"
        break;
    case 1:
        day = "Segunda"
        break;
    case 2:
        day = "Terça"
        break;
    case 3:
        day = "Quarta"
        break;
    case 4:
        day = "Quinta"
        break;
    case 5:
        day = "Sexta"
        break;
    case 6:
        day = "Sábado"
        break;
    
   
    default:
       console.log("CurrentDay is equal to: " + currentDay)
   }
    
    res.render("list", {kindOfDay: day});
   
})


app.listen(3000, function() {
    console.log(`Server running on 3000`);
})