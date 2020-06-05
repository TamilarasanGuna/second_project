const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");


addButton.onclick = (evt) =>
{   
    var a = parseInt(input_1.value);
    var b = parseInt(input_2.value);
    var add = a + b;
    document.getElementById("output").innerHTML = add;
}

subtractButton.onclick = (evt) =>
{   
    var a = parseInt(input_1.value);
    var b = parseInt(input_2.value);
    var add = a - b;
    document.getElementById("output").innerHTML = add;
}

multiplyButton.onclick = (evt) =>
{   
    var a = parseInt(input_1.value);
    var b = parseInt(input_2.value);
    var add = a * b;
    document.getElementById("output").innerHTML = add;
}

divideButton.onclick = (evt) =>
{   
    var a = parseInt(input_1.value);
    var b = parseInt(input_2.value);
    var add = Math.floor(a / b);
    document.getElementById("output").innerHTML = add;
}