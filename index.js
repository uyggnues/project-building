
// global Var
const questionList = document.querySelector("#questionList")

//call back
function displayData () {
    const li = document.createElement("li")
    li.innerText = data.question
    questionList.appendChild(li)
}


const fetchData = () => {
    fetch("http://localhost:3000/surveyQuestions")
    .then((response) => response.json())
    .then(data => data.forEach(displayData))
}



fetchData()
