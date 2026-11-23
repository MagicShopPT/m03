// ============================================================================
// EX03 — Loops (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// ============================================================================

const numbersCollection = [12, 45, 7, 89, 23, 89, 4];

// ----------------------------------------------------------------------------
// 1. CONTAR NÚMEROS (ciclo for)
// ----------------------------------------------------------------------------
function countNumbersFor(start, end) {
    const counted = [];
    for (let i = start; i <= end; i++) {
        counted.push(i);
    }
    return counted;
}

// ----------------------------------------------------------------------------
// 2. CALCULAR SOMAS (ciclo for tradicional + versão for...of)
// ----------------------------------------------------------------------------
function sumArrayFor(values) {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}

// ----------------------------------------------------------------------------
// 3. ENCONTRAR MÁXIMO (ciclo for tradicional)
// ----------------------------------------------------------------------------
function findMaxFor(values) {
    if (values.length === 0) {
        return null;
    }
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
        }
    }
    return max;
}

// ----------------------------------------------------------------------------
// 4. PRODUZIR TABELA (ciclo for para tabuada de um número)
// ----------------------------------------------------------------------------
function buildMultiplicationTable(baseNumber, limit = 10) {
    const rows = [];
    for (let multiplier = 1; multiplier <= limit; multiplier++) {
        rows.push({
            expression: `${baseNumber} × ${multiplier}`,
            result: baseNumber * multiplier
        });
    }
    return rows;
}

// ----------------------------------------------------------------------------
// BÓNUS: VERSÕES ALTERNATIVAS COM while E for...of
// ----------------------------------------------------------------------------

// Alternativa com while: contar números de start até end
function countNumbersWhile(start, end) {
    const counted = [];
    let current = start;
    while (current <= end) {
        counted.push(current);
        current++;
    }
    return counted;
}

// Alternativa com for...of: calcular soma de um array
function sumArrayForOf(values) {
    let total = 0;
    for (const value of values) {
        total += value;
    }
    return total;
}

// Alternativa com for...of: encontrar o valor máximo de um array
function findMaxForOf(values) {
    if (values.length === 0) {
        return null;
    }
    let max = values[0];
    for (const value of values) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

// Alternativa com while: acumular somas até atingir um limite alvo
function sumUntilTargetWhile(target) {
    let sum = 0;
    let step = 0;
    while (sum < target) {
        step++;
        sum += step;
    }
    return { sum, stepsUsed: step };
}

// Execução e saída na consola
const count1To10 = countNumbersFor(1, 10);
const totalSum = sumArrayFor(numbersCollection);
const maxValue = findMaxFor(numbersCollection);
const tableOf7 = buildMultiplicationTable(7, 10);

const countWhile1To10 = countNumbersWhile(1, 10);
const totalSumForOf = sumArrayForOf(numbersCollection);
const maxValueForOf = findMaxForOf(numbersCollection);
const targetSumInfo = sumUntilTargetWhile(50);

console.log("=== EX03 — Loops ===");
console.log("Contagem (1 a 10):", count1To10);
console.log("Coleção:", numbersCollection);
console.log("Soma (for):", totalSum, "| Soma (for...of):", totalSumForOf);
console.log("Máximo (for):", maxValue, "| Máximo (for...of):", maxValueForOf);
console.log("Tabuada do 7:", tableOf7);
console.log("Bónus while (contagem 1 a 10):", countWhile1To10);
console.log("Bónus while (soma >= 50):", targetSumInfo);

// Renderização no DOM
const countingOutput = document.getElementById("counting-output");
const sumOutput = document.getElementById("sum-output");
const maxOutput = document.getElementById("max-output");
const tableOutput = document.getElementById("table-output");
const bonusOutput = document.getElementById("bonus-output");

if (countingOutput) {
    countingOutput.innerHTML = `<p>Contagem de 1 a 10 (<code>for</code>): <strong>${count1To10.join(", ")}</strong></p>`;
}

if (sumOutput) {
    sumOutput.innerHTML = `
        <p>Array analisado: <code>[${numbersCollection.join(", ")}]</code></p>
        <p>Soma total: <strong>${totalSum}</strong></p>
    `;
}

if (maxOutput) {
    maxOutput.innerHTML = `<p>Maior número encontrado: <strong>${maxValue}</strong></p>`;
}

if (tableOutput) {
    const tableRowsHtml = tableOf7
        .map((row) => `<tr><td>${row.expression}</td><td>${row.result}</td></tr>`)
        .join("");

    tableOutput.innerHTML = `
        <p>Tabuada do <strong>7</strong> (1 a 10):</p>
        <table border="1" cellpadding="6">
            <thead>
                <tr>
                    <th>Operação</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                ${tableRowsHtml}
            </tbody>
        </table>
    `;
}

if (bonusOutput) {
    bonusOutput.innerHTML = `
        <p><strong>Contagem com <code>while</code> (1 a 10):</strong> ${countWhile1To10.join(", ")}</p>
        <p><strong>Soma com <code>for...of</code>:</strong> ${totalSumForOf}</p>
        <p><strong>Máximo com <code>for...of</code>:</strong> ${maxValueForOf}</p>
        <p><strong>Acumulação com <code>while</code> até atingir pelo menos 50:</strong> soma = <strong>${targetSumInfo.sum}</strong> (em ${targetSumInfo.stepsUsed} passos de 1 a ${targetSumInfo.stepsUsed})</p>
    `;
}