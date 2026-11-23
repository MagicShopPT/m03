// ============================================================================
// EX06 — String Laboratory (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// ============================================================================

/**
 * Bónus: Normaliza maiúsculas/minúsculas e remove diacríticos (acentos).
 * @param {string} text
 * @param {boolean} removeAccents
 * @returns {string}
 */
function normalizeText(text, removeAccents = true) {
    const lower = String(text).toLowerCase();
    if (!removeAccents) {
        return lower;
    }
    return lower.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// 1. Contar caracteres (com opção de excluir espaços)
function countCharacters(text, excludeSpaces = false) {
    const source = excludeSpaces ? String(text).replace(/\s+/g, "") : String(text);
    return source.length;
}

// 2. Inverter string
function reverseString(text) {
    return Array.from(String(text)).reverse().join("");
}

// 3. Contar palavras
function countWords(text) {
    const trimmed = String(text).trim();
    if (trimmed === "") {
        return 0;
    }
    return trimmed.split(/\s+/).length;
}

// 4. Procurar palavra (com suporte a normalização do bónus)
function findWord(text, word, normalize = true) {
    const cleanWord = String(word).trim();
    if (cleanWord === "") {
        return { found: false, count: 0, reason: "Nenhuma palavra indicada." };
    }

    const targetText = normalize ? normalizeText(text) : String(text);
    const targetWord = normalize ? normalizeText(cleanWord) : cleanWord;

    const words = targetText
        .replace(/[^\p{L}\p{N}\s]+/gu, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    let count = 0;
    for (const w of words) {
        if (w === targetWord) {
            count++;
        }
    }

    return {
        found: count > 0,
        count,
        word: cleanWord
    };
}

// 5. Verificar palíndrome (com normalização opcional de letras, acentos e pontuação)
function isPalindrome(text, normalize = true) {
    const base = normalize ? normalizeText(text) : String(text);
    const cleaned = base.replace(/[^\p{L}\p{N}]+/gu, "");

    if (cleaned.length === 0) {
        return false;
    }

    const reversed = Array.from(cleaned).reverse().join("");
    return cleaned === reversed;
}

// Ligação ao DOM
const stringForm = document.getElementById("string-lab-form");
const textInput = document.getElementById("text-input");
const searchWordInput = document.getElementById("search-word-input");
const normalizeCheckbox = document.getElementById("normalize-checkbox");
const resultsOutput = document.getElementById("results-output");

function runStringLab() {
    if (!textInput || !searchWordInput || !normalizeCheckbox || !resultsOutput) return;

    const text = textInput.value;
    const word = searchWordInput.value;
    const normalize = normalizeCheckbox.checked;

    const totalChars = countCharacters(text, false);
    const charsNoSpaces = countCharacters(text, true);
    const reversed = reverseString(text);
    const wordsCount = countWords(text);
    const searchResult = findWord(text, word, normalize);
    const palindromeResult = isPalindrome(text, normalize);

    const summary = {
        text,
        totalChars,
        charsNoSpaces,
        reversed,
        wordsCount,
        searchResult,
        palindromeResult,
        normalize
    };

    console.log("=== EX06 — String Laboratory ===", summary);

    let searchMessage = "Indique uma palavra para pesquisar.";
    if (word.trim() !== "") {
        searchMessage = searchResult.found
            ? `Encontrada (${searchResult.count} ocorrência(s) de "${searchResult.word}").`
            : `A palavra "${searchResult.word}" não foi encontrada.`;
    }

    resultsOutput.innerHTML = `
        <ul>
            <li><strong>Total de caracteres (com espaços):</strong> ${totalChars}</li>
            <li><strong>Total de caracteres (sem espaços):</strong> ${charsNoSpaces}</li>
            <li><strong>String invertida:</strong> "${reversed}"</li>
            <li><strong>Número de palavras:</strong> ${wordsCount}</li>
            <li><strong>Procurar palavra:</strong> ${searchMessage}</li>
            <li><strong>É palíndrome?:</strong> ${palindromeResult ? "Sim" : "Não"}</li>
        </ul>
    `;
}

if (stringForm) {
    runStringLab();
    stringForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runStringLab();
    });
}