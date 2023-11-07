import Row from './Row.js'

const outputDiv = document.querySelector('#output');
const inputEl = document.querySelector("input[name='inputTemp']");

const convert = function (toUnit) {
    const divideBy = {
      cms: 10,
      m: 1000,
      km: 1e6,
      mile: 1.609e6,
      yard: 914,
      inch: 25.4,
      foot: 305,
    };
    return function (val) {
      return `${(val / divideBy[toUnit]).toPrecision(4)} ${toUnit}`;
    };
};
  const cms = convert('cms');
  const meters = convert('m');
  const km = convert('km');
  const mile = convert('mile');
  const yard = convert('yard');
  const inch = convert('inch');
  const foot = convert('foot');
  
const renderUI = function (t) {
    outputDiv.innerHTML =
      Row('Centimeters', cms(Number(t))) +
      Row('Meters', meters(Number(t))) +
      Row('Kilometers', km(Number(t))) +
      Row('Mile', mile(Number(t))) +
      Row('Yard', yard(Number(t))) +
      Row('Inch', inch(Number(t))) +
      Row('Foot', foot(Number(t)));
};

inputEl.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  renderUI(this.value);
});

renderUI(inputEl.value);

