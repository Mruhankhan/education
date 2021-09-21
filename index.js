require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mongooseUrl = process.env.MONGOOSEURL

mongoose.connect(mongooseUrl)

app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))
app.use("/advancedVersion", express.static("advancedVersion"))
app.use("/advancedVersionSetup", express.static("advancedVersionSetup"))

app.listen(8000, () => {
  console.log("App listening on port 8000!")
})
