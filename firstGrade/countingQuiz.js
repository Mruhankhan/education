let form = document.getElementById("form")
let radio = Array.from(document.getElementsByClassName("form-check-input"))
form.addEventListener("submit", e => {
  e.preventDefault()
  const checkedAnswer = radio.filter(answer => answer.checked)
  checkedAnswer.forEach(answer => {
    const isCorrect = answer.value === "correct"
    const notCorrect = answer.value === "wrong"
    const questionItem = answer.closest(".form-check")
    if (isCorrect) {
      questionItem.classList.add("form-li-correct")
      questionItem.classList.remove("form-li-wrong")
    }
    if (notCorrect) {
      questionItem.classList.add("form-li-wrong")
      questionItem.classList.remove("form-li-correct")
    }
  })
  setTimeout(() => {
    window.location = "/firstGrade/firstGrade.html"
  }, 2000)
})
