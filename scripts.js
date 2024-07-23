document.getElementById('decToBinLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('decToBinModule').style.display = 'block';
    document.getElementById('binToDecModule').style.display = 'none';
});

document.getElementById('binToDecLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('decToBinModule').style.display = 'none';
    document.getElementById('binToDecModule').style.display = 'block';
});

document.getElementById('decimalInput').addEventListener('input', function(event) {
    const decimalInput = event.target.value;
    if (decimalInput !== '') {
        const binaryOutput = parseInt(decimalInput, 10).toString(2);
        document.getElementById('binaryOutput').textContent = binaryOutput;
    } else {
        document.getElementById('binaryOutput').textContent = '';
    }
});

document.getElementById('binaryInput').addEventListener('input', function(event) {
    const binaryInput = event.target.value;
    if (/^[01]+$/.test(binaryInput)) {
        const decimalOutput = parseInt(binaryInput, 2);
        document.getElementById('decimalOutput').textContent = decimalOutput;
    } else {
        document.getElementById('decimalOutput').textContent = '';
    }
});
