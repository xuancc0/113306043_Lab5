document.getElementById('submitBtn').addEventListener('click', function () {
    var mathInput = document.getElementById('mathInput');
    var englishInput = document.getElementById('englishInput');

    var mathScore = parseFloat(mathInput.value);
    var englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert('Please enter valid numbers for both Math and English.');
        return;
    }

    var tableBody = document.getElementById('gradeTableBody');
    var newRow = document.createElement('tr');
    var rowCount = tableBody.rows.length + 1;

    var averageScore = ((mathScore + englishScore) / 2).toFixed(2);

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${averageScore}</td>
    `;
    tableBody.appendChild(newRow);

    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    var tableBody = document.getElementById('gradeTableBody');
    var rows = tableBody.rows;

    var totalMath = 0;
    var totalEnglish = 0;
    var totalAverage = 0;

    for (var i = 0; i < rows.length; i++) {
        var mathScore = parseFloat(rows[i].cells[1].textContent);
        var englishScore = parseFloat(rows[i].cells[2].textContent);
        var averageScore = parseFloat(rows[i].cells[3].textContent);

        totalMath += mathScore;
        totalEnglish += englishScore;
        totalAverage += averageScore;
    }

    var rowCount = rows.length;

    document.getElementById('mathAverage').textContent = (totalMath / rowCount).toFixed(2);
    document.getElementById('englishAverage').textContent = (totalEnglish / rowCount).toFixed(2);
    document.getElementById('overallAverage').textContent = (totalAverage / rowCount).toFixed(2);
}
