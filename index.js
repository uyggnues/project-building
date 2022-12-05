// global Var
const questionLIst = document.querySelector("#questionList")

const fetchData = () => {
    fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/40041/FF3.json")
    .then(response => response.json())
    .then(questions => console.log(questions))
}

fetchData()