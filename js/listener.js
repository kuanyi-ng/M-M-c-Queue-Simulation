const numCounterInput = document.getElementById('numCounter');
const lambdaInput = document.getElementById('lambda');
const muInput = document.getElementById('mu');
const stepsInput = document.getElementById('steps');
const speedInput = document.getElementById('speed');
const conditionText = document.getElementById('conditionText');
const startButton = document.getElementById('start_btn');
// const resetButton = document.getElementById('reset_btn');

startButton.addEventListener('click', () => {
  let numCounter = parseInt(numCounterInput.value);
  let lambda = parseFloat(lambdaInput.value);
  let mu = parseFloat(muInput.value);

  if ((1 - (lambda/(numCounter*mu))) < 0) {
    console.error("Invalid Paramters");
    conditionText.style.color = "#F00";
  } else {
    conditionText.style.color = "#000";
    let model = createModel({
      numCounter: numCounter,
      lambda: lambda,
      mu: mu
    })

    let speed = parseInt(speedInput.value);
    let steps = parseInt(stepsInput.value);
    simulate(model, steps, speed);
  }
});

// resetButton.addEventListener('click', () => {
//   resetChart(chart);
// });
