const toggle = document.getElementById("toggleDark");
const darkMode = document.getElementById("darkMode");

toggle.addEventListener{'click', function(){
    this.classList.toggle("bi-moon")
    if(this.classList.toggle("bi-brightness-high-fill")) {
        darkMode.style.background = 'white';
        darkMode.style.color = 'black';
        darkMode.style.transition = '2s';
    }else {
        darkMode.style.background = 'black';
        darkMode.style.color = 'white';
        darkMode.style.transition = '2s';
    }
}}
