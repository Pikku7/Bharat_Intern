function convert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var result = "";

    if (!isNaN(temperature)) {
        var celsius = (temperature - 32) * 5/9;
        var fahrenheit = (temperature * 9/5) + 32;
        result = temperature + " Fahrenheit = " + celsius.toFixed(2) + " Celsius";
    } else {
        result = "Please enter a valid temperature.";
    }

    document.getElementById("result").innerHTML = result;
}