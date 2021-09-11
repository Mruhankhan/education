let form = document.getElementById("form")
let button = document.getElementById("button")
let username = document.getElementById("username")
let div = document.getElementById("div")
form.addEventListener("click", (e) => {
  e.preventDefault()
  if (username.value.length < 8) {
    setTimeout(() => {
      let h1 = document.createElement("h1")
      h1.innerHTML = "Please Make Your Username Bigger"
      div.append(h1)
    }, 1000)
  }
})
