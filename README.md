Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 16/10/2026.

# Módulo 03 — JavaScript e DOM

Este repositório contém a resolução completa dos 10 exercícios práticos do **Módulo 03 — JavaScript e DOM** da unidade curricular de **Programação WEB** do Instituto Superior Miguel Torga (ISMT).

## Lista de Exercícios Realizados

* [x] **EX01 — Variables** *(Nível L1)*: Armazenamento e apresentação de dados de um estudante utilizando `strings`, `numbers`, `booleans`, `arrays` e `objects`.
* [x] **EX02 — Conditions** *(Nível L1)*: Sistema de classificação de notas por intervalos condicionais com validação de entrada e atualização dinâmica do DOM.
* [x] **EX03 — Loops** *(Nível L1)*: Programas de contagem, cálculo de somas, pesquisa de máximos e geração de tabelas utilizando ciclos adequados (`for`, `while` e `for...of`).
* [x] **EX04 — Functions** *(Nível L2)*: Biblioteca de funções matemáticas (`add`, `subtract`, `multiply`, `divide`, `average`, `max`, `min`) com validação de argumentos.
* [x] **EX05 — Number Analyzer** *(Nível L2)*: Análise estatística de coleções numéricas (positivos, negativos, pares, ímpares, maior, menor, média e métricas adicionais).
* [x] **EX06 — String Laboratory** *(Nível L2)*: Conjunto de funções para análise de strings (contar caracteres, inverter, contar palavras, procurar palavra e verificar palíndrome) com normalização de maiúsculas/minúsculas e acentos.
* [x] **EX07 — Array Toolkit** *(Nível L2)*: Implementação manual de funções de manipulação de arrays equivalentes a `map`, `filter`, `find`, `reduce`, `includes` e `reverse` sem recorrer aos métodos nativos correspondentes.
* [x] **EX08 — Product Objects** *(Nível L2)*: Coleção de objetos de produtos (`name`, `price`, `category`, `available`) com funcionalidades interativas de pesquisa, filtragem e ordenação no DOM.
* [x] **EX09 — Dynamic Table** *(Nível L3)*: Construção dinâmica de uma tabela HTML a partir de um array de objetos com criação de elementos no DOM, inserção, atualização e remoção de linhas.
* [x] **EX10 — Shopping Cart** *(Nível L3)*: Carrinho de compras interativo com adicionar, remover, alterar quantidade, calcular total, calcular quantidade de produtos e persistência em `localStorage`.

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — Variables

* **Objetivo:** Compreender a declaração de variáveis e os diferentes tipos de dados fundamentais em JavaScript, apresentando os valores de forma correta.
* **Decisões tomadas:**
  * Utilização de `const` para valores e referências imutáveis e `let` para propriedades mutáveis, evitando o uso de `var`.
  * Implementação dos 5 tipos de dados exigidos pelo enunciado: `string`, `number`, `boolean`, `array` e `object`.
  * Ligação de um ficheiro JavaScript externo (`script.js`) no final do `<body>` do `index.html` e apresentação dos dados tanto na consola (`console.log`) como no DOM (`getElementById` e `innerHTML`).

### EX02 — Conditions

* **Objetivo:** Implementar estruturas condicionais para classificar uma nota numérica em diferentes intervalos de avaliação.
* **Decisões tomadas:**
  * Criação de uma função `classifyGrade(grade)` com validação de intervalo (`0` a `20` valores) e verificação `Number.isNaN`, evitando erros com entradas inválidas.
  * Estruturação dos intervalos de avaliação por ordem crescente usando `if / else if / else` (*Insuficiente*, *Suficiente*, *Bom* e *Muito Bom*).
  * Interação direta no DOM através de formulário (`addEventListener("submit", ...)` com `event.preventDefault()`) e atualização segura com `textContent`, complementada com testes automáticos na consola.

### EX03 — Loops

* **Objetivo:** Implementar programas iterativos para contar números, calcular somas, encontrar máximos e produzir tabelas, selecionando o ciclo mais adequado a cada problema.
* **Decisões tomadas:**
  * Utilização de `for` para contagem definida e geração da tabela da tabuada do `7`.
  * Implementação das alternativas de bónus com `for...of` (soma e máximo de coleções) e `while` (contagem e soma acumulada até atingir um valor limite).
  * Construção dinâmica da tabela HTML no DOM (`<table>`, `<thead>`, `<tbody>`) e validação na consola.

### EX04 — Functions

* **Objetivo:** Estruturar uma biblioteca reutilizável de funções matemáticas (`add`, `subtract`, `multiply`, `divide`, `average`, `max`, `min`) com validação defensiva de argumentos.
* **Decisões tomadas:**
  * Validação de entradas através de `Number.isFinite` e verificação de arrays não vazios, tratando explicitamente a divisão por zero (`b === 0`) e tipos inválidos (bónus).
  * Separação clara entre funções puras de cálculo e a renderização dos resultados no DOM através de formulários interativos.

### EX05 — Number Analyzer

* **Objetivo:** Receber uma coleção de números e determinar positivos, negativos, pares, ímpares, maior, menor e média, complementando com estatísticas adicionais.
* **Decisões tomadas:**
  * Avaliação separada de sinal (`> 0`, `< 0` e contagem de zeros) e de paridade (`% 2 === 0`), garantindo que cada número é contabilizado corretamente em todas as categorias aplicáveis.
  * Inicialização de `highest` e `lowest` com `numbers[0]` para suportar coleções compostas exclusivamente por números negativos.
  * Produção de estatísticas adicionais (bónus): contagem de zeros, soma total, amplitude (`maior - menor`) e percentagens de positivos e pares.

