let checkButton= document.querySelector("button");
let input= document.querySelector("input");
checkButton.addEventListener("click", (e)=> {
  let inputText = input.value;
  let i = 0;
  for(let letter of inputText) {
    if(letter === "a" || letter === "e" 
       || letter === "i" || letter === "o" 
       || letter === "u" || letter === "A" 
       || letter === "E" || letter === "I" 
       || letter === "O" || letter === "U") {
      i++ ;
    }
  }
  alert(`Vowel Count is ${i}`)
})
