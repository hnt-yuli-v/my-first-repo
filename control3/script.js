document.addEventListener('DOMContentLoaded', function() {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    function displayResult(resultValue) {
        resultOutput.textContent = 'Result: ' + resultValue;
        infoDiv.innerHTML = '';
    }

    function displayError(errorMessage) {
        resultOutput.textContent = 'Error: ' + errorMessage;
        infoDiv.innerHTML = '';
    }

    document.getElementById('add-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) + parseFloat(op2Input.value);
        displayResult(result);
    });

    document.getElementById('sub-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) - parseFloat(op2Input.value);
        displayResult(result);
    });

    document.getElementById('mul-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) * parseFloat(op2Input.value);
        displayResult(result);
    });

    document.getElementById('div-button').addEventListener('click', function() {
        const divisor = parseFloat(op2Input.value);
        if (divisor === 0 || isNaN(divisor)) {
            displayError('Division by zero is undefined');
        } else {
            const result = parseFloat(op1Input.value) / divisor;
            displayResult(result);
        }
    });

    document.getElementById('log-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (operand <= 0 || isNaN(operand)) {
            displayError('Natural logarithm of zero or negative number is undefined');
            return;
        }
        const result = Math.log(operand);
        displayResult(result);
        fetch('log.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching logarithm info:', error));
    });

    document.getElementById('sin-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            displayError('Invalid input');
            return;
        }
        const radians = operand * Math.PI / 180;
        const result = Math.sin(radians);
        displayResult(result);
        fetch('sin.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching sine info:', error));
    });

    document.getElementById('tan-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            displayError('Invalid input');
            return;
        }
        const radians = operand * Math.PI / 180;
        const result = Math.tan(radians);
        displayResult(result);
        fetch('tan.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching tangent info:', error));
    });
});
