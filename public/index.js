timeOutTopCard(1200)
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "We teach math"
  })
  .then(() => {
    let topCardH1 = document.getElementById("top-card-h1")
    topCardH1.innerText = "skal;sakjpl"
    return timeOutTopCard(1200)
  })
  .catch((e) => {
    console.error(e)
    Promise.reject()
  })

function timeOutTopCard(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
