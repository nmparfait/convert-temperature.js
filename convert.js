//Celsius = (Fahr-32)*5/9
//Fahrenheit = Celcius *9/5 +32

function convertToFahrenheit(temp){
    let fahr = temp *9/5 +32;
    console.log(`${temp} degrees in C is ${fahr} degrees in F`);
}

convertToFahrenheit(30);