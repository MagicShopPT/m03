// ============================================================================
// EX09 — Dynamic Table (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// Restrição: Não escrever linhas HTML manualmente; criar via DOM.
// ============================================================================

let records = [
    { id: 1, name: "Vitor Ângelo Medeiros e Silva", role: "Programação WEB", score: 17.5 },
    { id: 2, name: "Mariana Ferreira", role: "Bases de Dados", score: 15.0 },
    { id: 3, name: "Tiago Almeida", role: "Engenharia de Software", score: 14.5 }
];

let nextId = 4;
let editingId = null;

// Elementos do DOM
const recordForm = document.getElementById("record-form");
const formTitle = document.getElementById("form-title");
const nameInput = document.getElementById("name-input");
const roleInput = document.getElementById("role-input");
const scoreInput = document.getElementById("score-input");
const submitBtn = document.getElementById("submit-btn");
const cancelEditBtn = document.getElementById("cancel-edit-btn");
const formFeedback = document.getElementById("form-feedback");
const rowCounter = document.getElementById("row-counter");
const tableContainer = document.getElementById("table-container");

function resetFormMode() {
    editingId = null;
    formTitle.textContent = "Adicionar Registo";
    submitBtn.textContent = "Adicionar Linha";
    cancelEditBtn.hidden = true;
    recordForm.reset();
}

function startEditing(record) {
    editingId = record.id;
    formTitle.textContent = `Atualizar Registo #${record.id}`;
    submitBtn.textContent = "Guardar Alterações";
    cancelEditBtn.hidden = false;

    nameInput.value = record.name;
    roleInput.value = record.role;
    scoreInput.value = String(record.score);
    formFeedback.textContent = "";
    nameInput.focus();
}

function removeRecord(id) {
    records = records.filter((item) => item.id !== id);
    if (editingId === id) {
        resetFormMode();
    }
    console.log("EX09 — Linha removida. ID:", id, "| Estado atual:", records);
    renderTable();
}

/**
 * Constrói toda a tabela dinamicamente usando métodos do DOM (createElement, appendChild).
 */
function renderTable() {
    if (!tableContainer || !rowCounter) return;

    // Limpa o contentor antes de recriar
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    rowCounter.textContent = `Total de linhas: ${records.length}`;

    if (records.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.textContent = "Não existem registos na tabela. Utilize o formulário acima para adicionar.";
        tableContainer.appendChild(emptyMsg);
        return;
    }

    const table = document.createElement("table");
    table.border = "1";
    table.cellPadding = "6";

    // Cabeçalho (thead)
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["ID", "Nome", "Função / UC", "Classificação", "Ações"];

    for (const label of headers) {
        const th = document.createElement("th");
        th.textContent = label;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Corpo (tbody) a partir do array de objetos
    const tbody = document.createElement("tbody");

    for (const record of records) {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = String(record.id);

        const tdName = document.createElement("td");
        tdName.textContent = record.name;

        const tdRole = document.createElement("td");
        tdRole.textContent = record.role;

        const tdScore = document.createElement("td");
        tdScore.textContent = Number(record.score).toFixed(1);

        const tdActions = document.createElement("td");

        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.textContent = "Editar";
        editBtn.addEventListener("click", () => startEditing(record));

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Remover";
        deleteBtn.style.marginLeft = "6px";
        deleteBtn.addEventListener("click", () => removeRecord(record.id));

        tdActions.appendChild(editBtn);
        tdActions.appendChild(deleteBtn);

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdRole);
        tr.appendChild(tdScore);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

if (recordForm && nameInput && roleInput && scoreInput && cancelEditBtn) {
    renderTable();

    recordForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const role = roleInput.value.trim();
        const score = Number(scoreInput.value);

        if (!name || !role || !Number.isFinite(score) || score < 0 || score > 20) {
            formFeedback.textContent = "Preencha todos os campos corretamente (nota entre 0 e 20).";
            return;
        }

        formFeedback.textContent = "";

        if (editingId !== null) {
            records = records.map((item) =>
                item.id === editingId ? { ...item, name, role, score } : item
            );
            console.log("EX09 — Registo atualizado:", { id: editingId, name, role, score });
            resetFormMode();
        } else {
            const newRecord = { id: nextId++, name, role, score };
            records.push(newRecord);
            console.log("EX09 — Novo registo adicionado:", newRecord);
            recordForm.reset();
        }

        renderTable();
    });

    cancelEditBtn.addEventListener("click", () => {
        formFeedback.textContent = "";
        resetFormMode();
    });
}