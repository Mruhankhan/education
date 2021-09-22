const express = require("express")
const router = express.Router()

router.use("/firstGrade", express.static("firstGrade"))

module.exports = router
