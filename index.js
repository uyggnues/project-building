
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("question")
const darkModeToggle = document.querySelector("#toggle")

//call back

function displayData (dataObj) {
    const li = document.createElement("li")
    li.innerText = dataObj.question
    // li.addEventListener("click", () => console.log ("click"))
    li.addEventListener("click", (() => handleClick(dataObj)))
    questionList.appendChild(li)
    makeQuestion(dataObj)

}

const makeQuestion = (dataObj) => {
    debugger
   qustLi = document.createElement('li')
   questionList.innetrText = dataObj.ans.forEach(displayQuestions)
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
