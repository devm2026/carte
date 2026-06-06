// Core Application Logic for Valley Coffee & More Plain JS/HTML/CSS Digital Menu
// Works perfectly offline or online. Built with love using plain HTML, CSS, and JS!

// Dynamic inline SVG helper for beautiful, self-contained vector graphics
function getIconSvg(iconName, className = "w-4 h-4") {
  const base = `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`;
  switch (iconName) {
    case "Coffee":
      return `${base}<path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>`;
    case "Leaf":
      return `${base}<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1 8a7 7 0 0 1-13.8 3.7Z"/><path d="M9.8 6.1C11.5 10 14 12.8 19 14"/></svg>`;
    case "Flame":
      return `${base}<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
    case "UtensilsCrossed":
      return `${base}<path d="M15 15 21 21M15 15v6h2l3-6v-1a2 2 0 0 0-2-2h-3ZM9 15l-6 6M9 15v6H7l-3-6v-1a2 2 0 0 1 2-2h3ZM14 14a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2h10Z"/></svg>`;
    case "Pizza":
      return `${base}<path d="M15 11h.01M11 15h.01M16 16h.01M12 11h.01"/><path d="M2 12C2 6.5 6.5 2 12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12Z"/><path d="M4.3 7.3 12 12l7.7-4.7M12 12v10"/></svg>`;
    case "Cookie":
      return `${base}<path d="M12 2a10 10 0 1 0 10 10c0-2.2-1.4-4.2-3.5-4.8A4.2 4.2 0 0 1 14 3.5 10 10 0 0 0 12 2Zm-3.5 7v.01M15.5 9v.01M9 14.5v.01M15 14v.01"/></svg>`;
    case "IceCream":
      return `${base}<path d="m7 11 5 11 5-11M12 2a4 4 0 0 0-4 4c0 3.3 2 4 4 5s4-1.7 4-5a4 4 0 0 0-4-4Z"/></svg>`;
    case "Cake":
      return `${base}<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M2 21h20M12 5V2M8 11V8M16 11V8M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 18a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2"/></svg>`;
    case "Beef":
      return `${base}<path d="M12.5 2.5C11.3 2.5 10 3.8 10 5.4c0 1.2.6 2.3 1.5 2.9M14 9.5c0 1.4-1.1 2.5-2.5 2.5M7 6a4 4 0 0 0-4 4c0 5 4.5 9.5 9 11.5a19 19 0 0 0 9-11.5 4 4 0 0 0-4-4H7Z"/></svg>`;
    case "Sparkles":
      return `${base}<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`;
    case "Compass":
      return `${base}<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
    case "Baby":
      return `${base}<circle cx="12" cy="12" r="10"/><path d="M8 14c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5M9 9h.01M15 9h.01"/></svg>`;
    case "Search":
      return `${base}<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
    case "Star":
      return `<svg class="${className} ${className.includes("fill-current") ? "" : "fill-current"}" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    case "Plus":
      return `${base}<path d="M5 12h14M12 5v14"/></svg>`;
    case "Minus":
      return `${base}<path d="M5 12h14"/></svg>`;
    case "ShoppingCart":
      return `${base}<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`;
    case "ChevronUp":
      return `${base}<path d="m18 15-6-6-6 6"/></svg>`;
    case "ChevronDown":
      return `${base}<path d="m6 9 6 6 6-6"/></svg>`;
    case "Trash2":
      return `${base}<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6"/></svg>`;
    case "ArrowLeft":
      return `${base}<path d="m12 19-7-7 7-7M5 12h14"/></svg>`;
    case "ChevronRight":
      return `${base}<path d="m9 18 6-6-6-6"/></svg>`;
    case "RotateCcw":
      return `${base}<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`;
    case "QrCode":
      return `${base}<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16V21M21 16H16M16 21H21M9 9h.01M9 15h.01M15 9h.01M15 15h.01"/></svg>`;
    case "Copy":
      return `${base}<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
    case "Check":
      return `${base}<path d="M20 6 9 17l-5-5"/></svg>`;
    case "X":
      return `${base}<path d="M18 6 6 18M6 6l12 12"/></svg>`;
    default:
      return `${base}<circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`;
  }
}

// Global Vanilla Application State Management
const state = {
  selectedCategory: null,
  searchQuery: "",
  activeTag: null,
  orderChoices: [],
  favoriteIds: [],
  customizingProduct: null,
  customSelectedSize: "Moyenne", // 'Moyenne' or 'Grande'
  customSelectedExtra: null,   // null, '+beurre', '+fromage', '+frites', '+glace'
  isQROpen: false,
  isBasketExpanded: false,
};

// Check if any product matches active tag or search queries
function matchesFilter(product) {
  if (state.activeTag) {
    if (state.activeTag === "Végétarien" && !product.tags?.includes("Végétarien")) return false;
    if (state.activeTag === "Seafood" && !product.tags?.includes("Seafood")) return false;
    if (state.activeTag === "Spicy" && !product.tags?.includes("Épicé") && !product.tags?.includes("Spicy")) return false;
    if (state.activeTag === "Signature" && !product.tags?.includes("Signature")) return false;
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    const matchesName = product.name.toLowerCase().includes(q);
    const matchesComp = product.composition?.toLowerCase().includes(q) || false;
    const matchesTag = product.tags?.some((t) => t.toLowerCase().includes(q)) || false;
    return matchesName || matchesComp || matchesTag;
  }

  return true;
}

// Compute searching overview lists
function getFilteredProducts() {
  if (!state.searchQuery.trim() && !state.activeTag) return [];
  const results = [];
  window.categories.forEach((cat) => {
    cat.products.forEach((prod) => {
      if (matchesFilter(prod)) {
        results.push({ product: prod, category: cat });
      }
    });
  });
  return results;
}

// Copy source link utility helper
function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    if (btnElement) {
      const originalInner = btnElement.innerHTML;
      btnElement.innerHTML = `${getIconSvg("Check", "w-3.5 h-3.5")} <span>Lien Copié!</span>`;
      btnElement.classList.remove("bg-valley-green");
      btnElement.classList.add("bg-emerald-600");
      setTimeout(() => {
        btnElement.innerHTML = originalInner;
        btnElement.classList.remove("bg-emerald-600");
        btnElement.classList.add("bg-valley-green");
      }, 2000);
    }
  });
}

// MAIN DOM RENDERING FUNCTION (Mounts inside #root)
function render() {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=1a4329&bgcolor=ffffff&data=${encodeURIComponent(
    currentUrl
  )}`;

  // Header dynamic HTML
  const headerHtml = `
    <header class="sticky top-0 z-40 bg-valley-green text-valley-cream shadow-md">
      <div class="relative p-4 md:p-5 border-b border-valley-greenLight">
        <div class="absolute inset-2 border border-valley-gold/20 pointer-events-none rounded"></div>
        <div class="relative flex justify-between items-center max-w-xl mx-auto px-1.55">
          
          ${
            state.selectedCategory
              ? `
            <button id="header-back-btn" class="flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-black/20 hover:bg-black/30 transition-colors text-xs font-semibold text-valley-gold border border-valley-gold/30 cursor-pointer">
              ${getIconSvg("RotateCcw", "w-3.5 h-3.5")}
              <span>Retour</span>
            </button>
          `
              : `
            <div class="flex items-center gap-2">
              <span class="p-1 rounded bg-valley-gold/10 text-valley-gold">
                ${getIconSvg("Coffee", "w-4 h-4")}
              </span>
              <span class="text-[9px] uppercase tracking-widest text-valley-gold/70 font-mono">
                Pure Vanilla App
              </span>
            </div>
          `
          }

          <div class="text-center flex-1 mx-3">
            <h1 class="font-serif text-xl sm:text-2xl font-black tracking-wider leading-none text-valley-cream">
              VALLEY
            </h1>
            <p class="text-[8px] uppercase tracking-[0.25em] text-valley-gold mt-0.5 font-sans">
              COFFEE & MORE
            </p>
            ${
              state.selectedCategory
                ? `<div class="inline-block mt-1 px-2.5 py-0.5 bg-valley-gold text-valley-green text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                    ${state.selectedCategory.name}
                  </div>`
                : `<span class="block italic text-[10px] font-sans text-valley-gold/90 mt-0.5">— Menu Numérique —</span>`
            }
          </div>

          <button id="header-qr-btn" class="flex items-center justify-center p-2 rounded-full bg-valley-gold/10 text-valley-gold hover:bg-valley-gold/20 transition-all border border-valley-gold/20 cursor-pointer" title="Afficher le QR Code de la table">
            ${getIconSvg("QrCode", "w-4 h-4")}
          </button>
        </div>
      </div>
    </header>
  `;

  // Filter tools bar
  const quickTags = ["Toutes", "Végétarien", "Seafood", "Spicy", "Signature"];
  const filtersHtml = `
    <section class="mb-5 space-y-3.5 px-4 pt-4">
      <div class="relative">
        <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
          ${getIconSvg("Search", "w-4 h-4")}
        </span>
        <input
          id="search-input"
          type="text"
          placeholder="Rechercher un plat, ingrédient..."
          value="${state.searchQuery}"
          class="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-valley-green focus:border-transparent transition-all shadow-xs"
        />
      </div>

      <div class="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        ${quickTags
          .map((tag) => {
            const isActive = (tag === "Toutes" && !state.activeTag) || state.activeTag === tag;
            return `
            <button
              data-tag="${tag}"
              class="tag-filter-button flex-shrink-0 text-[10px] font-extrabold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                isActive
                  ? "bg-valley-green border-valley-green text-valley-cream shadow-sm"
                  : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50"
              }"
            >
              ${tag}
            </button>
          `;
          })
          .join("")}
      </div>
    </section>
  `;

  // Search Results or Normal Screens rendering conditional router
  let mainContentHtml = "";
  const filteredProducts = getFilteredProducts();

  if (state.searchQuery.trim() || state.activeTag) {
    // SEARCH RESULTS SCREEN ACTIVE
    mainContentHtml = `
      <div class="space-y-4 animate-fade-in px-4">
        <div class="flex justify-between items-center px-1">
          <h3 class="font-serif font-black text-xs text-valley-green uppercase tracking-wider">
            Recherche (${filteredProducts.length} résultats)
          </h3>
          <button id="reset-filters-btn" class="text-[10px] font-bold text-amber-700 hover:underline cursor-pointer">
            Réinitialiser
          </button>
        </div>

        ${
          filteredProducts.length === 0
            ? `
          <div class="p-10 bg-white rounded-2xl border border-gray-200 text-center text-xs text-gray-400">
            Aucun plat ne correspond à vos critères de recherche.
          </div>
        `
            : `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${filteredProducts
              .map(
                ({ product, category }) => `
              <div class="relative flex flex-col">
                <span class="absolute top-2 left-2 z-10 text-[8px] uppercase tracking-widest font-mono font-bold bg-amber-500 text-white px-2 py-0.5 rounded shadow">
                  ${category.name}
                </span>
                ${renderProductCardHtml(product)}
              </div>
            `
              )
              .join("")}
          </div>
        `
        }
      </div>
    `;
  } else if (!state.selectedCategory) {
    // FRONT CATEGORIES GRID DASHBOARD
    mainContentHtml = `
      <div id="categories-container" class="space-y-5 animate-fade-in px-4">
        
        <!-- Premium Welcome Card -->
        <div class="relative p-5 bg-[#1F4E3D] text-white rounded-3xl overflow-hidden shadow-lg border border-emerald-800">
          <div class="absolute inset-0 bg-gradient-to-r from-[#11311E] to-transparent pointer-events-none"></div>
          <div class="absolute inset-1.5 border border-[#E6D5B8]/35 pointer-events-none rounded-2xl"></div>
          
          <div class="relative z-10 space-y-2">
            <div class="flex items-center gap-1.5">
              <span class="text-[9px] uppercase font-mono tracking-widest text-[#E6D5B8] font-bold">Menu Digital Autonome</span>
              <span class="px-1.5 py-0.5 bg-amber-500 text-white font-mono text-[7px] font-black uppercase rounded">Directement Hébergé</span>
            </div>
            
            <h2 class="font-serif text-sm font-black leading-snug">
              Bienvenue chez Valley Coffee & More
            </h2>
            <p class="text-[10px] text-gray-200 leading-relaxed max-w-sm">
              Naviguez à travers nos cartes, composez votre panier de commande et présentez-le directement au serveur pour une prise de commande immédiate !
            </p>
          </div>
        </div>

        <div class="px-1 flex justify-between items-center">
          <h3 class="font-serif text-xs font-extrabold uppercase tracking-widest text-valley-green">
            Catégories du Restaurant
          </h3>
          <span class="text-[10px] text-gray-400 font-mono">
            ${window.categories.length} Sections
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${window.categories.map((cat) => renderCategoryCardHtml(cat)).join("")}
        </div>
      </div>
    `;
  } else {
    // ACTIVE SELECTED CATEGORY PRODUCTS SCREEN
    const categoryProducts = state.selectedCategory.products.filter(matchesFilter);

    mainContentHtml = `
      <div id="products-container" class="space-y-4 animate-fade-in px-4">
        <button id="category-back-anchor" class="flex items-center gap-1 text-xs font-bold text-valley-green hover:underline cursor-pointer">
          ${getIconSvg("ArrowLeft", "w-3.5 h-3.5")}
          <span>Retour aux catégories</span>
        </button>

        <div class="relative p-5 rounded-3xl bg-valley-green overflow-hidden text-white min-h-[120px] flex flex-col justify-end shadow-md">
          ${
            state.selectedCategory.image
              ? `<img src="${state.selectedCategory.image}" alt="${state.selectedCategory.name}" class="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] saturate-[0.8]" referrerPolicy="no-referrer" />`
              : ""
          }
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute inset-1.5 border border-white/20 pointer-events-none rounded-2xl"></div>

          <div class="relative z-10 space-y-1">
            <h2 class="font-serif text-base font-black tracking-tight text-valley-cream">
              ${state.selectedCategory.name}
            </h2>
            <p class="text-[10px] text-gray-200 leading-relaxed italic max-w-sm">
              ${state.selectedCategory.description}
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${
            categoryProducts.length === 0
              ? `
            <div class="col-span-full p-10 text-center bg-white border border-gray-200 rounded-2xl text-xs text-gray-400">
              Aucun résultat pour cette catégorie de produits.
            </div>
          `
              : categoryProducts.map((prod) => renderProductCardHtml(prod)).join("")
          }
        </div>
      </div>
    `;
  }

  // Float menu basket sheet html
  const basketHtml = renderBasketSheetHtml();

  // Customizer modal layer html
  const customizerHtml = renderCustomizerModalHtml();

  // QR Modal layer html
  const qrModalHtml = `
    <div id="qr-modal-overlay" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs transition-opacity duration-300 ${
      state.isQROpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
    }">
      <div id="qr-modal-card" class="relative w-full max-w-xs bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transition-transform duration-300 transform ${
        state.isQROpen ? "scale-100" : "scale-95"
      }">
        <div class="h-4 bg-valley-green"></div>
        <button id="close-qr-modal-btn" class="absolute top-2 right-2 p-1 rounded-full bg-black/10 hover:bg-black/20 text-white cursor-pointer transition-colors">
          ${getIconSvg("X", "w-4 h-4")}
        </button>

        <div class="p-5 text-center">
          <h3 class="font-serif text-base font-bold text-valley-green">
            Affichage Table & Partage
          </h3>
          <p class="text-[11px] text-gray-500 mt-1 leading-normal">
            Partagez le menu d'une table avec vos collègues ou amis !
          </p>

          <div class="my-5 mx-auto w-40 h-40 p-2 bg-white rounded-xl border border-gray-100 flex items-center justify-center shadow-md">
            <img src="${qrCodeUrl}" alt="QR Code de la table" class="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>

          <div class="bg-gray-50 rounded-xl p-2.5 border border-gray-200 mb-2">
            <span class="block text-[9px] text-gray-400 font-mono truncate mb-1">
              ${currentUrl}
            </span>
            <div class="flex gap-1.5 justify-center">
              <button id="copy-table-link-btn" class="flex items-center gap-1 text-[10px] px-3 py-1.5 rounded-lg bg-valley-green text-valley-cream font-bold cursor-pointer transition-colors">
                ${getIconSvg("Copy", "w-3 h-3")}
                <span>Copier le lien</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Merge full dynamic body inside #root
  rootElement.innerHTML = `
    ${headerHtml}
    
    <div class="flex-1 w-full pb-10">
      ${filtersHtml}
      ${mainContentHtml}
    </div>

    ${basketHtml}
    ${customizerHtml}
    ${qrModalHtml}
  `;

  // Re-attach active interactive DOM listeners after writing body
  bindEventListeners();
}

// Helper to render HTML for a category card
function renderCategoryCardHtml(category) {
  return `
    <button
      data-id="${category.id}"
      class="category-grid-card relative flex flex-col w-full text-left bg-white rounded-2xl overflow-hidden border border-gray-200/60 shadow-xs active-card-feedback outline-none cursor-pointer group"
    >
      ${
        category.image
          ? `
        <div class="relative h-24 w-full bg-gray-100 overflow-hidden">
          <img src="${category.image}" alt="${category.name}" class="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <span class="absolute top-2 right-2 text-[9px] font-bold bg-valley-green text-valley-cream px-2 py-0.5 rounded-full font-mono">
            ${category.products.length} Choix
          </span>
        </div>
      `
          : ""
      }

      <div class="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-1">
            <span class="p-1 rounded-md bg-[#1A4329]/10 text-valley-green">
              ${getIconSvg(category.icon, "w-4 h-4")}
            </span>
            <h4 class="font-serif text-sm font-bold text-gray-800">${category.name}</h4>
          </div>
          <p class="text-[11px] text-gray-500 leading-normal line-clamp-2 italic">${category.description}</p>
        </div>

        <div class="flex items-center justify-between mt-2 pt-2 border-t border-gray-50 text-[10px] font-bold text-valley-green">
          <span>Consulter les choix</span>
          ${getIconSvg("ChevronRight", "w-3 h-3")}
        </div>
      </div>
    </button>
  `;
}

// Helper to render HTML for a product card
function renderProductCardHtml(product) {
  const isFav = state.favoriteIds.includes(product.id);
  const isMultiPrice = product.priceMedium !== undefined && product.priceGrande !== undefined;

  return `
    <div class="p-4 bg-white rounded-2xl border border-gray-200/70 shadow-xs flex flex-col justify-between min-h-[160px] hover:border-[#1A4329]/30 transition-all duration-200">
      <div>
        <div class="flex justify-between items-start gap-1">
          <h4 class="font-serif font-extrabold text-valley-green text-xs leading-snug tracking-tight">
            ${product.name}
          </h4>
          <button data-prod-id="${product.id}" class="favorite-toggle-btn p-1.5 rounded-full cursor-pointer transition-colors ${
            isFav ? "bg-amber-100 text-amber-600" : "bg-gray-50 text-gray-300 hover:text-gray-400"
          }">
            ${getIconSvg("Star", "w-3 h-3")}
          </button>
        </div>

        ${
          product.tags && product.tags.length > 0
            ? `
          <div class="flex flex-wrap gap-1 mt-1">
            ${product.tags
              .map(
                (tag) => `
              <span class="text-[8px] font-bold px-1.5 py-0.5 rounded bg-valley-green/5 text-valley-green uppercase tracking-wider">${tag}</span>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }

        ${
          product.composition
            ? `<p class="text-[11px] text-gray-500 mt-1.5 leading-normal italic">${product.composition}</p>`
            : ""
        }
        ${
          product.extraInfo
            ? `<span class="block mt-1 text-[8px] text-amber-800 font-extrabold uppercase mt-0.5">${product.extraInfo}</span>`
            : ""
        }
      </div>

      <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-50">
        <div>
          ${
            isMultiPrice
              ? `
            <div class="flex flex-col">
              <span class="text-[8px] text-gray-400 font-mono uppercase">Moy / Grd</span>
              <span class="text-[10px] font-black text-valley-green font-mono">${product.priceMedium} / ${product.priceGrande} DH</span>
            </div>
          `
              : `
            <div class="flex flex-col">
              <span class="text-[8px] text-gray-400 font-mono uppercase">Prix</span>
              <span class="text-xs font-black text-gray-800 font-mono">${product.price} DH</span>
            </div>
          `
          }
        </div>

        <button data-id="${product.id}" class="add-customizer-btn flex items-center gap-1.5 py-1 px-2.5 rounded-full text-[10px] font-extrabold bg-gray-100 text-gray-700 hover:bg-valley-green/10 active:scale-95 cursor-pointer transition-all">
          ${getIconSvg("Plus", "w-3 h-3")}
          <span>${isMultiPrice ? "Choisir" : "Ajouter"}</span>
        </button>
      </div>
    </div>
  `;
}

// Helper to render basket sheet HTML
function renderBasketSheetHtml() {
  if (state.orderChoices.length === 0) return "";

  const totalItemsCount = state.orderChoices.reduce((sum, item) => sum + item.quantity, 0);

  // Compute total price
  const totalPrice = state.orderChoices.reduce((sum, item) => {
    let price = item.product.price;
    if (item.size === "Moyenne" && item.product.priceMedium !== undefined) {
      price = item.product.priceMedium;
    } else if (item.size === "Grande" && item.product.priceGrande !== undefined) {
      price = item.product.priceGrande;
    }

    let extraCost = 0;
    if (item.selectedExtra === "+beurre") extraCost += 3;
    if (item.selectedExtra === "+fromage") extraCost += 5;
    if (item.selectedExtra === "+frites") extraCost += 10;
    if (item.selectedExtra === "+glace") extraCost += 10;

    return sum + (price + extraCost) * item.quantity;
  }, 0);

  return `
    <div class="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center p-0 xs:p-3 pointer-events-none">
      <div 
        class="w-full max-w-md bg-white border border-gray-200 pointer-events-auto rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
        style="max-height: ${state.isBasketExpanded ? "85vh" : "60px"};"
      >
        <!-- Peak Header bar -->
        <div id="basket-peek-header" class="h-16 px-4 bg-valley-green text-white flex items-center justify-between cursor-pointer select-none">
          <div class="flex items-center gap-2">
            <span class="relative p-2 rounded-lg bg-white/10 text-[#E6D5B8]">
              ${getIconSvg("ShoppingCart", "w-4 h-4")}
              <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-white text-[8px] font-black flex items-center justify-center animate-pulse">
                ${totalItemsCount}
              </span>
            </span>
            <div>
              <span class="text-[9px] text-[#E6D5B8]/80 uppercase tracking-widest font-mono block">Ma table</span>
              <span class="text-xs font-serif text-valley-cream font-bold">Consulter mon panier</span>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="text-right">
              <span class="text-[8px] text-[#E6D5B8]/60 uppercase font-mono block">Total</span>
              <span class="text-xs font-black text-amber-400 font-mono">${totalPrice} DH</span>
            </div>
            <span>
              ${getIconSvg(state.isBasketExpanded ? "ChevronDown" : "ChevronUp", "w-4 h-4 text-[#E6D5B8]")}
            </span>
          </div>
        </div>

        ${
          state.isBasketExpanded
            ? `
          <div class="flex flex-col bg-valley-cream max-h-[350px] overflow-hidden">
            <div class="flex-1 p-3.5 space-y-2.5 overflow-y-auto scrollbar-none">
              <div class="flex justify-between items-center pb-1.5 border-b border-gray-200/70">
                <span class="text-[10px] text-gray-400 font-mono uppercase font-bold">Sélection active</span>
                <button id="clear-basket-btn" class="text-[10px] font-bold text-red-600 hover:underline cursor-pointer">Tout effacer</button>
              </div>

              ${state.orderChoices
                .map((item, index) => {
                  let price = item.product.price;
                  if (item.size === "Moyenne" && item.product.priceMedium !== undefined) {
                    price = item.product.priceMedium;
                  } else if (item.size === "Grande" && item.product.priceGrande !== undefined) {
                    price = item.product.priceGrande;
                  }

                  let extraCost = 0;
                  let extraLabel = "";
                  if (item.selectedExtra === "+beurre") {
                    extraCost += 3;
                    extraLabel = "+ Portion beurre (+3 DH)";
                  } else if (item.selectedExtra === "+fromage") {
                    extraCost += 5;
                    extraLabel = "+ Option fromage/olive (+5 DH)";
                  } else if (item.selectedExtra === "+frites") {
                    extraCost += 10;
                    extraLabel = "+ Portion frites (+10 DH)";
                  } else if (item.selectedExtra === "+glace") {
                    extraCost += 10;
                    extraLabel = "+ Supp. Boule de glace (+10 DH)";
                  }

                  const rowTotal = (price + extraCost) * item.quantity;

                  return `
                    <div class="p-3 bg-white rounded-xl border border-gray-150 flex items-center justify-between shadow-xs">
                      <div class="flex-1 min-w-0 pr-2">
                        <span class="block text-xs font-bold text-gray-800 truncate">${item.product.name}</span>
                        <div class="flex flex-wrap gap-1 mt-0.5">
                          ${
                            item.size && item.size !== "Normal"
                              ? `<span class="text-[8px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-mono">${item.size}</span>`
                              : ""
                          }
                          ${
                            extraLabel
                              ? `<span class="text-[8px] text-amber-700 font-medium italic">${extraLabel}</span>`
                              : ""
                          }
                        </div>
                      </div>

                      <div class="flex items-center gap-2">
                        <div class="flex items-center bg-gray-50 border border-gray-200 p-0.5 rounded-full">
                          <button data-idx="${index}" class="basket-minus-btn w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono text-gray-500 cursor-pointer hover:bg-gray-200" ${
                            item.quantity <= 1 ? "disabled" : ""
                          }>-</button>
                          <span class="text-xs font-bold text-gray-800 w-4 text-center font-mono">${item.quantity}</span>
                          <button data-idx="${index}" class="basket-plus-btn w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono text-gray-500 cursor-pointer hover:bg-gray-200">+</button>
                        </div>

                        <span class="text-xs font-bold text-gray-700 font-mono w-12 text-right">${rowTotal} DH</span>

                        <button data-idx="${index}" class="basket-delete-btn p-1 text-gray-300 hover:text-red-500 cursor-pointer">
                          ${getIconSvg("Trash2", "w-3.5 h-3.5")}
                        </button>
                      </div>
                    </div>
                  `;
                })
                .join("")}
            </div>

            <div class="p-3 bg-white border-t border-gray-200">
              <div class="bg-amber-50/70 rounded-xl p-2.5 border border-amber-200/50 text-[10px] text-amber-900 leading-normal flex gap-1.5 items-start">
                <span class="text-xs">👋</span>
                <div>
                  <strong>Zéro papier:</strong> Présentez simplement cet écran au serveur pour l'aider à saisir instantanément votre commande sans attente !
                </div>
              </div>
              <button id="close-basket-tray-btn" class="w-full mt-2 py-2 text-[9px] font-bold text-center text-valley-green border border-valley-green/20 uppercase tracking-widest rounded-lg cursor-pointer hover:bg-gray-50">
                Fermer le panier
              </button>
            </div>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;
}

// Helper to calculate total price of current customizer model
function updateCustomizerTotal() {
  const prod = state.customizingProduct;
  if (!prod) return;

  let basePrice = prod.price;
  if (state.customSelectedSize === "Moyenne" && prod.priceMedium !== undefined) {
    basePrice = prod.priceMedium;
  } else if (state.customSelectedSize === "Grande" && prod.priceGrande !== undefined) {
    basePrice = prod.priceGrande;
  }

  let extra = 0;
  if (state.customSelectedExtra === "+beurre") extra += 3;
  if (state.customSelectedExtra === "+fromage") extra += 5;
  if (state.customSelectedExtra === "+frites") extra += 10;
  if (state.customSelectedExtra === "+glace") extra += 10;

  const totalSpan = document.getElementById("customizer-calculated-total");
  if (totalSpan) {
    totalSpan.textContent = `${basePrice + extra} DH`;
  }
}

// Helper to render customized options modal
function renderCustomizerModalHtml() {
  if (!state.customizingProduct) return "";

  const prod = state.customizingProduct;
  const isMultiPrice = prod.priceMedium !== undefined && prod.priceGrande !== undefined;

  return `
    <div id="customizer-overlay" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4">
      <div id="customizer-modal-card" class="w-full sm:max-w-md bg-valley-cream rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border-t sm:border border-gray-200 flex flex-col max-h-[90vh]">
        
        <div class="p-4 bg-valley-green text-valley-cream flex justify-between items-center border-b border-valley-greenLight">
          <div>
            <span class="text-[8px] uppercase tracking-widest text-[#E6D5B8] font-mono">Options</span>
            <h4 class="font-serif text-sm font-extrabold tracking-tight truncate max-w-xs">${prod.name}</h4>
          </div>
          <button id="close-customizer-btn" class="p-1 rounded-full bg-white/10 hover:bg-white/20 text-[#E6D5B8] cursor-pointer">
            ${getIconSvg("X", "w-4 h-4")}
          </button>
        </div>

        <div class="p-5 flex-1 overflow-y-auto space-y-4">
          ${
            prod.composition
              ? `
            <div class="bg-white rounded-xl p-3 border border-gray-150">
              <span class="text-[9px] text-gray-400 uppercase tracking-widest font-mono font-bold block mb-1">Ingrédients de base</span>
              <p class="text-[11px] text-gray-500 italic leading-relaxed">${prod.composition}</p>
            </div>
          `
              : ""
          }

          ${
            isMultiPrice
              ? `
            <div class="space-y-1.5">
              <label class="text-[10px] font-bold text-gray-600 block uppercase tracking-wider">Dimension</label>
              <div class="grid grid-cols-2 gap-3">
                <button id="size-medium-btn" class="customizer-size-btn p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                  state.customSelectedSize === "Moyenne"
                    ? "border-valley-green bg-valley-green/5 text-valley-green font-extrabold"
                    : "border-gray-200 bg-white text-gray-500"
                }">
                  <span class="text-[11px]">Moyenne Standard</span>
                  <span class="text-xs font-black font-mono mt-0.5">${prod.priceMedium} DH</span>
                </button>
                <button id="size-grande-btn" class="customizer-size-btn p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                  state.customSelectedSize === "Grande"
                    ? "border-valley-green bg-valley-green/5 text-valley-green font-extrabold"
                    : "border-gray-200 bg-white text-gray-500"
                }">
                  <span class="text-[11px]">Grande Portion</span>
                  <span class="text-xs font-black font-mono mt-0.5">${prod.priceGrande} DH</span>
                </button>
              </div>
            </div>
          `
              : ""
          }

          <div class="space-y-1.5">
            <label class="text-[10px] font-bold text-gray-600 block uppercase tracking-wider">Choix Supplémentaire</label>
            <div class="space-y-2">
              <label class="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white text-xs cursor-pointer hover:bg-gray-50">
                <div class="flex items-center gap-2">
                  <input type="radio" name="custom-extra" id="extra-none" ${!state.customSelectedExtra ? "checked" : ""} class="text-valley-green focus:ring-valley-green" />
                  <span class="text-gray-700 font-bold">Sans extra</span>
                </div>
                <span class="text-gray-400 font-mono">0 DH</span>
              </label>

              ${
                prod.id.startsWith("b_")
                  ? `
                <label class="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white text-xs cursor-pointer hover:bg-gray-50">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="custom-extra" id="extra-beurre" ${state.customSelectedExtra === "+beurre" ? "checked" : ""} class="text-valley-green focus:ring-valley-green" />
                    <span class="text-gray-700">Portion de Beurre Extra</span>
                  </div>
                  <span class="text-valley-green font-bold font-mono">+3 DH</span>
                </label>
                <label class="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white text-xs cursor-pointer hover:bg-gray-50">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="custom-extra" id="extra-fromage" ${state.customSelectedExtra === "+fromage" ? "checked" : ""} class="text-valley-green focus:ring-valley-green" />
                    <span class="text-gray-700">Fromage ou Option Huile</span>
                  </div>
                  <span class="text-valley-green font-bold font-mono">+5 DH</span>
                </label>
              `
                  : ""
              }

              ${
                !prod.id.startsWith("b_") && !prod.id.startsWith("gl_") && !prod.id.startsWith("d_")
                  ? `
                <label class="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white text-xs cursor-pointer hover:bg-gray-50">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="custom-extra" id="extra-frites" ${state.customSelectedExtra === "+frites" ? "checked" : ""} class="text-valley-green focus:ring-valley-green" />
                    <span class="text-gray-700">Portion frites chaudes</span>
                  </div>
                  <span class="text-valley-green font-bold font-mono">+10 DH</span>
                </label>
              `
                  : ""
              }

              ${
                prod.id.startsWith("d_") || prod.id.startsWith("gl_")
                  ? `
                <label class="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white text-xs cursor-pointer hover:bg-gray-50">
                  <div class="flex items-center gap-2">
                    <input type="radio" name="custom-extra" id="extra-glace" ${state.customSelectedExtra === "+glace" ? "checked" : ""} class="text-valley-green focus:ring-valley-green" />
                    <span class="text-gray-700">Boule de glace Oliveri</span>
                  </div>
                  <span class="text-valley-green font-bold font-mono">+10 DH</span>
                </label>
              `
                  : ""
              }
            </div>
          </div>
        </div>

        <div class="p-4 bg-white border-t border-gray-200 flex items-center justify-between gap-4">
          <div class="flex flex-col">
            <span class="text-[8px] text-gray-400 uppercase font-mono tracking-widest block">Total</span>
            <span id="customizer-calculated-total" class="text-[#1A4329] text-sm font-black font-mono">-- DH</span>
          </div>
          <button id="submit-customization-btn" class="flex-1 flex items-center justify-center gap-1 bg-valley-green text-valley-cream font-bold text-xs py-3 rounded-xl hover:bg-valley-greenLight shadow transition-all active:scale-95 cursor-pointer">
            ${getIconSvg("ShoppingCart", "w-3.5 h-3.5")}
            <span>Ajouter à ma sélection</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// BIND RE-ATTACH AND VANILLA DOM EVENTS
function bindEventListeners() {
  // Back button on single category header view
  const headerBackBtn = document.getElementById("header-back-btn");
  if (headerBackBtn) {
    headerBackBtn.addEventListener("click", () => {
      state.selectedCategory = null;
      state.searchQuery = "";
      render();
    });
  }

  // Inside layout categories back anchor link
  const categoryBackAnchor = document.getElementById("category-back-anchor");
  if (categoryBackAnchor) {
    categoryBackAnchor.addEventListener("click", () => {
      state.selectedCategory = null;
      state.searchQuery = "";
      render();
    });
  }

  // Reset filters
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      state.searchQuery = "";
      state.activeTag = null;
      render();
    });
  }

  // Search input typing handler
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      const caret = searchInput.selectionStart;
      render();
      const newSearchInput = document.getElementById("search-input");
      if (newSearchInput) {
        newSearchInput.focus();
        if (caret !== null) newSearchInput.setSelectionRange(caret, caret);
      }
    });
  }

  // Tag filter button selectors
  const tagButtons = document.querySelectorAll(".tag-filter-button");
  tagButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");
      state.activeTag = tag === "Toutes" ? null : tag;
      render();
    });
  });

  // Category selection clicks
  const categoryCards = document.querySelectorAll(".category-grid-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const catId = card.getAttribute("data-id");
      const found = window.categories.find((c) => c.id === catId);
      if (found) {
        state.selectedCategory = found;
        state.searchQuery = "";
        window.scrollTo({ top: 0, behavior: "smooth" });
        render();
      }
    });
  });

  // Star favorites toggle
  const favButtons = document.querySelectorAll(".favorite-toggle-btn");
  favButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute("data-prod-id");
      if (prodId) {
        if (state.favoriteIds.includes(prodId)) {
          state.favoriteIds = state.favoriteIds.filter((id) => id !== prodId);
        } else {
          state.favoriteIds.push(prodId);
        }
        render();
      }
    });
  });

  // Adding product customizations
  const addCustomizerButtons = document.querySelectorAll(".add-customizer-btn");
  addCustomizerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodId = btn.getAttribute("data-id");
      let targetProduct = null;
      for (const cat of window.categories) {
        const found = cat.products.find((p) => p.id === prodId);
        if (found) {
          targetProduct = found;
          break;
        }
      }

      if (targetProduct) {
        state.customizingProduct = targetProduct;
        state.customSelectedSize = "Moyenne";
        state.customSelectedExtra = null;
        render();
        updateCustomizerTotal();
      }
    });
  });

  // Close Customizer modal
  const closeCustomizerBtn = document.getElementById("close-customizer-btn");
  if (closeCustomizerBtn) {
    closeCustomizerBtn.addEventListener("click", () => {
      state.customizingProduct = null;
      render();
    });
  }

  // Click outside customizer overlay to close
  const customizerOverlay = document.getElementById("customizer-overlay");
  if (customizerOverlay) {
    customizerOverlay.addEventListener("click", (e) => {
      if (e.target === customizerOverlay) {
        state.customizingProduct = null;
        render();
      }
    });
  }

  // Size selectors inside customizer modal
  const sizeMediumBtn = document.getElementById("size-medium-btn");
  if (sizeMediumBtn) {
    sizeMediumBtn.addEventListener("click", () => {
      state.customSelectedSize = "Moyenne";
      render();
      updateCustomizerTotal();
    });
  }
  const sizeGrandeBtn = document.getElementById("size-grande-btn");
  if (sizeGrandeBtn) {
    sizeGrandeBtn.addEventListener("click", () => {
      state.customSelectedSize = "Grande";
      render();
      updateCustomizerTotal();
    });
  }

  // Extra options radios
  const radioNone = document.getElementById("extra-none");
  if (radioNone) {
    radioNone.addEventListener("change", () => {
      state.customSelectedExtra = null;
      updateCustomizerTotal();
    });
  }
  const radioBeurre = document.getElementById("extra-beurre");
  if (radioBeurre) {
    radioBeurre.addEventListener("change", () => {
      state.customSelectedExtra = "+beurre";
      updateCustomizerTotal();
    });
  }
  const radioFromage = document.getElementById("extra-fromage");
  if (radioFromage) {
    radioFromage.addEventListener("change", () => {
      state.customSelectedExtra = "+fromage";
      updateCustomizerTotal();
    });
  }
  const radioFrites = document.getElementById("extra-frites");
  if (radioFrites) {
    radioFrites.addEventListener("change", () => {
      state.customSelectedExtra = "+frites";
      updateCustomizerTotal();
    });
  }
  const radioGlace = document.getElementById("extra-glace");
  if (radioGlace) {
    radioGlace.addEventListener("change", () => {
      state.customSelectedExtra = "+glace";
      updateCustomizerTotal();
    });
  }

  // Submit customization selections to basket
  const submitCustomBtn = document.getElementById("submit-customization-btn");
  if (submitCustomBtn) {
    submitCustomBtn.addEventListener("click", () => {
      const prod = state.customizingProduct;
      if (prod) {
        // Add to state choices
        state.orderChoices.push({
          product: prod,
          quantity: 1,
          size: (prod.priceMedium !== undefined && prod.priceGrande !== undefined) ? state.customSelectedSize : "Normal",
          selectedExtra: state.customSelectedExtra,
        });
        state.customizingProduct = null;
        state.isBasketExpanded = true;
        render();
      }
    });
  }

  // Header QR code click toggle
  const headerQRBtn = document.getElementById("header-qr-btn");
  if (headerQRBtn) {
    headerQRBtn.addEventListener("click", () => {
      state.isQROpen = true;
      render();
    });
  }

  // Close QR overlay
  const closeQRBtn = document.getElementById("close-qr-modal-btn");
  if (closeQRBtn) {
    closeQRBtn.addEventListener("click", () => {
      state.isQROpen = false;
      render();
    });
  }

  // Copy shareable table coordinate link
  const copyLinkBtn = document.getElementById("copy-table-link-btn");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      copyToClipboard(window.location.href, copyLinkBtn);
    });
  }

  // Click outside QR overlay to close
  const qrOverlay = document.getElementById("qr-modal-overlay");
  if (qrOverlay) {
    qrOverlay.addEventListener("click", (e) => {
      if (e.target === qrOverlay) {
        state.isQROpen = false;
        render();
      }
    });
  }

  // Basket Peek Bar Toggle
  const basketPeekHeader = document.getElementById("basket-peek-header");
  if (basketPeekHeader) {
    basketPeekHeader.addEventListener("click", () => {
      state.isBasketExpanded = !state.isBasketExpanded;
      render();
    });
  }

  // Basket item controls
  const basketPlusBtns = document.querySelectorAll(".basket-plus-btn");
  basketPlusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-idx"));
      if (state.orderChoices[idx]) {
        state.orderChoices[idx].quantity += 1;
        render();
      }
    });
  });

  const basketMinusBtns = document.querySelectorAll(".basket-minus-btn");
  basketMinusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-idx"));
      if (state.orderChoices[idx] && state.orderChoices[idx].quantity > 1) {
        state.orderChoices[idx].quantity -= 1;
        render();
      }
    });
  });

  const basketDeleteBtns = document.querySelectorAll(".basket-delete-btn");
  basketDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute("data-idx"));
      state.orderChoices.splice(idx, 1);
      if (state.orderChoices.length === 0) {
        state.isBasketExpanded = false;
      }
      render();
    });
  });

  // Clear entire basket selection
  const clearBasketBtn = document.getElementById("clear-basket-btn");
  if (clearBasketBtn) {
    clearBasketBtn.addEventListener("click", () => {
      state.orderChoices = [];
      state.isBasketExpanded = false;
      render();
    });
  }

  const closeBasketTrayBtn = document.getElementById("close-basket-tray-btn");
  if (closeBasketTrayBtn) {
    closeBasketTrayBtn.addEventListener("click", () => {
      state.isBasketExpanded = false;
      render();
    });
  }
}

// BOOT APPLICATION
document.addEventListener("DOMContentLoaded", () => {
  // Hide loader indicator
  const loader = document.getElementById("init-loader");
  if (loader) {
    loader.remove();
  }

  // Start pristine rendering loop
  render();
});
