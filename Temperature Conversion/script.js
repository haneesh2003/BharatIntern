function convertTemperature() {
    var quantity = parseFloat(document.getElementById("quantity").value);
    if (isNaN(quantity)) {
        document.getElementById("result").innerHTML = "Invalid quantity";
        return;
    }

    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var result = calculateTemperature(quantity, fromUnit, toUnit);

    document.getElementById("result").innerHTML = quantity + " " + fromUnit + " = " + result + " " + toUnit;
}

function calculateTemperature(quantity, fromUnit, toUnit) {
    var result = 0;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (quantity * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = quantity + 273.15;
        } else if (toUnit === "reamur") {
            result = quantity * 0.8;
        } else if (toUnit === "rankine") {
            result = (quantity + 273.15) * 9/5;
        } else {
            result = quantity;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (quantity - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (quantity - 32) * 5/9 + 273.15;
        } else if (toUnit === "reamur") {
            result = (quantity - 32) * 4/9;
        } else if (toUnit === "rankine") {
            result = quantity + 459.67;
        } else {
            result = quantity;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = quantity - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (quantity - 273.15) * 9/5 + 32;
        } else if (toUnit === "reamur") {
            result = (quantity - 273.15) * 0.8;
        } else if (toUnit === "rankine") {
            result = quantity * 9/5;
        } else {
            result = quantity;
        }
    } else if (fromUnit === "reamur") {
        if (toUnit === "celsius") {
            result = quantity * 1.25;
        } else if (toUnit === "fahrenheit") {
            result = (quantity * 2.25) + 32;
        } else if (toUnit === "kelvin") {
            result = (quantity * 1.25) + 273.15;
        } else if (toUnit === "rankine") {
            result = (quantity * 2.25) + 491.67;
        } else {
            result = quantity;
        }
    } else if (fromUnit === "rankine") {
        if (toUnit === "celsius") {
            result = (quantity - 491.67) * 5/9;
        } else if (toUnit === "fahrenheit") {
            result = quantity - 459.67;
        } else if (toUnit === "kelvin") {
            result = quantity * 5/9;
        } else if (toUnit === "reamur") {
            result = (quantity - 491.67) * 4/9;
        } else {
            result = quantity;
        }
    }

    return result.toFixed(2);
}
