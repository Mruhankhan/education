let countingQuiz = document.getElementById("counting-quiz").addEventListener("click", () => {
  window.location = "/firstGrade/countingQuiz.html"
})
let addingQuiz = document.getElementById("adding-quiz").addEventListener("click", () => {
  window.location = "/firstGrade/adding.html"
})

let counting = document.getElementById("counting")

counting.addEventListener("click", () => {
  counting.remove()
})
