var input = document.querySelector('#cityName');
var cName = document.querySelector('#name');
var temp = document.querySelector('#temp');
var highest = document.querySelector('#maxTemp');
var lowest = document.querySelector('#lowestTemp');
var humidity = document.querySelector('#humid');

document.getElementById('submitBTN').addEventListener("click", submitClick);

function submitClick(){
    var res = document.getElementsByClassName('result');
    if (!res[0].classList.contains('show'))
        res[0].classList.add('show');
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374').then(
        response => response.json().then(data => {
            cName.textContent = data['name'];
            temp.textContent = data['main']['temp'];
            humidity.textContent = data['main']['humidity'] + "%";
        }).catch(err => alert("error loading api..")));
}