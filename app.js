var express               = require("express");
var app = express();


app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

// ============
// ROUTES
// ============

app.get("/", function(req, res){
    res.render("home");
});

// AWS http server start (using nginx to route port 80 -> 3000)
// app.listen(3000, function(){
//     console.log("Sandbox server started.")
// });

// server start for c9 debugging
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sandbox server started.");
});

