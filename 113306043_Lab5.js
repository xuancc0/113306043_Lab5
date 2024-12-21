document.getElementById('submitBtn').addEventListener('click', function () {
    const mathInput = document.getElementById('mathInput');
    const englishInput = document.getElementById('englishInput');

    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert('Please enter valid numbers for both Math and English.');
        return;
    }

    // Add row to the table
    const tableBody = document.getElementById('gradeTableBody');
    const newRow = document.createElement('tr');
    const rowCount = tableBody.rows.length + 1;

    const averageScore = ((mathScore + englishScore) / 2).toFixed(2);

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${averageScore}</td>
    `;
    tableBody.appendChild(newRow);

    // Update averages
    updateAverages();

    // Clear input fields
    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    const tableBody = document.getElementById('gradeTableBody');
    const rows = tableBody.rows;

    var totalMath = 0;
    var totalEnglish = 0;
    var totalAverage = 0;

    for (var i = 0; i < rows.length; i++) {
        const mathScore = parseFloat(rows[i].cells[1].textContent);
        const englishScore = parseFloat(rows[i].cells[2].textContent);
        const averageScore = parseFloat(rows[i].cells[3].textContent);

        totalMath += mathScore;
        totalEnglish += englishScore;
        totalAverage += averageScore;
    }

    const rowCount = rows.length;

    document.getElementById('mathAverage').textContent = (totalMath / rowCount).toFixed(2);
    document.getElementById('englishAverage').textContent = (totalEnglish / rowCount).toFixed(2);
    document.getElementById('overallAverage').textContent = (totalAverage / rowCount).toFixed(2);
}
