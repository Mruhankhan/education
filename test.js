const express = require("express")
const app = express()

app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))
app.use("/advancedVersion", express.static("advancedVersion"))
app.use("/advancedVersionSetup", express.static("advancedVersionSetup"))
app.use("/app", express.static("app"))
app.use("/firstGrade", express.static("firstGrade"))
app.use("/secondGrade", express.static("secondGrade"))
app.listen(8000, () => {
  console.log("App listening on port 8000!")
})

app.get("/signup", (req, res) => {
  res.render("signup")
})
