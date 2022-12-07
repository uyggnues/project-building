
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("question")
const darkModeToggle = document.querySelector("#toggle")
const answerList = document.querySelector("#answers")

//call back

function displayData (dataObj) {
    const li = document.createElement("li")
    li.innerText = dataObj.question
    // li.addEventListener("click", () => console.log ("click"))
    li.addEventListener("click", (() => handleClick(dataObj)))
    makeQuestion(dataObj)
    questionList.appendChild(li)
  

}

const makeQuestion = (dataObj) => {
    // debugger
   qustLi = document.createElement('li')
//    debugger
   dataObj.ans.forEach(displayAns)
}

const displayAns = (ansString) => {
    const ansLi = document.createElement("li")
    ansLi.innerText = ansString

    console.log("disp")
}



const handleClick = (dataObj) => {
    // debugger
    displayQuestion.innerText = dataObj.question

}


const fetchData = () => {
    fetch("http://localhost:3000/surveyQuestions")
    .then((response) => response.json())
    // .then(data => console.log(data))
    .then(data => data.forEach(displayData))
}
 

fetchData()
