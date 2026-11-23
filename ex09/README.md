Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 16/10/2026.

# Módulo 03 — JavaScript e DOM

Este repositório contém a resolução dos exercícios práticos do **Módulo 03 — JavaScript e DOM** da unidade curricular de **Programação WEB** do Instituto Superior Miguel Torga (ISMT).

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

### EX03 — Loops

* **Objetivo:** Implementar programas iterativos para contar números, calcular somas, encontrar máximos e produzir tabelas, selecionando o ciclo mais adequado a cada problema.
* **Decisões tomadas:**
  * Utilização do ciclo `for` tradicional para situações com número conhecido de iterações (contagem sequencial de `1` a `10` e construção das linhas da tabuada do `7`).
  * Implementação das versões alternativas previstas no bónus com `for...of` (para percorrer diretamente os elementos do array no cálculo da soma e na determinação do valor máximo sem gestão manual de índices) e `while` (para contagem controlada por condição e acumulação progressiva até atingir um limite alvo).
  * Renderização dinâmica no DOM, incluindo a geração programática das linhas (`<tr>` e `<td>`) da tabela HTML da tabuada a partir de um array de objetos, acompanhada de registos completos na consola.

### EX04 — Functions

* **Objetivo:** Estruturar uma biblioteca reutilizável de funções matemáticas (`add`, `subtract`, `multiply`, `divide`, `average`, `max`, `min`) com validação defensiva de argumentos.
* **Decisões tomadas:**
  * Criação das funções auxiliares `isValidNumber` (usando `Number.isFinite`) e `validateNumberArray` para cumprir o bónus de validação de argumentos, garantindo que valores não numéricos, `NaN`, arrays vazios e divisões por zero (`b === 0` em `divide`) devolvem mensagens de erro claras e controladas.
  * Separação entre a lógica pura das funções matemáticas (que recebem parâmetros e devolvem objetos estruturados `{ ok, value | error }`) e a camada de apresentação no DOM.
  * Criação de formulários interativos no `index.html` para testar operações binárias (`add`, `subtract`, `multiply`, `divide`) e estatísticas sobre coleções de números (`average`, `max`, `min`), além de testes automáticos de casos inválidos.

### EX05 — Number Analyzer

* **Objetivo:** Receber uma coleção de números e determinar positivos, negativos, pares, ímpares, maior, menor e média, complementando com estatísticas adicionais.
* **Decisões tomadas:**
  * Avaliação separada de sinal (`num > 0`, `num < 0` e contagem de zeros) e de paridade (`num % 2 === 0`), permitindo que um mesmo número seja classificado simultaneamente em ambas as categorias (por exemplo, positivo e par).
  * Inicialização das variáveis `highest` e `lowest` com o primeiro elemento da coleção (`numbers[0]`), evitando resultados incorretos quando todos os valores da lista são negativos.
  * Inclusão de métricas adicionais (bónus): contagem de zeros, soma total, amplitude (`maior - menor`) e percentagem de números positivos e pares, apresentadas de forma interativa no DOM e na consola.

### EX06 — String Laboratory

* **Objetivo:** Criar funções dedicadas à análise e transformação de cadeias de caracteres (`strings`), incluindo contagem de caracteres, inversão, contagem de palavras, pesquisa de palavras e deteção de palíndromes.
* **Decisões tomadas:**
  * Implementação da função auxiliar `normalizeText` (bónus) recorrendo a `.toLowerCase()` e `.normalize("NFD")` com remoção de marcas diacríticas (`[\u0300-\u036f]`), permitindo comparar palavras e frases independentemente de maiúsculas, minúsculas ou acentuação.
  * Utilização de `Array.from(text).reverse().join("")` na inversão de strings para preservar corretamente caracteres Unicode compostos, e de `.trim().split(/\s+/)` na contagem de palavras para ignorar espaços repetidos.
  * Remoção de pontuação e espaços na verificação de palíndromes (`isPalindrome`), suportando tanto palavras isoladas como frases completas, com controlo interativo no DOM através de formulário e caixa de seleção para ativar ou desativar a normalização.

### EX07 — Array Toolkit

* **Objetivo:** Compreender o funcionamento interno dos principais métodos de iteração, pesquisa e transformação de arrays em JavaScript, implementando versões próprias equivalentes a `map`, `filter`, `find`, `reduce`, `includes` e `reverse`.
* **Decisões tomadas:**
  * Respeito estrito pela restrição do enunciado: nenhuma das funções (`myMap`, `myFilter`, `myFind`, `myReduce`, `myIncludes`, `myReverse`) utiliza os métodos nativos equivalentes, recorrendo exclusivamente a ciclos `for` e indexação direta (`array.length`).
  * Garantia de imutabilidade em `myReverse`, que percorre o array original do fim para o início (`array.length - 1` até `0`) e devolve uma nova cópia invertida sem mutar o array de entrada.
  * Suporte em `myReduce` para execuções com ou sem valor inicial explícito (`initialValue`) e suporte em `myIncludes` para pesquisa a partir de um índice (`fromIndex`) e deteção de `NaN`.

### EX08 — Product Objects

* **Objetivo:** Modelar uma coleção de objetos de produtos com as propriedades `name`, `price`, `category` e `available`, disponibilizando funcionalidades de pesquisa, filtragem e ordenação.
* **Decisões tomadas:**
  * Separação modular das operações em três funções distintas (`searchProducts`, `filterProducts` e `sortProducts`), encadeadas de forma previsível sempre que o utilizador interage com os controlos no DOM (`input`, `change` e `reset`).
  * Preservação da coleção original através de cópias superficiais (`items.slice()`) antes de aplicar `.sort()`, evitando mutações inesperadas na ordem base dos produtos.
  * Utilização de `localeCompare(..., "pt")` para ordenação alfabética correta em português e atualização dinâmica da tabela HTML e do contador de resultados apresentados.

### EX09 — Dynamic Table

* **Objetivo:** Construir e gerir uma tabela HTML dinamicamente a partir de um array de objetos, suportando criação de elementos no DOM, inserção, atualização e remoção de linhas sem escrever linhas HTML manualmente.
* **Decisões tomadas:**
  * Cumprimento rigoroso da restrição de não escrever linhas HTML manualmente no `index.html`, construindo toda a estrutura (`table`, `thead`, `tbody`, `tr`, `th`, `td` e botões de ação) de forma programática com `document.createElement`, `appendChild` e `textContent`.
  * Manutenção do estado em memória no array `records` com identificador único por linha (`id`), sincronizando a vista através de `renderTable()` sempre que ocorre adição, atualização ou remoção.
  * Reutilização do mesmo formulário para criar novos registos ou editar/atualizar linhas existentes (`editingId`), incluindo botão para cancelar a edição.

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
└── README.md
```

## Tecnologias Utilizadas

* HTML5
* JavaScript (ES6+) e DOM (*Document Object Model*)

## Como Executar

1. Clonar ou abrir o repositório `m03` no **Visual Studio Code**.
2. Abrir o ficheiro `index.html` da diretoria do exercício pretendido (`ex01/` a `ex09/`) num navegador web ou através da extensão **Live Server**.
3. Abrir as ferramentas de programador (`F12` -> *Console*) para visualizar os testes e registos na consola.

#### Autor

**Vitor Ângelo Medeiros e Silva** (N.º **13422**)

* GitHub: [MagicShopPT](https://github.com/MagicShopPT)