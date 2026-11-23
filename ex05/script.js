// ============================================================================
// EX05 — Number Analyzer (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// ============================================================================

/**
 * Analisa um array de números finitos e devolve métricas principais e bónus.
 * @param {number[]} numbers
 */
function analyzeNumbers(numbers) {
    const positives = [];
    const negatives = [];
    const evens = [];
    const odds = [];

    let zerosCount = 0;
    let sum = 0;
    let highest = numbers[0];
    let lowest = numbers[0];

    for (const num of numbers) {
        sum += num;

        if (num > 0) {
            positives.push(num);
        } else if (num < 0) {
            negatives.push(num);
        } else {
            zerosCount++;
        }

        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }

        if (num > highest) {
            highest = num;
        }
        if (num < lowest) {
            lowest = num;
        }
    }

    const totalCount = numbers.length;
    const average = sum / totalCount;
    const range = highest - lowest;
    const positivePercentage = (positives.length / totalCount) * 100;
    const evenPercentage = (evens.length / totalCount) * 100;

    return {
        totalCount,
        positives,
        negatives,
        evens,
        odds,
        highest,
        lowest,
        average,
        bonus: {
            zerosCount,
            sum,
            range,
            positivePercentage,
            evenPercentage
        }
    };
}

/**
 * Converte uma string separada por vírgulas num array de números válidos.
 * @param {string} rawInput
 * @returns {{ ok: boolean, data?: number[], error?: string }}
 */
function parseNumbersInput(rawInput) {
    const parts = rawInput
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

    if (parts.length === 0) {
        return { ok: false, error: "Introduza pelo menos um número válido." };
    }

    const parsed = [];
    for (const part of parts) {
        const value = Number(part);
        if (!Number.isFinite(value)) {
            return { ok: false, error: `Valor inválido detetado: "${part}".` };
        }
        parsed.push(value);
    }

    return { ok: true, data: parsed };
}

// Elementos do DOM
const analyzerForm = document.getElementById("analyzer-form");
const numbersInput = document.getElementById("numbers-list");
const errorMessage = document.getElementById("error-message");
const mainStatsOutput = document.getElementById("main-stats-output");
const bonusStatsOutput = document.getElementById("bonus-stats-output");

function runAnalysis(rawText) {
    if (!mainStatsOutput || !bonusStatsOutput || !errorMessage) return;

    const parsedResult = parseNumbersInput(rawText);
    if (!parsedResult.ok) {
        errorMessage.textContent = parsedResult.error;
        mainStatsOutput.innerHTML = "";
        bonusStatsOutput.innerHTML = "";
        return;
    }

    errorMessage.textContent = "";
    const analysis = analyzeNumbers(parsedResult.data);

    console.log("=== EX05 — Number Analyzer ===");
    console.log("Coleção:", parsedResult.data);
    console.log("Análise completa:", analysis);

    mainStatsOutput.innerHTML = `
        <p>Coleção analisada (${analysis.totalCount} números): <code>[${parsedResult.data.join(", ")}]</code></p>
        <ul>
            <li><strong>Positivos (${analysis.positives.length}):</strong> ${analysis.positives.length ? analysis.positives.join(", ") : "Nenhum"}</li>
            <li><strong>Negativos (${analysis.negatives.length}):</strong> ${analysis.negatives.length ? analysis.negatives.join(", ") : "Nenhum"}</li>
            <li><strong>Pares (${analysis.evens.length}):</strong> ${analysis.evens.length ? analysis.evens.join(", ") : "Nenhum"}</li>
            <li><strong>Ímpares (${analysis.odds.length}):</strong> ${analysis.odds.length ? analysis.odds.join(", ") : "Nenhum"}</li>
            <li><strong>Maior:</strong> ${analysis.highest}</li>
            <li><strong>Menor:</strong> ${analysis.lowest}</li>
            <li><strong>Média:</strong> ${analysis.average.toFixed(2)}</li>
        </ul>
    `;

    bonusStatsOutput.innerHTML = `
        <ul>
            <li><strong>Quantidade de zeros:</strong> ${analysis.bonus.zerosCount}</li>
            <li><strong>Soma total:</strong> ${analysis.bonus.sum}</li>
            <li><strong>Amplitude (maior − menor):</strong> ${analysis.bonus.range}</li>
            <li><strong>Percentagem de positivos:</strong> ${analysis.bonus.positivePercentage.toFixed(1)}%</li>
            <li><strong>Percentagem de pares:</strong> ${analysis.bonus.evenPercentage.toFixed(1)}%</li>
        </ul>
    `;
}

if (analyzerForm && numbersInput) {
    runAnalysis(numbersInput.value);

    analyzerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runAnalysis(numbersInput.value);
    });
}