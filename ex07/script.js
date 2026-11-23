// ============================================================================
// EX07 — Array Toolkit (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// Restrição: Não utilizar diretamente .map(), .filter(), .find(),
// .reduce(), .includes() ou .reverse().
// ============================================================================

/**
 * 1. Equivalente a Array.prototype.map
 * Cria um novo array aplicando callback(elemento, indice, array) a cada item.
 */
function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[result.length] = callback(array[i], i, array);
    }
    return result;
}

/**
 * 2. Equivalente a Array.prototype.filter
 * Cria um novo array apenas com os elementos que satisfazem callback(elemento, indice, array).
 */
function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result[result.length] = array[i];
        }
    }
    return result;
}

/**
 * 3. Equivalente a Array.prototype.find
 * Devolve o primeiro elemento que satisfaz callback(elemento, indice, array), ou undefined.
 */
function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

/**
 * 4. Equivalente a Array.prototype.reduce
 * Acumula um valor ao longo do array usando callback(acumulador, elemento, indice, array).
 */
function myReduce(array, callback, initialValue) {
    let hasInitial = arguments.length >= 3 && initialValue !== undefined;
    let accumulator = hasInitial ? initialValue : array[0];
    let startIndex = hasInitial ? 0 : 1;

    if (!hasInitial && array.length === 0) {
        return undefined;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

/**
 * 5. Equivalente a Array.prototype.includes
 * Verifica se searchElement existe no array (com suporte a NaN e fromIndex).
 */
function myIncludes(array, searchElement, fromIndex = 0) {
    let start = fromIndex;
    if (start < 0) {
        start = array.length + start;
        if (start < 0) {
            start = 0;
        }
    }

    for (let i = start; i < array.length; i++) {
        const current = array[i];
        const bothNaN = Number.isNaN(current) && Number.isNaN(searchElement);
        if (current === searchElement || bothNaN) {
            return true;
        }
    }
    return false;
}

/**
 * 6. Equivalente a Array.prototype.reverse
 * Devolve um novo array com os elementos por ordem inversa sem mutar o original.
 */
function myReverse(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed[reversed.length] = array[i];
    }
    return reversed;
}

// Ligação ao DOM e testes
const toolkitForm = document.getElementById("toolkit-form");
const arrayInput = document.getElementById("array-input");
const targetInput = document.getElementById("target-input");
const toolkitError = document.getElementById("toolkit-error");
const toolkitOutput = document.getElementById("toolkit-output");

function parseNumberList(rawText) {
    const tokens = rawText
        .split(",")
        .map((part) => part.trim())
        .filter((part) => part.length > 0);

    if (tokens.length === 0) {
        return { ok: false, error: "Introduza pelo menos um número." };
    }

    const nums = [];
    for (let i = 0; i < tokens.length; i++) {
        const n = Number(tokens[i]);
        if (!Number.isFinite(n)) {
            return { ok: false, error: `Valor inválido: "${tokens[i]}".` };
        }
        nums[nums.length] = n;
    }
    return { ok: true, values: nums };
}

function runToolkit() {
    if (!arrayInput || !targetInput || !toolkitError || !toolkitOutput) return;

    const parsed = parseNumberList(arrayInput.value);
    const targetValue = Number(targetInput.value);

    if (!parsed.ok) {
        toolkitError.textContent = parsed.error;
        toolkitOutput.innerHTML = "";
        return;
    }

    if (!Number.isFinite(targetValue)) {
        toolkitError.textContent = "Introduza um número válido para o valor de pesquisa.";
        toolkitOutput.innerHTML = "";
        return;
    }

    toolkitError.textContent = "";
    const original = parsed.values;

    // 1. myMap: multiplicar cada elemento por 2
    const doubled = myMap(original, (n) => n * 2);

    // 2. myFilter: manter apenas números pares
    const evens = myFilter(original, (n) => n % 2 === 0);

    // 3. myFind: primeiro número estritamente maior que targetValue
    const firstGreater = myFind(original, (n) => n > targetValue);

    // 4. myReduce: soma de todos os elementos (com valor inicial 0)
    const totalSum = myReduce(original, (acc, n) => acc + n, 0);

    // 5. myIncludes: verificar se targetValue está presente
    const hasTarget = myIncludes(original, targetValue);

    // 6. myReverse: array invertido (sem alterar o original)
    const reversedCopy = myReverse(original);

    const report = {
        original,
        doubled,
        evens,
        firstGreater,
        totalSum,
        hasTarget,
        reversedCopy
    };

    console.log("=== EX07 — Array Toolkit ===", report);

    toolkitOutput.innerHTML = `
        <p><strong>Array original:</strong> <code>[${original.join(", ")}]</code></p>
        <ul>
            <li><strong>myMap</strong> (× 2): <code>[${doubled.join(", ")}]</code></li>
            <li><strong>myFilter</strong> (pares): <code>[${evens.length ? evens.join(", ") : "nenhum"}]</code></li>
            <li><strong>myFind</strong> (primeiro &gt; ${targetValue}): <code>${firstGreater !== undefined ? firstGreater : "undefined"}</code></li>
            <li><strong>myReduce</strong> (soma): <code>${totalSum}</code></li>
            <li><strong>myIncludes</strong> (contém ${targetValue}?): <code>${hasTarget}</code></li>
            <li><strong>myReverse</strong> (ordem inversa): <code>[${reversedCopy.join(", ")}]</code></li>
        </ul>
    `;
}

if (toolkitForm) {
    runToolkit();
    toolkitForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runToolkit();
    });
}