document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


function convert() {
  var valueInput = document.getElementById('valueInput');
  var sourceUnitSelect = document.getElementById('sourceUnitSelect');
  var targetUnitSelect = document.getElementById('targetUnitSelect');
  var result = document.getElementById('result');

  var value = parseFloat(valueInput.value);
  var sourceUnit = sourceUnitSelect.value;
  var targetUnit = targetUnitSelect.value;

  var conversionRates = {
    m: {
      ft: 3.28084,
      in: 39.3701
    },
    ft: {
      m: 0.3048,
      in: 12
    },
    in: {
      m: 0.0254,
      ft: 0.0833333
    }
  };

  var convertedValue = value * conversionRates[sourceUnit][targetUnit];

  result.textContent = value + ' ' + sourceUnit + ' = ' + convertedValue + ' ' + targetUnit;
}
