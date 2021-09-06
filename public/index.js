let topCardButton = document.getElementById("top-card-button")

topCardButton.addEventListener("click", () => {
  document.location = "/getStarted/index.html"
})

timeOutTopCard(1200)
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "We teach math 1-8"
    return timeOutTopCard(1400)
  })
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "We teach english 1-8"
    return timeOutTopCard(1600)
  })
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "We teach science 1-8"
    return timeOutTopCard(2000)
  })
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "Algebra & Geometry"
    return timeOutTopCard(2200)
  })

  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "Sign Up Now For Free!"
    return timeOutTopCard(2800)
  })
  .catch((e) => {
    console.error(e)
    Promise.reject(e)
  })

function timeOutTopCard(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
