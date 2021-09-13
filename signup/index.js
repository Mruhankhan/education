let form = document.getElementById("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let passwordWord = document.getElementById("password-word")
let div = document.getElementById("div")
form.addEventListener("submit", e => {
  e.preventDefault()
  const error = []
  if (username.value.length < 8) error.push("Please make the username longer")
  if (username.value.length > 18) error.push("Please make the username shorter")
  if (password.value.length < 8) error.push("Please make password longer")
  if (password.value.length > 18) error.push("Please make the password shorter")
  if (username.value.length.match(/[A-Z]+/)) passwordWord.innerText = "sass"
  div.append(error)
})
