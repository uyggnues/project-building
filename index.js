// global Var
const questionLIst = document.querySelector("#questionList")



const fetchData = () => {
    fetch("http://localhost:3000/surveyQuestions")
    .then((response) => response.json())
    .then((data)=> console.log(data))
}



fetchData()