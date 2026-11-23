Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 16/10/2026.

# Módulo 03 — JavaScript e DOM

Este repositório contém a resolução dos exercícios práticos do **Módulo 03 — JavaScript e DOM** da unidade curricular de **Programação WEB** do Instituto Superior Miguel Torga (ISMT).

## Lista de Exercícios Realizados

* [x] **EX01 — Variables** *(Nível L1)*: Armazenamento e apresentação de dados de um estudante utilizando `strings`, `numbers`, `booleans`, `arrays` e `objects`.
* [x] **EX02 — Conditions** *(Nível L1)*: Sistema de classificação de notas por intervalos condicionais com validação de entrada e atualização dinâmica do DOM.

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — Variables

* **Objetivo:** Compreender a declaração de variáveis e os diferentes tipos de dados fundamentais em JavaScript, apresentando os valores de forma correta.
* **Decisões tomadas:**
  * Utilização de `const` para valores e referências imutáveis (como nome, número mecanográfico, lista de unidades curriculares e objeto de morada) e `let` para propriedades suscetíveis de alteração ao longo do semestre (como idade, média atual e estado de matrícula), evitando o uso de `var`.
  * Implementação dos 5 tipos de dados exigidos pelo enunciado: `string`, `number`, `boolean`, `array` e `object`.
  * Ligação de um ficheiro JavaScript externo (`script.js`) no final do `<body>` do `index.html`, garantindo que a árvore DOM já está carregada antes da execução do script.
  * Apresentação dupla dos resultados: na **consola do navegador** (`console.log` com verificação de tipos via `typeof`) para depuração e diretamente na **página HTML** através de manipulação do DOM (`document.getElementById` e `innerHTML` com *template literals*).

### EX02 — Conditions

* **Objetivo:** Implementar estruturas condicionais para classificar uma nota numérica em diferentes intervalos de avaliação.
* **Decisões tomadas:**
  * Criação de uma função pura `classifyGrade(grade)` que valida primeiro o tipo e o intervalo permitido (`0` a `20` valores), rejeitando valores inválidos ou `NaN` antes de avaliar os escalões.
  * Organização dos intervalos de classificação em ordem crescente através de `if / else if / else`: `< 9.5` (*Insuficiente — Reprovado*), `< 13.5` (*Suficiente — Aprovado*), `< 16.5` (*Bom — Aprovado*) e até `20` (*Muito Bom — Aprovado*).
  * Utilização de dados reais do estudante (*Vitor Ângelo Medeiros e Silva*, n.º *13422*, *51 anos*) e integração de um formulário HTML com evento `submit` (`event.preventDefault()`) e `textContent` para apresentar o resultado sem recarregar a página.

## Estrutura do Projeto

```text
m03/
├── ex01/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex02/
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
2. Abrir o ficheiro `index.html` da pasta do exercício pretendido (`ex01/` ou `ex02/`) num navegador web ou através da extensão **Live Server**.
3. Abrir as ferramentas de programador (`F12` -> *Console*) para visualizar os testes e registos na consola.

#### Autor

**Vitor Ângelo Medeiros e Silva** (N.º **13422**)

* GitHub: [MagicShopPT](https://github.com/MagicShopPT)