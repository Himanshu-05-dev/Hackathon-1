document.getElementById('calculateButton').addEventListener('click', function() {
    // Get input values
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);

    // Validate inputs
    if (isNaN(income) || isNaN(taxRate)) {
        document.getElementById('result').innerText = "Please enter valid income and tax rate.";
        return;
    }

    // Calculate tax
    const tax = (income * taxRate) / 100;

    // Display result
    document.getElementById('result').innerText = `Your tax amount is: ₹${tax.toFixed(2)}`;
});
