function changeText() {
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
    var number1 = getRandomNumberBetween(0, 100); // Change the range as needed
    var number2 = getRandomNumberBetween(0, 100); // Change the range as needed
    var sum = number1 + number2;

    console.log("Number 1:", number1);
    console.log("Number 2:", number2);
    console.log("Sum:", sum);

    document.getElementById("heading").innerHTML = `Sum: ${sum}`;
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}