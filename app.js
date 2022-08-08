const inputs = document.querySelectorAll('input');
const kelvinInput = document.querySelector('#kelvin');
const celciusInput = document.querySelector('#celcius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const formula1 = document.querySelector('.formula-1');
const formula2 = document.querySelector('.formula-2');
const loader = document.querySelector('.loader');
const card = document.querySelector('.card');

setTimeout(call, 1000);

function call(){
    loader.style.display = 'none';
    card.style.display = 'block';
}

inputs.forEach(function(input){
    input.addEventListener('input', convert);
    function convert(e){
        let inputValue = parseFloat(e.target.value);

        if(e.target.name === 'celcius'){
            kelvinInput.value = (inputValue + 273.15).toFixed(2);
            fahrenheitInput.value = ((inputValue * (9/5))+ 32).toFixed(2);
            formula1.innerHTML = `<i>${inputValue}&deg<b>C</b> + 273.15 = ${kelvinInput.value}<b>K</b></i>`;
            formula2.innerHTML = `<i>(${inputValue}&deg<b>C</b> x 9/5) + 32= ${fahrenheitInput.value}&deg<b>F</b></i>`;
        } else if(e.target.name === 'kelvin'){
            celciusInput.value = (inputValue - 273.15).toFixed(2);
            fahrenheitInput.value = (((inputValue - 273.15) * (9/5)) + 32).toFixed(2);
            formula1.innerHTML = `<i>${inputValue}<b>K</b> - 273.15 = ${celciusInput.value}&deg<b>C</b></i>`
            formula2.innerHTML = `<i>(${inputValue}<b>K</b> - 273.15) x 9/5 + 32 = ${fahrenheitInput.value}&deg<b>F</b></i>`
        } else if(e.target.name === 'fahrenheit'){
            celciusInput.value = ((inputValue - 32) * (5/9)).toFixed(2);
            kelvinInput.value = (((inputValue -32) * (5/9)) + 273.15).toFixed(2);
            formula1.innerHTML = `<i>(${inputValue}&deg<b>F</b> - 32) x 5/9 = ${celciusInput.value}&deg<b>C</b></i>`
            formula2.innerHTML = `<i>(${inputValue}&deg<b>F</b> - 32) x 5/9 + 273.15 = ${kelvinInput.value}<b>K</b></i>`
        }
    }
})
