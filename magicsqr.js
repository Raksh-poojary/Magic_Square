const form = document.querySelector('.magicForm');
const error = document.querySelector('.error');
const tableContainer = document.querySelector('.table-container');
const tableWrap = document.querySelector('.table-wrap');
let input_mat, num_start, num_diff;

function validate() {
    input_mat = parseInt(document.getElementById('input_mat').value);
    num_start = parseInt(document.getElementById('input_range-start').value);
    num_diff = parseInt(document.getElementById('input_range-diff').value);

    if (isNaN(input_mat) || isNaN(num_start) || isNaN(num_diff)) {
        error.textContent = "Please fill all the input blocks";
        return false;
    } else if (input_mat % 2 === 0 || input_mat <= 0) {
        error.textContent = "Please enter a valid odd number greater than 0 in the Matrix Order field";
        return false;
    } else {
        error.textContent = "";
        form.classList.add('hide');
        generate(input_mat, num_start, num_diff);
        return true;
    }
}

function generate(input_mat, num_start, num_diff) {
    const num_end = num_start + (input_mat * num_diff) - 1;
    const numbers = Array.from({ length: input_mat }, () => Array(input_mat).fill(0));
    let a = 0, b = Math.floor(input_mat / 2);
    numbers[a][b] = num_start;

    for (let i = 1; i <= input_mat * input_mat; i++) {
        if (numbers[a - 1] && numbers[a - 1][b + 1] === 0 && a - 1 >= 0 && b + 1 < input_mat) {
            a -= 1;
            b += 1;
            numbers[a][b] = num_start + num_diff * i;
        }
        else if (a === 0 && numbers[input_mat - 1] && numbers[input_mat - 1][b + 1] === 0 && b + 1 < input_mat) {
            a = input_mat - 1;
            b = b + 1;
            numbers[a][b] = num_start + num_diff * i;
        }
        else if (b === input_mat - 1 && numbers[a - 1] && numbers[a - 1][0] === 0 && a - 1 >= 0) {
            a -= 1;
            b = 0;
            numbers[a][b] = num_start + num_diff * i;
        }
        else if (numbers[a + 1] && numbers[a + 1][b] === 0 && a + 1 < input_mat) {
            a += 1;
            numbers[a][b] = num_start + num_diff * i;
        }
    }
    tableWrap.classList.remove("hide");
    tableContainer.classList.remove("hide");
    tableContainer.innerHTML = '';
    tableContainer.appendChild(makeTable(numbers, input_mat));
    tableContainer.dataset.csv = toCsv(numbers, input_mat);
}

function makeTable(matrix) {
    const table = document.createElement('table');

    // create table header using first row length
    const thead = document.createElement('thead');
    // const headRow = document.createElement('tr');

    const cols = matrix[0].length;
    table.appendChild(thead);

    // create body
    const tbody = document.createElement('tbody');
    for (let i = 0; i < matrix.length; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = matrix[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return table;
}

function toCsv(numbers, cols) {
        const rows = [];
        for (let i = 0; i < cols ; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                const idx = i + j;
                row.push(numbers[i][j]);
            }
            rows.push(row.join(','));
        }
        return rows.join('\n');
}


function saveAsCSV(){
            const csv = tableContainer.dataset.csv || '';
            if (!csv) { return; }
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = 'Magic_Square.csv';
            document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function goBack(){
    tableWrap.classList.add("hide");
    form.classList.remove('hide');
}
