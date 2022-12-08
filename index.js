
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("questionDisplay")
const answerList = document.getElementById("ansList")
const answerForm = document.querySelector("#ans-form")
let darkMode = document.getElementById("background")
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

// function selectBackgroundColor () {
const select = document.querySelector(".select")
    select.addEventListener("change", () => {
        document.body.classList.toggle('dark')
    })
    // // const stylesheet = document.createElement('style')
    // if ( select.innerText === 'Dark') {
    //     darkMode = `
    //     background-color: #662c2c;
    //     color: #444444
    //     `
    // } else {
    //     darkMode = `
    //     background-color: #fafbfb;
    //     color: black;
    //     `
    // }
    

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


