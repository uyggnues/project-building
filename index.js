
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("questionDisplay")
const darkModeToggle = document.querySelector("#toggle")
// const questionCard = document.querySelector("#questionDisplay")
const answerList = document.getElementById("ansList")
const answerForm = document.querySelector("#ans-form")



// call back
function handleSubmit (e) {
    e.preventDefault()
    // debugger
    const answerLi = document.createElement("li")
    answerLi.innerText = e.target.guess.value
    answerList.appendChild(answerLi)
    // debugger
    const answer = e.target.guess.value
    // console.log(e.target.guess.value)
    // answerList.innerText = answer
    e.target.reset()
}
//     const fetchData = () => {
//         fetch("http://localhost:3000/surveyQuestions")
//         .then(response => response.json())
//         .then(data => data.forEach(handleSubmit))
//     }
// }

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

const handleSUbmit = () => {
    const ansLi = document.createElement("li")
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
    answerForm.addEventListener('submit', handleSubmit)
}



// answerForm.addEventListener('submit', handleSubmit())

 

fetchData()
