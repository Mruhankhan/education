const mongoose = require("mongoose")

const signup = new mongoose.Schema({
  name: string,
  username: string,
  password: string,
})
