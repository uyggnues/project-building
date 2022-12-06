// global Var
const questionLIst = document.querySelector("#questionList")



const fetchData = () => {
    fetch("./db.json")
    .then((response) => response.json())
    .then((data)=> console.log(data))
}



fetchData()