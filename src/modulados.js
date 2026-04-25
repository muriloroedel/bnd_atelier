(function () {
    const data = window.BND_MODULADOS || { categories: [], products: [] };

    const filtersContainer = document.getElementById("catalog-filters");
    const grid = document.getElementById("catalog-grid");
    const resultsText = document.getElementById("catalog-results-text");

    if (!filtersContainer || !grid || !resultsText) {
        return;
    }

    let activeCategory = "todos";
    let galleryIndex = {};
    let visibleCount = 10;
    const PAGE_SIZE = 10;

    let filteredProducts = [];

    renderFilters();
    applyFilter();
    renderProducts();
    updateResults();

    const modal = document.createElement("div");
    modal.className = "catalog-modal";

    modal.innerHTML = `
        <div class="catalog-modal-backdrop"></div>
        <div class="catalog-modal-content">
            <button class="catalog-modal-close" type="button" aria-label="Fechar">
                <i class="fas fa-times"></i>
            </button>
            <button class="catalog-modal-prev" type="button" aria-label="Foto anterior">
                <i class="fas fa-chevron-left"></i>
            </button>
            <img class="catalog-modal-image" src="" alt="">
            <button class="catalog-modal-next" type="button" aria-label="Próxima foto">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".catalog-modal-image");
    const modalPrev = modal.querySelector(".catalog-modal-prev");
    const modalNext = modal.querySelector(".catalog-modal-next");

    modal.querySelector(".catalog-modal-backdrop").onclick = closeModal;
    modal.querySelector(".catalog-modal-close").onclick = closeModal;

    let modalProduct = null;
    let modalIndex = 0;

    function openModal(product) {
        if (!product.images || !product.images.length) {
            return;
        }

        modalProduct = product;
        modalIndex = galleryIndex[product.id] || 0;

        modalImg.src = modalProduct.images[modalIndex];
        modalImg.alt = product.name || "Foto do produto";
        modal.classList.add("open");
        document.body.classList.add("lightbox-open");
        updateModalControls();
    }

    function closeModal() {
        modal.classList.remove("open");
        document.body.classList.remove("lightbox-open");
    }

    function updateModalControls() {
        const hasManyImages = Boolean(modalProduct && modalProduct.images && modalProduct.images.length > 1);

        modalPrev.style.display = hasManyImages ? "flex" : "none";
        modalNext.style.display = hasManyImages ? "flex" : "none";
    }

    const handleNext = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!modalProduct || !modalProduct.images || modalProduct.images.length < 2) return;
        
        modalIndex = (modalIndex + 1) >= modalProduct.images.length ? 0 : modalIndex + 1;
        modalImg.src = modalProduct.images[modalIndex];
    };

    const handlePrev = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!modalProduct || !modalProduct.images || modalProduct.images.length < 2) return;

        modalIndex = (modalIndex - 1) < 0 ? modalProduct.images.length - 1 : modalIndex - 1;
        modalImg.src = modalProduct.images[modalIndex];
    };

    modalNext.addEventListener('click', handleNext);
    modalPrev.addEventListener('click', handlePrev);

    modalNext.addEventListener('touchstart', handleNext, {passive: false});
    modalPrev.addEventListener('touchstart', handlePrev, {passive: false});


    function renderFilters() {
        filtersContainer.innerHTML = "";

        data.categories.forEach((category) => {
            const button = document.createElement("button");
            button.className = "catalog-filter" + (category.id === "todos" ? " is-active" : "");
            button.textContent = category.label;
            button.type = "button";

            button.addEventListener("click", () => {
                activeCategory = category.id;
                visibleCount = PAGE_SIZE;

                document
                    .querySelectorAll(".catalog-filter")
                    .forEach((item) => item.classList.remove("is-active"));

                button.classList.add("is-active");

                applyFilter();
                renderProducts();
                updateResults();
            });

            filtersContainer.appendChild(button);
        });
    }

    function applyFilter() {
        filteredProducts = data.products.filter((product) => {
            return activeCategory === "todos" || product.category === activeCategory;
        });
    }

    function renderProducts() {
        grid.innerHTML = "";

        const visibleProducts = filteredProducts.slice(0, visibleCount);

        visibleProducts.forEach((product, index) => {
            galleryIndex[product.id] = 0;

            const card = createProductCard(product);

            card.style.opacity = 0;
            card.style.transform = "translateY(20px)";

            grid.appendChild(card);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.transition = "all .5s ease";
                    card.style.opacity = 1;
                    card.style.transform = "translateY(0)";
                }, index * 40);
            });
        });

        renderLoadMore();
    }

    function renderLoadMore() {
        const oldButton = document.getElementById("catalog-load-more");
        if (oldButton) {
            oldButton.remove();
        }

        if (visibleCount >= filteredProducts.length) {
            return;
        }

        const button = document.createElement("button");
        button.id = "catalog-load-more";
        button.type = "button";
        button.textContent = "Ver mais";

        button.style.cssText = `
            margin: 32px auto 0;
            display: block;
            padding: 14px 28px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--bg-secondary);
            cursor: pointer;
            font-size: 14px;
            transition: .25s;
        `;

        button.onmouseenter = () => {
            button.style.transform = "translateY(-2px)";
            button.style.boxShadow = "0 10px 20px rgba(0,0,0,0.08)";
        };

        button.onmouseleave = () => {
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "none";
        };

        button.onclick = () => {
            visibleCount += PAGE_SIZE;
            renderProducts();
            updateResults();
        };

        grid.parentElement.appendChild(button);
    }

    function createProductCard(product) {
        const card = document.createElement("div");
        const images = Array.isArray(product.images) ? product.images : [];
        const firstImage = images[0] || "";
        const metaLines = [];

        card.className = "product-card";

        if (product.price) {
            metaLines.push(`<li><strong style="font-size: 1.2em;">${product.price}</strong> no pix</li>`);
        }

        if (product.credit) {
            metaLines.push(`ou 10x de ${product.credit} sem juros</li>`);
        }

        if (product.color) {
            metaLines.push(`<li><strong>Cor:</strong> ${product.color}</li>`);
        } else if (product.colors) {
            metaLines.push(`<li><strong>Cores:</strong> ${product.colors}</li>`);
        }

        const hasManyImages = images.length > 1;

        card.innerHTML = `
            <div class="product-gallery">
                <button class="product-gallery-image" type="button" ${firstImage ? "" : "disabled"}>
                    ${firstImage ? `<img src="${firstImage}" alt="${product.name || "Produto"}" loading="lazy" decoding="async" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw">` : ""}
                </button>

                ${hasManyImages ? `
                    <button class="product-gallery-btn prev" type="button" aria-label="Foto anterior">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="product-gallery-btn next" type="button" aria-label="Próxima foto">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <span class="product-gallery-status">1 / ${images.length}</span>
                ` : ""}

                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
            </div>

            <div class="product-card-body">
                ${product.type ? `<span class="product-type">${product.type}</span>` : ""}
                <h3>${product.name || "Produto"}</h3>
                ${product.details ? `<p class="product-description">${product.details}</p>` : ""}
                ${metaLines.length ? `<ul class="product-meta">${metaLines.join("")}</ul>` : ""}

                <div class="product-actions">
                    ${firstImage ? `<button class="product-secondary-btn" type="button">Ver fotos</button>` : ""}
                    <a class="product-buy" target="_blank" rel="noopener noreferrer" href="${createWhatsappLink(product)}">
                        Comprar
                    </a>
                </div>
            </div>
        `;

        attachGalleryEvents(card, product);

        return card;
    }

    function attachGalleryEvents(card, product) {
        const images = Array.isArray(product.images) ? product.images : [];
        if (!images.length) {
            return;
        }

        const img = card.querySelector("img");
        const prev = card.querySelector(".prev");
        const next = card.querySelector(".next");
        const status = card.querySelector(".product-gallery-status");
        const imageButton = card.querySelector(".product-gallery-image");
        const viewPhotosButton = card.querySelector(".product-secondary-btn");

        imageButton.addEventListener("click", () => openModal(product));

        if (viewPhotosButton) {
            viewPhotosButton.addEventListener("click", () => openModal(product));
        }

        if (!prev || !next || images.length < 2) {
            return;
        }

        prev.addEventListener("click", previousImage);
        next.addEventListener("click", nextImage);

        function nextImage() {
            galleryIndex[product.id] += 1;

            if (galleryIndex[product.id] >= images.length) {
                galleryIndex[product.id] = 0;
            }

            update();
        }

        function previousImage() {
            galleryIndex[product.id] -= 1;

            if (galleryIndex[product.id] < 0) {
                galleryIndex[product.id] = images.length - 1;
            }

            update();
        }

        function update() {
            img.src = images[galleryIndex[product.id]];
            if (status) {
                status.textContent = `${galleryIndex[product.id] + 1} / ${images.length}`;
            }
        }
    }

    function createWhatsappLink(product) {
        const url = window.location.href.split("#")[0] + "#" + (product.id || "");
        const lines = [
            "Olá! Tenho interesse neste modulado:",
            "",
            product.name || "Produto"
        ];

        if (product.type) {
            lines.push(product.type);
        }

        if (product.color) {
            lines.push(`Cor: ${product.color}`);
        } else if (product.colors) {
            lines.push(`Cores: ${product.colors}`);
        }

        lines.push("", `Link: ${url}`);

        return `https://wa.me/5551980554853?text=${encodeURIComponent(lines.join("\n"))}`;
    }

    function updateResults() {
        const total = filteredProducts.length;
        resultsText.textContent = `${total} ${total === 1 ? "modelo disponivel" : "modelos disponiveis"}`;
    }
})();
