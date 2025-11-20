// Calculator functionality
function calculateAll() {
    const first = parseInt(document.getElementById('firstNumber').value) || 0;
    const second = parseInt(document.getElementById('secondNumber').value) || 0;

    // Addition
    const addResult = first + second;
    document.getElementById('addResult').textContent = `${first} + ${second} = ${addResult}`;

    // Subtraction
    const subResult = first - second;
    document.getElementById('subResult').textContent = `${first} - ${second} = ${subResult}`;

    // Multiplication
    const multResult = first * second;
    document.getElementById('multResult').textContent = `${first} * ${second} = ${multResult}`;

    // Division
    if (second === 0) {
        document.getElementById('divResult').textContent = `${first} / ${second} = Error: Division by zero`;
        document.getElementById('divResult').className = 'text-danger';
    } else {
        const divResult = first / second;
        document.getElementById('divResult').textContent = `${first} / ${second} = ${divResult}`;
        document.getElementById('divResult').className = '';
    }

    // Add animation
    document.getElementById('results').classList.add('highlight');
    setTimeout(() => {
        document.getElementById('results').classList.remove('highlight');
    }, 1000);
}

function generateRandom() {
    const first = Math.floor(Math.random() * 11);
    const second = Math.floor(Math.random() * 11);
    
    document.getElementById('firstNumber').value = first;
    document.getElementById('secondNumber').value = second;
    
    // Auto-calculate after generating
    calculateAll();
}

// Keyboard support
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateAll();
            }
        });
    });

    // Auto-calculate on page load
    calculateAll();
});

// Add some CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: #d4edda !important;
        transition: background-color 0.5s ease;
    }
    .card {
        margin-bottom: 20px;
    }
    .list-group-item {
        cursor: pointer;
    }
    .list-group-item:hover {
        background-color: #f8f9fa;
    }
`;
document.head.appendChild(style);