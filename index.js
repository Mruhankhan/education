const express = require("express")
const app = express()

app.use(express.static("public"))
app.use("/getStarted", express.static("getStarted"))
app.use("/signup", express.static("signup"))
app.use("/paypal-payments-setup", express.static("paypal-payments-setup"))

app.listen(8000, () => {
  console.log("App listening on port 8000!")
})
