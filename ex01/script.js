// ============================================================================
// EX01 — Variables (Módulo 03 - JavaScript e DOM)
// Objetivo: Armazenar e apresentar dados de um estudante usando diferentes tipos.
// ============================================================================

// 1. Strings (texto)
const studentName = "Vitor Ângelo Medeiros e Silva";
const courseName = "Licenciatura em Informática";
let currentSemester = "1.º Semestre (2026/2027)";

// 2. Numbers (números)
const studentNumber = 13422
let age = 51;
let averageGrade = 15.6;

// 3. Booleans (valores lógicos true / false)
let isEnrolled = true;
const hasScholarship = false;

// 4. Arrays (listas de valores)
const enrolledSubjects = [
    "Programação WEB",
    "Bases de Dados",
    "Arquitetura de Computadores"
];

// 5. Objects (estrutura com propriedades chave-valor)
const address = {
    street: "Rua das Oliveiras, 45",
    city: "Coimbra",
    postalCode: "3000-000"
};

// Apresentação na consola (útil para depuração e validação rápida)
console.log("=== Dados do Estudante ===");
console.log("Nome:", studentName, "| Tipo:", typeof studentName);
console.log("Nº Mecanográfico:", studentNumber, "| Idade:", age, "| Média:", averageGrade);
console.log("Matriculado:", isEnrolled, "| Bolseiro:", hasScholarship);
console.log("Unidades Curriculares:", enrolledSubjects);
console.log("Morada:", address);

// Apresentação no DOM (página HTML)
const cardContainer = document.getElementById("student-card");

if (cardContainer) {
    cardContainer.innerHTML = `
        <p><strong>Nome:</strong> ${studentName}</p>
        <p><strong>Número mecanográfico:</strong> ${studentNumber}</p>
        <p><strong>Idade:</strong> ${age} anos</p>
        <p><strong>Curso:</strong> ${courseName} — ${currentSemester}</p>
        <p><strong>Média atual:</strong> ${averageGrade}</p>
        <p><strong>Estado de matrícula:</strong> ${isEnrolled ? "Ativa" : "Inativa"}</p>
        <p><strong>Bolsa de estudo:</strong> ${hasScholarship ? "Sim" : "Não"}</p>
        <p><strong>Morada:</strong> ${address.street}, ${address.postalCode} ${address.city}</p>
        <h3>Unidades Curriculares</h3>
        <ul>
            ${enrolledSubjects.map((subject) => `<li>${subject}</li>`).join("")}
        </ul>
    `;
}