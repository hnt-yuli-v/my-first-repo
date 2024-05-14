document.addEventListener('DOMContentLoaded', function() {
    const op1Input = document.getElementById('op1');
    const op2Input = document.getElementById('op2');
    const resultOutput = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    document.getElementById('add-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) + parseFloat(op2Input.value);
        resultOutput.textContent = 'Result: ' + result;
   
        infoDiv.innerHTML = '';
    });

    document.getElementById('sub-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) - parseFloat(op2Input.value);
        resultOutput.textContent = 'Result: ' + result;
    
        infoDiv.innerHTML = '';
    });

    document.getElementById('mul-button').addEventListener('click', function() {
        const result = parseFloat(op1Input.value) * parseFloat(op2Input.value);
        resultOutput.textContent = 'Result: ' + result;
        // Очистити вміст infoDiv
        infoDiv.innerHTML = '';
    });

    document.getElementById('div-button').addEventListener('click', function() {
        const divisor = parseFloat(op2Input.value);
        if (divisor === 0) {
            resultOutput.textContent = 'Result: Division by zero is undefined';
        } else {
            const result = parseFloat(op1Input.value) / divisor;
            resultOutput.textContent = 'Result: ' + result;
        }

        infoDiv.innerHTML = '';
    });

    document.getElementById('log-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (operand <= 0 || isNaN(operand)) {
            resultOutput.textContent = 'Result: Natural logarithm of zero or negative number is undefined';
        } else {
            const result = Math.log(operand);
            resultOutput.textContent = 'Result: ' + result;
        }
        fetch('log.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching logarithm info:', error));

        infoDiv.innerHTML = '';
    });

    document.getElementById('sin-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            resultOutput.textContent = 'Result: Invalid input';
            return;
        }
        const radians = operand * Math.PI / 180; 
        const result = Math.sin(radians);
        resultOutput.textContent = 'Result: ' + result;
        fetch('sin.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching sine info:', error));
    
        infoDiv.innerHTML = '';
    });

    document.getElementById('tan-button').addEventListener('click', function() {
        const operand = parseFloat(op1Input.value);
        if (isNaN(operand)) {
            resultOutput.textContent = 'Result: Invalid input';
            return;
        }
        const radians = operand * Math.PI / 180; 
        const result = Math.tan(radians);
        resultOutput.textContent = 'Result: ' + result;
        fetch('tan.json')
            .then(response => response.json())
            .then(data => {
                infoDiv.innerHTML = `<h3>${data.name}</h3><p>${data.description}</p><img src="${data.image_name}" alt="${data.name}">`;
            })
            .catch(error => console.error('Error fetching tangent info:', error));

        infoDiv.innerHTML = '';
    });
});
