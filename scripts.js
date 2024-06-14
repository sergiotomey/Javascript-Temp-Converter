let celsiusInput = document.querySelector('.celsius > input')
let farenheitInput = document.querySelector('.farenheit > input')
let kelvinInput = document.querySelector('.kelvin > input')

function roundNum(num){
    return Math.round(num*100)/100
}

function celsiusToFAndK(){
    cTemp = parseFloat(celsiusInput.value);
    fTemp = (cTemp * 9/5) + 32;
    kTemp = (cTemp + 273.15);
    farenheitInput.value = roundNum(fTemp)
    kelvinInput.value = roundNum(kTemp)
}

function farenheitToCAndK(){
    fTemp = parseFloat(farenheitInput.value);
    cTemp = (fTemp - 32) * 5/9;
    kTemp = (fTemp + 459.67) * 5/9;
    celsiusInput.value = roundNum(cTemp)
    kelvinInput.value = roundNum(kTemp)
}

function kelvinToFAndC(){
    kTemp = parseFloat(kelvinInput.value);
    fTemp = 9/5 * (kTemp-273) + 32;
    cTemp = (kTemp - 273.15);
    farenheitInput.value = roundNum(fTemp)
    celsiusInput.value = roundNum(kTemp)
}

function main(){
    celsiusInput.addEventListener('input', celsiusToFAndK)
    kelvinInput.addEventListener('input', kelvinToFAndC)
    farenheitInput.addEventListener('input',farenheitToCAndK)
}

main()