function calculateBMI() {
  let heightCm = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(heightCm) || isNaN(weight)) {
    alert("Please enter both height and weight");
    return;
  }

  let height = heightCm / 100;
  let bmi = weight / (height * height);

  document.getElementById("bmiResult").value = bmi.toFixed(2);
}