### EX06 — String Laboratory

* **Objetivo:** Criar funções dedicadas à análise e transformação de cadeias de caracteres (`strings`), incluindo contagem de caracteres, inversão, contagem de palavras, pesquisa de palavras e deteção de palíndromes.
* **Decisões tomadas:**
  * Criação da função `normalizeText` (bónus) com `.toLowerCase()` e `.normalize("NFD")` para normalizar maiúsculas/minúsculas e remover acentos na pesquisa de palavras e na verificação de palíndromes.
  * Utilização de `Array.from(text).reverse().join("")` para inverter strings com suporte seguro a caracteres Unicode e de `.trim().split(/\s+/)` para contagem exata de palavras.
  * Remoção de espaços e pontuação antes de testar palíndromes, permitindo validar tanto palavras únicas como frases completas de forma interativa no DOM.

### EX07 — Array Toolkit

* **Objetivo:** Compreender o funcionamento interno dos principais métodos de iteração, pesquisa e transformação de arrays em JavaScript, implementando versões próprias equivalentes a `map`, `filter`, `find`, `reduce`, `includes` e `reverse`.
* **Decisões tomadas:**
  * Cumprimento rigoroso da restrição de não invocar `.map()`, `.filter()`, `.find()`, `.reduce()`, `.includes()` ou `.reverse()`, construindo toda a lógica através de ciclos `for` e indexação direta.
  * Implementação não destrutiva de `myReverse`, devolvendo um novo array invertido sem modificar o array original.
  * Suporte completo aos comportamentos esperados de cada método (incluindo `initialValue` opcional em `myReduce` e comparação de `NaN` em `myIncludes`).

### EX08 — Product Objects

* **Objetivo:** Modelar uma coleção de objetos de produtos com as propriedades `name`, `price`, `category` e `available`, disponibilizando funcionalidades de pesquisa, filtragem e ordenação.
* **Decisões tomadas:**
  * Separação modular das operações em três funções distintas (`searchProducts`, `filterProducts` e `sortProducts`), encadeadas sempre que o utilizador interage com os controlos no DOM (`input`, `change` e `reset`).
  * Preservação da coleção original através de cópias superficiais (`items.slice()`) antes de aplicar `.sort()`, evitando mutações na ordem base dos produtos.
  * Utilização de `localeCompare(..., "pt")` para ordenação alfabética correta em português e atualização dinâmica da tabela HTML e do contador de resultados apresentados.

### EX09 — Dynamic Table

* **Objetivo:** Construir e gerir uma tabela HTML dinamicamente a partir de um array de objetos, suportando criação de elementos no DOM, inserção, atualização e remoção de linhas sem escrever linhas HTML manualmente.
* **Decisões tomadas:**
  * Cumprimento rigoroso da restrição de não escrever linhas HTML manualmente no `index.html`, construindo toda a estrutura (`table`, `thead`, `tbody`, `tr`, `th`, `td` e botões de ação) de forma programática com `document.createElement`, `appendChild` e `textContent`.
  * Manutenção do estado em memória no array `records` com identificador único por linha (`id`), sincronizando a vista através de `renderTable()` sempre que ocorre adição, atualização ou remoção.
  * Reutilização do mesmo formulário para criar novos registos ou editar/atualizar linhas existentes (`editingId`), incluindo botão para cancelar a edição.

### EX10 — Shopping Cart

* **Objetivo:** Implementar um carrinho de compras completo no DOM com operações de adicionar, remover, alterar quantidade, calcular quantidade total de produtos e calcular valor total, incluindo persistência em `localStorage`.
* **Decisões tomadas:**
  * Separação das responsabilidades entre catálogo (`catalog`), estado do carrinho (`cart`), funções de cálculo (`calculateTotalQuantity` e `calculateCartTotal`) e renderização dinâmica no DOM.
  * Tratamento de quantidades iguais ou inferiores a zero em `updateQuantity` através da remoção automática do item do carrinho, evitando quantidades inválidas.
  * Implementação do bónus de persistência em `localStorage` (`JSON.stringify` / `JSON.parse` com tratamento de exceções) e botão dedicado para esvaziar o carrinho.

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
├── ex03/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex04/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex05/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex06/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex07/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex08/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex09/
│   ├── index.html
│   ├── script.js
│   └── README.md
├── ex10/
│   ├── index.html
│   ├── script.js
│   └── README.md
└── README.md
```

## Tecnologias Utilizadas

* HTML5
* JavaScript (ES6+), DOM (*Document Object Model*) e Web Storage (`localStorage`)

## Como Executar

1. Clonar ou abrir o repositório `m03` no **Visual Studio Code**.
2. Abrir o ficheiro `index.html` da diretoria do exercício pretendido (`ex01/` a `ex10/`) num navegador web ou através da extensão **Live Server**.
3. Abrir as ferramentas de programador (`F12` -> *Console*) para acompanhar os registos de execução e validação.

#### Autor

**Vitor Ângelo Medeiros e Silva** (N.º **13422**)

* GitHub: [MagicShopPT](https://github.com/MagicShopPT)