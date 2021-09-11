const express = require("express")
const app = express()

app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))

app.listen(8000, () => {
  console.log("App listening on port 8000!")
})
