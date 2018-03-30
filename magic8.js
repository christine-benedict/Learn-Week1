var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "Ask: what would an Australian do, then do the opposite", "Outlook looks bleak"]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var question = prompt("Ask the magic 8 ball.")

while (question.toLowerCase() != "stop"){
  alert(answers[getRandomIntInclusive(0,answers.length)])
  var question = prompt("Ask again.")
}

while (question.toLowerCase() == "stop"){
  alert("Thanks for playing!")
  break
}
