function squareNumbers() {
    const num1 = document.getElementById('num1').value;

    fetch(`http://localhost:3000/square?num1=${num1}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('square-result').textContent = 'Result: ' + data.result;
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  function calculate() {
    const num1 = parseFloat(document.getElementById('postNum1').value);
    const num2 = parseFloat(document.getElementById('postNum2').value);
    const operation = document.getElementById('operation').value;

    fetch('http://localhost:3000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num1, num2, operation })
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('postResult').textContent = 'Result: ' + data.result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }