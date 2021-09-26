let countingQuiz = document.getElementById("counting-quiz")
countingQuiz.addEventListener("click", () => {
  window.location = "/firstGrade/countingQuiz.html"
  countingQuiz.remove()
  localStorage.setItem("i", countingQuiz)
})
