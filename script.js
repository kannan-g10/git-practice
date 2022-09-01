const markMass = 78;
const markHeight = 1.78;
const johnMass = 97;
const johnHeight = 1.82;

function bmiCalculation(mass, height) {
  const bmi = mass / height ** 2;
  return bmi;
}

const bmiMark = bmiCalculation(markMass, markHeight);
const bmiJohn = bmiCalculation(johnMass, johnHeight);

function higherBmi(bmiMark, bmiJohn) {
  if (bmiMark > bmiJohn) {
    return bmiMark > bmiJohn;
  } else {
    return bmiMark > bmiJohn;
  }
}

console.log(`${higherBmi(bmiMark, bmiJohn)}`); //windows + dot button for emoji😂;
