
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("questionDisplay")
const darkModeToggle = document.querySelector("#toggle")
const answerList = document.getElementById("ansList")
const answerForm = document.querySelector("#ans-form")
let jsonData = []



// call back
function handleSubmit(e) {    
    e.preventDefault()
    debugger
    const userGuess = e.target.guess.value
    const answerLi = document.createElement("li")
    const questionEquils = e.target.parentElement.parentElement.querySelector("#questionDisplay").innerText
    const questionObj = jsonData.find(surveyQuestions =>surveyQuestions.question === questionEquils)
    const points = questionObj ? questionObj.ans[userGuess] || 0 : 0 
    answerLi.innerText = userGuess + " - "  + points
    answerList.appendChild(answerLi)
    e.target.reset()
}

function toggleDark () {
    var darkLightMode = document.body;
    darkLightMode.classList.toggle('dark-mode');
}

function displayData (dataObj) {
    const li = document.createElement("li")
    li.innerText = dataObj.question
    // li.addEventListener("click", () => console.log ("click"))    
    li.addEventListener("click", (() => handleClick(dataObj)))
    questionList.appendChild(li)   
    
}

const handleClick = (dataObj) => {
    answerList.innerHTML = ""
        displayQuestion.innerText = dataObj.question
    }

const fetchData = () => {
    fetch("http://localhost:3000/surveyQuestions")
    .then((response) => response.json())
    // .then(data => console.log(data))
    .then((data) => {
        data.forEach(displayData)
    jsonData = data
    })
}

answerForm.addEventListener('submit',handleSubmit)




 

fetchData()


