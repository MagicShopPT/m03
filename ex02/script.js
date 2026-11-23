// ============================================================================
// EX02 — Conditions (Módulo 03 - JavaScript e DOM)
// Objetivo: Classificar uma nota através de diferentes intervalos condicionais.
// ============================================================================

const studentInfo = {
    name: "Vitor Ângelo Medeiros e Silva",
    studentNumber: 13422,
    age: 51
};

/**
 * Classifica uma nota numérica na escala de 0 a 20.
 * @param {number} grade
 * @returns {{ valid: boolean, label: string, status: string }}
 */
function classifyGrade(grade) {
    // Validação de tipo e intervalo (0 a 20)
    if (typeof grade !== "number" || Number.isNaN(grade) || grade < 0 || grade > 20) {
        return {
            valid: false,
            label: "Nota inválida. Introduza um valor entre 0 e 20.",
            status: "Inválido"
        };
    }

    if (grade < 9.5) {
        return {
            valid: true,
            label: "Insuficiente",
            status: "Reprovado"
        };
    } else if (grade < 13.5) {
        return {
            valid: true,
            label: "Suficiente",
            status: "Aprovado"
        };
    } else if (grade < 16.5) {
        return {
            valid: true,
            label: "Bom",
            status: "Aprovado"
        };
    } else {
        return {
            valid: true,
            label: "Muito Bom",
            status: "Aprovado"
        };
    }
}

// Exemplos de teste na consola
const sampleGrades = [7.5, 11, 15.2, 18.4, 22];
console.log(`=== Testes de Classificação — ${studentInfo.name} (${studentInfo.studentNumber}) ===`);

for (const sample of sampleGrades) {
    const res = classifyGrade(sample);
    console.log(`Nota ${sample} -> ${res.status} (${res.label})`);
}

// Ligação ao DOM para interação na página
const gradeForm = document.getElementById("grade-form");
const gradeInput = document.getElementById("grade-input");
const gradeResult = document.getElementById("grade-result");

if (gradeForm && gradeInput && gradeResult) {
    gradeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const rawValue = gradeInput.value.trim();
        const numericGrade = Number(rawValue);

        if (rawValue === "") {
            gradeResult.textContent = "Por favor, introduza uma nota.";
            return;
        }

        const outcome = classifyGrade(numericGrade);

        if (!outcome.valid) {
            gradeResult.textContent = outcome.label;
            return;
        }

        gradeResult.textContent = `Nota: ${numericGrade} valores | Classificação: ${outcome.label} | Estado: ${outcome.status}`;
    });
}