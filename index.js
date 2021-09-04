const express = require("express")
const app = express

app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send("app")
})

app.listen(8000, () => {
  console.log("App listening on port 3000!")
})
