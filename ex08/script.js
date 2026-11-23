// ============================================================================
// EX08 — Product Objects (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// ============================================================================

const products = [
    { name: "Rato Óptico Sem Fios", price: 24.9, category: "Periféricos", available: true },
    { name: "Monitor IPS 27\"", price: 229.0, category: "Monitores", available: true },
    { name: "Auscultadores Studio", price: 89.5, category: "Áudio", available: false },
    { name: "SSD NVMe 1TB", price: 74.0, category: "Armazenamento", available: true },
    { name: "Teclado Mecânico Compacto", price: 109.9, category: "Periféricos", available: true },
    { name: "Monitor Curvo 34\"", price: 419.0, category: "Monitores", available: false },
    { name: "Microfone USB Condensador", price: 64.5, category: "Áudio", available: true }
];

/**
 * 1. Pesquisa produtos cujo nome contenha o termo indicado (sem distinção de maiúsculas).
 */
function searchProducts(items, query) {
    const normalizedQuery = String(query).trim().toLowerCase();
    if (normalizedQuery === "") {
        return items.slice();
    }
    return items.filter((item) => item.name.toLowerCase().includes(normalizedQuery));
}

/**
 * 2. Filtra produtos por categoria e/ou disponibilidade.
 */
function filterProducts(items, { category = "all", onlyAvailable = false } = {}) {
    return items.filter((item) => {
        const matchesCategory = category === "all" || item.category === category;
        const matchesAvailability = !onlyAvailable || item.available === true;
        return matchesCategory && matchesAvailability;
    });
}

/**
 * 3. Ordena uma cópia da coleção sem mutar o array original.
 */
function sortProducts(items, sortBy = "none") {
    const copy = items.slice();

    switch (sortBy) {
        case "price-asc":
            return copy.sort((a, b) => a.price - b.price);
        case "price-desc":
            return copy.sort((a, b) => b.price - a.price);
        case "name-asc":
            return copy.sort((a, b) => a.name.localeCompare(b.name, "pt"));
        case "name-desc":
            return copy.sort((a, b) => b.name.localeCompare(a.name, "pt"));
        default:
            return copy;
    }
}

// Elementos do DOM
const controlsForm = document.getElementById("product-controls-form");
const searchInput = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const onlyAvailableCheckbox = document.getElementById("only-available-checkbox");
const sortSelect = document.getElementById("sort-select");
const productsSummary = document.getElementById("products-summary");
const productsOutput = document.getElementById("products-output");

function renderProducts() {
    if (
        !searchInput ||
        !categorySelect ||
        !onlyAvailableCheckbox ||
        !sortSelect ||
        !productsSummary ||
        !productsOutput
    ) {
        return;
    }

    const searched = searchProducts(products, searchInput.value);
    const filtered = filterProducts(searched, {
        category: categorySelect.value,
        onlyAvailable: onlyAvailableCheckbox.checked
    });
    const finalList = sortProducts(filtered, sortSelect.value);

    console.log("=== EX08 — Product Objects ===", {
        query: searchInput.value,
        category: categorySelect.value,
        onlyAvailable: onlyAvailableCheckbox.checked,
        sortBy: sortSelect.value,
        resultCount: finalList.length,
        results: finalList
    });

    productsSummary.textContent = `A mostrar ${finalList.length} de ${products.length} produtos.`;

    if (finalList.length === 0) {
        productsOutput.innerHTML = "<p>Nenhum produto corresponde aos critérios selecionados.</p>";
        return;
    }

    const rowsHtml = finalList
        .map(
            (product) => `
            <tr>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.price.toFixed(2)} €</td>
                <td>${product.available ? "Disponível" : "Indisponível"}</td>
            </tr>
        `
        )
        .join("");

    productsOutput.innerHTML = `
        <table border="1" cellpadding="6">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Disponibilidade</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>
    `;
}

if (controlsForm && searchInput && categorySelect && onlyAvailableCheckbox && sortSelect) {
    renderProducts();

    searchInput.addEventListener("input", renderProducts);
    categorySelect.addEventListener("change", renderProducts);
    onlyAvailableCheckbox.addEventListener("change", renderProducts);
    sortSelect.addEventListener("change", renderProducts);

    controlsForm.addEventListener("reset", () => {
        setTimeout(renderProducts, 0);
    });
}