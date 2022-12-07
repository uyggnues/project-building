
// global Var
const questionList = document.querySelector("#questionList")
const displayQuestion = document.getElementById("questionDisplay")
const darkModeToggle = document.querySelector("#toggle")

const answerForm = document.getElementById("answerTextBubble")

// call back
// function handleSubmit (e) {
//     e.preventDefualt()
//     const answer = e.target.answer.value
//     displayAnswer(answer)
//     e.target.reset()
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
1

// answerForm.addEventListener('submit', handleSubmit())

fetchData()
