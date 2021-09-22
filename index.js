const express = require("express")
const app = express()
const mongoose = require("mongoose")
const databaseStorage = require("./models/databaseStorage.js")
mongoose.connect("mongodb://localhost/database", {
  useNewUrlParser: true,
})

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))
app.use("/advancedVersion", express.static("advancedVersion"))
app.use("/advancedVersionSetup", express.static("advancedVersionSetup"))

app.listen(8000, () => {
  console.log("App listening on port 8000!")
})

app.get("/signup", (req, res) => {
  res.render("signup")
})

app.post("/database", async (req, res) => {
  await databaseStorage.create({ name: req.body.name })
})
