function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
  }

  function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
  }

  function deleteLastCharacter() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
  }

  function calculateResult() {
    const result = document.getElementById('result');
    try {
      const calculatedResult = eval(result.value);
      result.value = calculatedResult;
    } catch (error) {
      result.value = 'Error';
    }
  }