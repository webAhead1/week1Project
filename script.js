var input = document.querySelector('#cityName');
var output = document.getElementsByClassName('output');
var inputs = document.getElementsByClassName('inputs');
var cName = document.querySelector('#name');
var temp = document.querySelector('#temp');
var highest = document.querySelector('#maxTemp');
var lowest = document.querySelector('#lowestTemp');
var humidity = document.querySelector('#humid');
var overall = document.querySelector('#overall');

document.getElementById('submitBTN').addEventListener("click", submitClick);
document.getElementById('backArrow').addEventListener("click", goBack);



function submitClick(){
    if (input.value == ''){
        alert("You need to enter a city name before submitting...");
        return;
    }
    if (!output[0].classList.contains('show'))
        output[0].classList.add('show');
    inputs[0].classList.add('hide');
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374').then(
        response => response.json().then(data => {
            cName.textContent = data['name'];
            temp.textContent = data['main']['temp'];
            highest.textContent = data['main']['temp_max'];
            lowest.textContent = data['main']['temp_min'];
            humidity.textContent = data['main']['humidity'] + "%";
            overall.textContent = data['weather'][0]['description'];
        }).catch(err => alert("error loading api..")));
}

function goBack(){
    if (output[0].classList.contains('show'))
        output[0].classList.remove('show');
    inputs[0].classList.remove('hide');
    input.value = "";
}