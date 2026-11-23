// ============================================================================
// EX10 — Shopping Cart (Módulo 03 - JavaScript e DOM)
// Autor: Vitor Ângelo Medeiros e Silva | N.º 13422 | 51 anos
// Bónus: Persistência em localStorage
// ============================================================================

const STORAGE_KEY = "ismt_m03_ex10_cart_v1";

const catalog = [
    { id: 1, name: "Caderno Técnico A4", price: 6.5 },
    { id: 2, name: "Pen USB 64GB", price: 14.9 },
    { id: 3, name: "Suporte Ergonómico para Portátil", price: 29.0 },
    { id: 4, name: "Tapete de Rato XL", price: 12.5 }
];

let cart = loadCartFromStorage();

// Elementos do DOM
const catalogOutput = document.getElementById("catalog-output");
const cartSummary = document.getElementById("cart-summary");
const cartOutput = document.getElementById("cart-output");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Bónus: carregar e guardar em localStorage
function loadCartFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.warn("Erro ao ler localStorage:", error);
        return [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.warn("Erro ao guardar no localStorage:", error);
    }
}

// 1. Adicionar produto ao carrinho
function addToCart(productId) {
    const product = catalog.find((item) => item.id === productId);
    if (!product) return;

    const existing = cart.find((item) => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCartToStorage();
    renderCart();
}

// 2. Remover produto do carrinho
function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    saveCartToStorage();
    renderCart();
}

// 3. Alterar quantidade de um produto (remove se quantidade <= 0)
function updateQuantity(productId, newQuantity) {
    const qty = Number(newQuantity);
    if (!Number.isFinite(qty)) return;

    if (qty <= 0) {
        removeFromCart(productId);
        return;
    }

    const target = cart.find((item) => item.id === productId);
    if (target) {
        target.quantity = Math.floor(qty);
        saveCartToStorage();
        renderCart();
    }
}

// 4. Calcular quantidade total de produtos (unidades)
function calculateTotalQuantity(items) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

// 5. Calcular valor total do carrinho
function calculateCartTotal(items) {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCatalog() {
    if (!catalogOutput) return;

    const ul = document.createElement("ul");

    for (const product of catalog) {
        const li = document.createElement("li");
        li.style.marginBottom = "8px";

        const info = document.createElement("span");
        info.textContent = `${product.name} — ${product.price.toFixed(2)} € `;

        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.textContent = "Adicionar";
        addBtn.addEventListener("click", () => addToCart(product.id));

        li.appendChild(info);
        li.appendChild(addBtn);
        ul.appendChild(li);
    }

    catalogOutput.innerHTML = "";
    catalogOutput.appendChild(ul);
}

function renderCart() {
    if (!cartSummary || !cartOutput) return;

    const totalUnits = calculateTotalQuantity(cart);
    const totalPrice = calculateCartTotal(cart);

    console.log("=== EX10 — Shopping Cart ===", {
        items: cart,
        totalUnits,
        totalPrice: Number(totalPrice.toFixed(2))
    });

    cartSummary.innerHTML = `
        <p><strong>Quantidade total de produtos:</strong> ${totalUnits} | <strong>Total a pagar:</strong> ${totalPrice.toFixed(2)} €</p>
    `;

    if (cart.length === 0) {
        cartOutput.innerHTML = "<p>O carrinho está vazio. Adicione produtos do catálogo acima.</p>";
        return;
    }

    const table = document.createElement("table");
    table.border = "1";
    table.cellPadding = "6";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    for (const col of ["Produto", "Preço Unit.", "Quantidade", "Subtotal", "Ações"]) {
        const th = document.createElement("th");
        th.textContent = col;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (const item of cart) {
        const tr = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.textContent = item.name;

        const tdPrice = document.createElement("td");
        tdPrice.textContent = `${item.price.toFixed(2)} €`;

        const tdQty = document.createElement("td");
        const decBtn = document.createElement("button");
        decBtn.type = "button";
        decBtn.textContent = "-";
        decBtn.addEventListener("click", () => updateQuantity(item.id, item.quantity - 1));

        const qtySpan = document.createElement("span");
        qtySpan.textContent = ` ${item.quantity} `;
        qtySpan.style.margin = "0 6px";

        const incBtn = document.createElement("button");
        incBtn.type = "button";
        incBtn.textContent = "+";
        incBtn.addEventListener("click", () => updateQuantity(item.id, item.quantity + 1));

        tdQty.appendChild(decBtn);
        tdQty.appendChild(qtySpan);
        tdQty.appendChild(incBtn);

        const tdSubtotal = document.createElement("td");
        tdSubtotal.textContent = `${(item.price * item.quantity).toFixed(2)} €`;

        const tdActions = document.createElement("td");
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remover";
        removeBtn.addEventListener("click", () => removeFromCart(item.id));
        tdActions.appendChild(removeBtn);

        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tr.appendChild(tdQty);
        tr.appendChild(tdSubtotal);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    cartOutput.innerHTML = "";
    cartOutput.appendChild(table);
}

if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        saveCartToStorage();
        renderCart();
    });
}

renderCatalog();
renderCart();