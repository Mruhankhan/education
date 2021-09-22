let form = document.getElementById("form")
let username = document.getElementById("username")
let password = document.getElementById("password")
let passwordWord = document.getElementById("password-word")
let div = document.getElementById("div")
let passwordChecker = document.getElementById("password-checker")
form.addEventListener("submit", e => {
  const error = []
  if (username.value.length < 8) {
    error.push("Please make the username longer")
    e.preventDefault()
  }
  if (username.value.length > 18) {
    error.push("Please make the username shorter")
    e.preventDefault()
  }
  if (password.value.length < 8) {
    error.push("Please make password longer")
    e.preventDefault()
  }
  if (password.value.length > 18) {
    error.push("Please make the password shorter")
    e.preventDefault()
  }
  div.append(error)
})
