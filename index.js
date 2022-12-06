
// global Var
const questionList = document.querySelector("#questionList")

//call back

function displayData (dataObj) {
    const li = document.createElement("li")
    li.innerText = dataObj.question
    li.addEventListener("click", () => console.log ("click"))
    questionList.appendChild(li)

}


const fetchData = () => {
    fetch("http://localhost:3000/surveyQuestions")
    .then((response) => response.json())
    .then(data => data.forEach(displayData))
}



fetchData()
