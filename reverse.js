//have the user enter a sentence
var sentence = prompt("Write a sentence for me to reverse!","This is a fabulous sentence")
//create a function that uses this sentence
function reverseString(sentence){
  //split the sentence into an array of individual words
  var words = sentence.split(" ")

  //pull out each word, reverse and recombine
  for ( i = 0; i < words.length; i++){
    //make a new array letters for the word in place i
    var letters = words[i].split("")
    //evaluate if the number of letters is less than or equal 5
    if ( letters.length <= 5) {
      //recombine the letters in the original order and place back into the word at same place i
      words[i] = letters.join("")
    } else {
      //reverse the letters array
      letters = letters.reverse()
      //recombine the letters into a word a the same place i in the words array
      words[i] = letters.join("")
    }
  }
  //now reverse words array
  //words = words.reverse()
  //recombine the words into a new sentence
  var newSentence = words.join(" ")
  //print reversed sentence in an alert
  return alert(newSentence)
  }
reverseString(sentence)
