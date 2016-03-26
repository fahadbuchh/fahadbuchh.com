var express = require("express")
var app = express();

app.use(express.static("./public"));

app.get("/", function(req,res) {
  res.sendFile(_dirname + "/public/index.html")
})

var PORT = process.env.PORT || 4000
app.listen(PORT)

console.log("App running on", PORT)
