const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))
app.use("/advancedVersion", express.static("advancedVersion"))
app.use("/advancedVersionSetup", express.static("advancedVersionSetup"))

app.post("/", (req, res) => {})

app.listen(8000, () => {
  console.log("App listening on port 8000!")
})
