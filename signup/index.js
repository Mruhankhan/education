let form = document.getElementById("form")
let username = document.getElementById("username")
let password = document.getElementById("password")

let div = document.getElementById("div")
form.addEventListener("submit", e => {
  e.preventDefault()
  const error = []
  if (username.value.length < 8) error.push("Please make the username longer")
  if (username.value.length > 18) error.push("Please make the username shorter")
  if (password.value.length < 8) error.push("Please make password longer")
  if (password.value.length > 18) error.push("Please make the password shorter")
  div.append(error)
})
