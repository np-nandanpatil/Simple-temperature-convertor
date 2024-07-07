function convert() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById("output").innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperature * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperature - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
            result = (temperature + 459.67) * 5 / 9;
        } else {
            result = temperature;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (temperature * 9 / 5) - 459.67;
        } else {
            result = temperature;
        }
    }

    const outputElement = document.getElementById("output");
    outputElement.innerHTML = `${temperature} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} is equal to ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
