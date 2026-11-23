// ============================================================================
// EX04 — Functions (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// ============================================================================

/**
 * Bónus: Valida se um valor é um número finito válido.
 * @param {*} value
 * @returns {boolean}
 */
function isValidNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}

/**
 * Bónus: Valida um array garantindo que não está vazio e todos os itens são números finitos.
 * @param {*} values
 * @returns {{ valid: boolean, error?: string }}
 */
function validateNumberArray(values) {
    if (!Array.isArray(values) || values.length === 0) {
        return { valid: false, error: "A coleção deve ser um array não vazio." };
    }

    for (const item of values) {
        if (!isValidNumber(item)) {
            return { valid: false, error: `Valor inválido na coleção: "${item}".` };
        }
    }

    return { valid: true };
}

// 1. add
function add(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return { ok: false, error: "add: ambos os argumentos devem ser números válidos." };
    }
    return { ok: true, value: a + b };
}

// 2. subtract
function subtract(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return { ok: false, error: "subtract: ambos os argumentos devem ser números válidos." };
    }
    return { ok: true, value: a - b };
}

// 3. multiply
function multiply(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return { ok: false, error: "multiply: ambos os argumentos devem ser números válidos." };
    }
    return { ok: true, value: a * b };
}

// 4. divide
function divide(a, b) {
    if (!isValidNumber(a) || !isValidNumber(b)) {
        return { ok: false, error: "divide: ambos os argumentos devem ser números válidos." };
    }
    if (b === 0) {
        return { ok: false, error: "divide: não é possível dividir por zero." };
    }
    return { ok: true, value: a / b };
}

// 5. average
function average(values) {
    const check = validateNumberArray(values);
    if (!check.valid) {
        return { ok: false, error: `average: ${check.error}` };
    }

    let sum = 0;
    for (const num of values) {
        sum += num;
    }
    return { ok: true, value: sum / values.length };
}

// 6. max
function max(values) {
    const check = validateNumberArray(values);
    if (!check.valid) {
        return { ok: false, error: `max: ${check.error}` };
    }

    let currentMax = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] > currentMax) {
            currentMax = values[i];
        }
    }
    return { ok: true, value: currentMax };
}

// 7. min
function min(values) {
    const check = validateNumberArray(values);
    if (!check.valid) {
        return { ok: false, error: `min: ${check.error}` };
    }

    let currentMin = values[0];
    for (let i = 1; i < values.length; i++) {
        if (values[i] < currentMin) {
            currentMin = values[i];
        }
    }
    return { ok: true, value: currentMin };
}

// Renderização no DOM
const binaryForm = document.getElementById("binary-form");
const numAInput = document.getElementById("num-a");
const numBInput = document.getElementById("num-b");
const binaryOutput = document.getElementById("binary-output");

const collectionForm = document.getElementById("collection-form");
const numbersInput = document.getElementById("numbers-input");
const collectionOutput = document.getElementById("collection-output");

const validationOutput = document.getElementById("validation-output");

function renderBinaryResults(a, b) {
    if (!binaryOutput) return;

    const rAdd = add(a, b);
    const rSub = subtract(a, b);
    const rMul = multiply(a, b);
    const rDiv = divide(a, b);

    console.log("EX04 — Operações binárias:", { a, b, rAdd, rSub, rMul, rDiv });

    binaryOutput.innerHTML = `
        <ul>
            <li><strong>add(${a}, ${b}):</strong> ${rAdd.ok ? rAdd.value : rAdd.error}</li>
            <li><strong>subtract(${a}, ${b}):</strong> ${rSub.ok ? rSub.value : rSub.error}</li>
            <li><strong>multiply(${a}, ${b}):</strong> ${rMul.ok ? rMul.value : rMul.error}</li>
            <li><strong>divide(${a}, ${b}):</strong> ${rDiv.ok ? rDiv.value : rDiv.error}</li>
        </ul>
    `;
}

function renderCollectionResults(rawText) {
    if (!collectionOutput) return;

    const parts = rawText
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

    const parsedNumbers = parts.map((s) => Number(s));

    const rAvg = average(parsedNumbers);
    const rMax = max(parsedNumbers);
    const rMin = min(parsedNumbers);

    console.log("EX04 — Coleção:", { parsedNumbers, rAvg, rMax, rMin });

    collectionOutput.innerHTML = `
        <p>Coleção interpretada: <code>[${parsedNumbers.join(", ")}]</code></p>
        <ul>
            <li><strong>average:</strong> ${rAvg.ok ? rAvg.value.toFixed(2) : rAvg.error}</li>
            <li><strong>max:</strong> ${rMax.ok ? rMax.value : rMax.error}</li>
            <li><strong>min:</strong> ${rMin.ok ? rMin.value : rMin.error}</li>
        </ul>
    `;
}

function renderValidationTests() {
    if (!validationOutput) return;

    const testDivZero = divide(10, 0);
    const testInvalidType = add("10", 5);
    const testEmptyArray = average([]);

    console.log("EX04 — Testes de validação:", { testDivZero, testInvalidType, testEmptyArray });

    validationOutput.innerHTML = `
        <ul>
            <li>Divisão por zero <code>divide(10, 0)</code>: ${testDivZero.error}</li>
            <li>Tipo inválido <code>add("10", 5)</code>: ${testInvalidType.error}</li>
            <li>Array vazio <code>average([])</code>: ${testEmptyArray.error}</li>
        </ul>
    `;
}

if (binaryForm && numAInput && numBInput) {
    renderBinaryResults(Number(numAInput.value), Number(numBInput.value));
    binaryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderBinaryResults(Number(numAInput.value), Number(numBInput.value));
    });
}

if (collectionForm && numbersInput) {
    renderCollectionResults(numbersInput.value);
    collectionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        renderCollectionResults(numbersInput.value);
    });
}

renderValidationTests();