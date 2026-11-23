Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 16/10/2026.

# Módulo 03 — JavaScript e DOM

Este repositório contém a resolução dos exercícios práticos do **Módulo 03 — JavaScript e DOM** da unidade curricular de **Programação WEB** do Instituto Superior Miguel Torga (ISMT).

## Lista de Exercícios Realizados
- [x] **EX01 — Variables** *(Nível L1)*: Armazenamento e apresentação de dados de um estudante utilizando `strings`, `numbers`, `booleans`, `arrays` e `objects`.

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — Variables
* **Objetivo:** Compreender a declaração de variáveis e os diferentes tipos de dados fundamentais em JavaScript, apresentando os valores de forma correta.
* **Decisões tomadas:**
  * Utilização de `const` para valores e referências imutáveis (como nome, número mecanográfico, lista de unidades curriculares e objeto de morada) e `let` para propriedades suscetíveis de alteração ao longo do semestre (como idade, média atual e estado de matrícula), evitando o uso de `var`.
  * Implementação dos 5 tipos de dados exigidos pelo enunciado: `string`, `number`, `boolean`, `array` e `object`.
  * Ligação de um ficheiro JavaScript externo (`script.js`) no final do `<body>` do `index.html`, garantindo que a árvore DOM já está carregada antes da execução do script.
  * Apresentação dupla dos resultados: na **consola do navegador** (`console.log` com verificação de tipos via `typeof`) para depuração e diretamente na **página HTML** através de manipulação do DOM (`document.getElementById` e `innerHTML` com *template literals*).

## Estrutura do Projeto
```text
m03/
├── ex01/
│   ├── index.html
│   ├── script.js
│   └── README.md
└── README.md
```

## Tecnologias Utilizadas
* HTML5
* JavaScript (ES6+) e DOM (*Document Object Model*)

## Como Executar
1. Clonar ou abrir o repositório `m03` no **Visual Studio Code**.
2. Abrir o ficheiro `ex01/index.html` num navegador web (ou através da extensão **Live Server**).
3. Inspecionar a página e abrir as ferramentas de programador (`F12` -> *Console*) para visualizar os registos e tipos de dados.

#### Autor
**Vitor Silva** (N.º **13422**)
* GitHub: [MagicShopPT](https://github.com/MagicShopPT)