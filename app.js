// ===== ESTRUTURA DE DADOS DO CARDÁPIO =====
const menu = [
  {
    category: "Lanches",
    items: [
      ,
      {
        id: "combo-festa",
        name: "Combo festa",
        price: 15.0,
        image: "assets/images/combo-festa.jpg",
        description: "Torta super recheada + salgados",
        hasOptions: false,
      },
      {
        id: "Torta",
        name: "Torta",
        price: 7.0,
        image: "assets/images/lanche-torta.jpg",
        description: "Fatia de torta, com muito recheio",
        hasOptions: false,
      },
      {
        id: "Empadão",
        name: "Empadão de frango",
        price: 14.0,
        image: "assets/images/lanches-empadao.jpg",
        description: "Empadão com frango cremoso",
        hasOptions: false,
      },
    ],
  },
  {
    category: "Salgados",
    items: [
      {
        id: "coxinha",
        name: "Coxinha de frango",
        price: 5.0,
        image: "assets/images/salgados-coxinha.jpg",
        description: "Coxinha de frango",
        hasOptions: false,
      },
      {
        id: "joelho",
        name: "joelho de presunto e queijo",
        price: 3.0,
        image: "assets/images/salgado-joelho-queijo.jpg",
        description: "Joelho de presunto com queijo",
        hasOptions: false,
      },
      {
        id: "coxinha",
        name: "Coxinha de frango com requeijão",
        price: 5.0,
        image: "assets/images/salgados-coxinha-re.jpg",
        description: "Coxinha de frango com requeijão",
        hasOptions: false,
      },
      {
        id: "pastel-frito",
        name: "Pastel Frito",
        price: 5.0,
        image: "assets/images/salgados-pastel.jpg",
        description: "Pastel frito com recheio à sua escolha",
        hasOptions: true,
        options: {
          sabores: [
            "Queijo coalho",
            "Queijo mussarela",
            "Frango desfiado",
            "Carne moida",
            "Cheddar",
            "Catupiry",
            "Presunto",
            "Salsinha",
          ],
          maxSabores: 1,
        },
      },
      {
        id: "empada",
        name: "Empada",
        price: 3.0,
        image: "assets/images/salgados-empada.jpg",
        description: "Empada de frango",
        hasOptions: false,
      },
      {
        id: "esfirra",
        name: "Esfirra de carne",
        price: 3.0,
        image: "assets/images/salgados-esfirra.jpg",
        description: "Esfirra recheada de carne",
        hasOptions: false,
      },
      {
        id: "joelho-frango",
        name: "Joelho de frango com queijo",
        price: 3.0,
        image: "assets/images/salgados-joelho.jpg",
        description: "Joelho recheado com frango e queijo",
        hasOptions: false,
      },
      {
        id: "hamburguer-forno",
        name: "Hambúrguer de forno",
        price: 4.0,
        image: "assets/images/salgados-hamburguer.jpg",
        description: "Hambúrguer assado no forno",
        hasOptions: false,
      },
      {
        id: "Pastel de forno",
        name: "Pastel de forno",
        price: 3.0,
        image: "assets/images/salgados-forno.jpg",
        description: "Pastel de forno sabor de frango",
        hasOptions: false,
      },
      {
        id: "risole",
        name: "Risole",
        price: 3.0,
        image: "assets/images/salgados-risole.jpg",
        description: "Melhor risole da região",
        hasOptions: false,
      },
      {
        id: "enroladinho-salsicha",
        name: "Enroladinho de salsicha",
        price: 3.0,
        image: "assets/images/salgados-enroladinho.jpg",
        description: "Enroladinho de salsicha com massa crocante",
        hasOptions: false,
      },
    ],
  },

  {
    category: "Combos",
    items: [
      {
        id: "combo-20",
        name: "20 Salgados",
        price: 10.0,
        image: "assets/images/combos-100.jpg",
        description: "20 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-30",
        name: "30 Salgados",
        price: 15.0,
        image: "assets/images/combos-100.jpg",
        description: "30 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-40",
        name: "40 Salgados",
        price: 20.0,
        image: "assets/images/combos-100.jpg",
        description: "40 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-50",
        name: "50 Salgados",
        price: 25.0,
        image: "assets/images/combos-100.jpg",
        description: "50 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-70",
        name: "70 Salgados",
        price: 35.0,
        image: "assets/images/combos-100.jpg",
        description: "70 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-80",
        name: "80 Salgados",
        price: 40.0,
        image: "assets/images/combos-100.jpg",
        description: "80 salgados sortidos",
        hasOptions: false,
      },
      {
        id: "combo-100",
        name: "100 Salgados",
        price: 50.0,
        image: "assets/images/combos-100.jpg",
        description: "100 salgados sortidos",
        hasOptions: false,
      },
    ],
  },
  {
    category: "Bebidas",
    items: [
      {
        id: "refri-250ml",
        name: "Refrigerante 250 ml",
        price: 3.0,
        image: "assets/images/bebidas-refri250.jpg",
        description: "Refrigerante em garrafa de 250ml",
        hasOptions: false,
      },
      {
        id: "refri-250ml",
        name: "Coca-cola 350 ml",
        price: 5.0,
        image: "assets/images/bebidas-refrilata.jpg",
        description: "Refrigerante em garrafa de 250ml",
        hasOptions: false,
      },
      {
        id: "refri-lata",
        name: "Guaraná Antártica 350 ml",
        price: 5.0,
        image: "assets/images/bebidas-guarana.jpg",
        description: "Guaraná Antártica lata",
        hasOptions: false,
      },
    ],
  },
  {
    category: "Frios",
    items: [
      {
        id: "cremosinho",
        name: "Cremosinho Original",
        price: 2.0,
        image: "assets/images/frios-cremosinho.jpg",
        description: "Cremosinho original da casa",
        hasOptions: false,
      },
      {
        id: "moreninha",
        name: "Moreninha",
        price: 3.0,
        image: "assets/images/frios-moreninha.jpg",
        description: "Sabor irresistível da Moreninha",
        hasOptions: false,
      },
      {
        id: "Sorvete",
        name: "Sorvete Copão",
        price: 5.0,
        image: "assets/images/frios-sorvete.jpg",
        description: "Sorvete de Mano",
        hasOptions: false,
      },
      {
        id: "Dudu",
        name: "Dudu",
        price: 1.0,
        image: "assets/images/frios-dudu.jpg",
        description: "Dudu de frutas",
        hasOptions: false,
      },
      {
        id: "Picole",
        name: "Picolé de Mano",
        price: 3.0,
        image: "assets/images/frios-picole.jpg",
        description: "Melhor Picolé da região",
        hasOptions: false,
      },
    ],
  },
];

// ===== VARIÁVEIS GLOBAIS =====
let cart = [];
let currentCategory = "all";
let filteredProducts = [];
let currentProductForOptions = null;
let favorites = [];

// ===== HORÁRIOS DE FUNCIONAMENTO =====
const openingHours = {
  1: { open: "10:00", close: "19:30" },
  2: { open: "08:00", close: "21:00" },
  3: { open: "08:00", close: "21:00" },
  4: { open: "08:00", close: "21:00" },
  5: { open: "08:00", close: "21:00" },
  6: { open: "08:00", close: "21:30" },
  0: { open: "08:00", close: "21:30" },
};

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  // Carrega dados do localStorage
  loadCart();
  loadFavorites();

  // Renderiza a interface
  renderCategories();
  renderProducts();
  renderCart();
  updateCartBadge();
  updateOpeningHoursDisplay();

  // Verifica se a loja está aberta
  checkStoreStatus();

  // Configura os event listeners
  setupEventListeners();

  // Configura o scroll para a seção fixa
  setupFixedMenuSection();

  // Adiciona fallback para imagens
  setupImageFallbacks();
}

// ===== CONFIGURAÇÃO DE IMAGENS =====
function setupImageFallbacks() {
  // Adiciona fallback para todas as imagens do menu
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("error", function () {
        this.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBNODAgMTAwSDE0ME04MCAxNDBIMTIwIiBzdHJva2U9IiM2NjY2NjYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjY2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+SW1hZ2VtIG5hbyBjYXJyZWdhZGE8L3RleHQ+Cjwvc3ZnPg==";
        this.alt = "Imagem não disponível";
      });
    });
  });
}

// ===== CONFIGURAÇÃO DA SEÇÃO FIXA =====
function setupFixedMenuSection() {
  const menuFixedSection = document.getElementById("menu-fixed");
  const menuSection = document.getElementById("menu");

  if (!menuFixedSection || !menuSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          menuFixedSection.classList.add("sticky-visible");
        } else {
          menuFixedSection.classList.remove("sticky-visible");
        }
      });
    },
    { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
  );

  observer.observe(menuSection);
}

// ===== CONFIGURAÇÃO DE EVENT LISTENERS =====
function setupEventListeners() {
  // Menu mobile
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Fecha menu ao clicar em um link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Pesquisa
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterProducts(this.value);
    });

    // Enter para pesquisar
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        filterProducts(this.value);
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      filterProducts(searchInput.value);
    });
  }

  // Modal de endereço
  const addressModal = document.getElementById("address-modal");
  const closeAddressModal = document.getElementById("close-address-modal");
  const checkoutBtn = document.getElementById("checkout-btn");
  const addressForm = document.getElementById("address-form");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      if (cart.length === 0) {
        showToast("Seu carrinho está vazio", "error");
        return;
      }
      addressModal.classList.add("active");
    });
  }

  if (closeAddressModal) {
    closeAddressModal.addEventListener("click", function () {
      addressModal.classList.remove("active");
    });
  }

  if (addressForm) {
    addressForm.addEventListener("submit", function (e) {
      e.preventDefault();
      processOrder();
    });
  }

  // Modal de opções
  const optionsModal = document.getElementById("options-modal");
  const closeOptionsModal = document.getElementById("close-options-modal");
  const optionsForm = document.getElementById("options-form");

  if (closeOptionsModal) {
    closeOptionsModal.addEventListener("click", function () {
      optionsModal.classList.remove("active");
      resetOptionsForm();
    });
  }

  if (optionsForm) {
    optionsForm.addEventListener("submit", function (e) {
      e.preventDefault();
      addProductWithOptions();
    });
  }

  // Fechar modais ao clicar fora
  [addressModal, optionsModal].forEach((modal) => {
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.classList.remove("active");
          if (modal === optionsModal) resetOptionsForm();
        }
      });
    }
  });

  // Carrinho flutuante
  const cartFloating = document.getElementById("cart-floating");
  if (cartFloating) {
    cartFloating.addEventListener("click", function () {
      document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Swipe para categorias em mobile
  setupSwipeNavigation();
}

// ===== SWIPE PARA NAVEGAÇÃO EM MOBILE =====
function setupSwipeNavigation() {
  let startX = 0;
  let endX = 0;
  const categoriesContainer = document.getElementById("categories");

  if (categoriesContainer && window.innerWidth <= 768) {
    categoriesContainer.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    categoriesContainer.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });
  }
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = startX - endX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe para esquerda - próxima categoria
      navigateCategories(1);
    } else {
      // Swipe para direita - categoria anterior
      navigateCategories(-1);
    }
  }
}

function navigateCategories(direction) {
  const categories = menu.map((cat) => cat.category);
  categories.unshift("all");

  const currentIndex = categories.indexOf(currentCategory);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) newIndex = categories.length - 1;
  if (newIndex >= categories.length) newIndex = 0;

  currentCategory = categories[newIndex];
  renderCategories();
  renderProducts();
}

// ===== RENDERIZAÇÃO DA INTERFACE =====
function renderCategories() {
  const categoriesContainer = document.getElementById("categories");
  if (!categoriesContainer) return;

  categoriesContainer.innerHTML = "";

  // Botão "Todos"
  const allButton = createCategoryButton("all", "Todos");
  categoriesContainer.appendChild(allButton);

  // Botões para cada categoria
  menu.forEach((category) => {
    const button = createCategoryButton(category.category, category.category);
    categoriesContainer.appendChild(button);
  });

  // Adiciona indicador de scroll em mobile
  if (window.innerWidth <= 768) {
    categoriesContainer.classList.add("scrollable");
  } else {
    categoriesContainer.classList.remove("scrollable");
  }
}

function createCategoryButton(categoryId, text) {
  const button = document.createElement("button");
  button.className = `category-btn ${
    currentCategory === categoryId ? "active" : ""
  }`;
  button.textContent = text;
  button.addEventListener("click", function () {
    currentCategory = categoryId;
    renderCategories();
    renderProducts();

    // Scroll suave para a seção de produtos
    document.getElementById("menu").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
  return button;
}

function renderProducts() {
  const productsContainer = document.getElementById("products");
  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  // Filtra produtos
  let productsToRender =
    currentCategory === "all"
      ? menu.flatMap((cat) => cat.items)
      : menu.find((cat) => cat.category === currentCategory)?.items || [];

  // Aplica filtro de pesquisa
  if (filteredProducts.length > 0) {
    productsToRender = filteredProducts;
  }

  // Renderiza produtos ou mensagem de vazio
  if (productsToRender.length === 0) {
    productsContainer.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente alterar os filtros ou termos de pesquisa</p>
      </div>
    `;
    return;
  }

  // Renderiza os produtos
  productsToRender.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });

  // Anima a entrada dos produtos
  animateProductsEntrance();
}

function animateProductsEntrance() {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("animate-in");
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const cartItem = cart.find((item) => item.id === product.id && !item.options);
  const quantity = cartItem ? cartItem.quantity : 0;
  const isFavorite = favorites.includes(product.id);

  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.image}" alt="${
    product.name
  }" class="product-image" loading="lazy">
      <button class="favorite-btn ${
        isFavorite ? "active" : ""
      }" data-product-id="${product.id}">
        <i class="fas fa-heart"></i>
      </button>
      ${
        product.hasOptions
          ? '<span class="customizable-badge">Personalizável</span>'
          : ""
      }
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-price">R$ ${product.price.toFixed(2)}</div>
      <div class="product-actions">
        <div class="quantity-controls ${quantity > 0 ? "active" : ""}">
          <button class="quantity-btn decrease" ${
            quantity === 0 ? "disabled" : ""
          }>
            <i class="fas fa-minus"></i>
          </button>
          <span class="quantity-display">${quantity}</span>
          <button class="quantity-btn increase">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <button class="btn btn-primary add-to-cart" ${
          quantity > 0 ? 'style="display:none"' : ""
        }>
          <i class="fas fa-shopping-cart"></i>
          Adicionar
        </button>
      </div>
    </div>
  `;

  // Adiciona event listeners
  setupProductCardEvents(card, product, quantity);
  return card;
}

function setupProductCardEvents(card, product, quantity) {
  const decreaseBtn = card.querySelector(".decrease");
  const increaseBtn = card.querySelector(".increase");
  const addToCartBtn = card.querySelector(".add-to-cart");
  const favoriteBtn = card.querySelector(".favorite-btn");

  decreaseBtn.addEventListener("click", () => {
    updateProductQuantity(product.id, quantity - 1);
    renderProducts();
    renderCart();
    updateCartBadge();
  });

  increaseBtn.addEventListener("click", () => {
    if (product.hasOptions) {
      showOptionsModal(product);
    } else {
      updateProductQuantity(product.id, quantity + 1);
      renderProducts();
      renderCart();
      updateCartBadge();
    }
  });

  addToCartBtn.addEventListener("click", () => {
    if (product.hasOptions) {
      showOptionsModal(product);
    } else {
      updateProductQuantity(product.id, 1);
      renderProducts();
      renderCart();
      updateCartBadge();
    }
  });

  favoriteBtn.addEventListener("click", () => {
    toggleFavorite(product.id);
    renderProducts();
  });
}

// ===== SISTEMA DE FAVORITOS =====
function loadFavorites() {
  const savedFavorites = localStorage.getItem("tiaCleideFavorites");
  if (savedFavorites) {
    try {
      favorites = JSON.parse(savedFavorites);
    } catch (e) {
      console.error("Erro ao carregar favoritos:", e);
      favorites = [];
    }
  }
}

function saveFavorites() {
  localStorage.setItem("tiaCleideFavorites", JSON.stringify(favorites));
}

function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removido dos favoritos", "info");
  } else {
    favorites.push(productId);
    showToast("Adicionado aos favoritos", "success");
  }
  saveFavorites();
}

// ===== MODAL DE OPÇÕES (MELHORADO) =====
function showOptionsModal(product) {
  currentProductForOptions = product;
  const optionsModal = document.getElementById("options-modal");
  const modalTitle = document.getElementById("options-modal-title");

  modalTitle.textContent = `Personalizar ${product.name}`;

  // Limpa seções anteriores
  document.getElementById("sabores-section").style.display = "none";
  document.getElementById("acompanhamentos-section").style.display = "none";
  document.getElementById("sabor-unico-section").style.display = "none";
  document.getElementById("selected-options").innerHTML = "";

  // Configura opções baseadas no produto
  if (product.id === "pastelao") {
    setupPastelaoOptions();
  } else if (product.id === "pastel-frito") {
    setupPastelFritoOptions();
  }

  optionsModal.classList.add("active");

  // Foca no primeiro elemento interativo
  setTimeout(() => {
    const firstInput = optionsModal.querySelector("input");
    if (firstInput) firstInput.focus();
  }, 300);
}

function setupPastelaoOptions() {
  const product = currentProductForOptions;

  // Seção de sabores
  document.getElementById("sabores-section").style.display = "block";
  const saboresContainer = document.getElementById("sabores-options");
  saboresContainer.innerHTML = "";

  product.options.sabores.forEach((sabor, index) => {
    const checkbox = createOptionCheckbox("sabores", sabor, index);
    saboresContainer.appendChild(checkbox);
  });

  // Seção de acompanhamentos
  document.getElementById("acompanhamentos-section").style.display = "block";
  const acompanhamentosContainer = document.getElementById(
    "acompanhamentos-options"
  );
  acompanhamentosContainer.innerHTML = "";

  product.options.acompanhamentos.forEach((acompanhamento, index) => {
    const checkbox = createOptionCheckbox(
      "acompanhamentos",
      acompanhamento,
      index
    );
    acompanhamentosContainer.appendChild(checkbox);
  });

  updateSaboresCounter();
  updateAcompanhamentosCounter();
}

function setupPastelFritoOptions() {
  const product = currentProductForOptions;

  document.getElementById("sabor-unico-section").style.display = "block";
  const saborContainer = document.getElementById("sabor-unico-options");
  saborContainer.innerHTML = "";

  product.options.sabores.forEach((sabor, index) => {
    const radio = document.createElement("div");
    radio.className = "option-checkbox";
    radio.innerHTML = `
      <input type="radio" id="sabor-${index}" name="sabor" value="${sabor}">
      <label for="sabor-${index}">${sabor}</label>
    `;

    const input = radio.querySelector("input");
    input.addEventListener("change", updateSelectedOptions);
    saborContainer.appendChild(radio);
  });
}

function createOptionCheckbox(name, value, index) {
  const checkbox = document.createElement("div");
  checkbox.className = "option-checkbox";
  checkbox.innerHTML = `
    <input type="checkbox" id="${name}-${index}" name="${name}" value="${value}">
    <label for="${name}-${index}">${value}</label>
  `;

  const input = checkbox.querySelector("input");
  input.addEventListener("change", function () {
    updateSelectedOptions();
    if (name === "sabores") updateSaboresCounter();
    if (name === "acompanhamentos") updateAcompanhamentosCounter();
  });

  return checkbox;
}

function updateSaboresCounter() {
  const selectedSabores = document.querySelectorAll(
    'input[name="sabores"]:checked'
  ).length;
  const maxSabores = currentProductForOptions.options.maxSabores;

  updateOptionCounter("sabores", selectedSabores, maxSabores);

  // Desabilita/abilita checkboxes
  document.querySelectorAll('input[name="sabores"]').forEach((checkbox) => {
    const parent = checkbox.parentElement;
    checkbox.disabled = selectedSabores >= maxSabores && !checkbox.checked;
    parent.classList.toggle("disabled", checkbox.disabled);
  });
}

function updateAcompanhamentosCounter() {
  const selectedAcompanhamentos = document.querySelectorAll(
    'input[name="acompanhamentos"]:checked'
  ).length;
  const maxAcompanhamentos =
    currentProductForOptions.options.maxAcompanhamentos;

  updateOptionCounter(
    "acompanhamentos",
    selectedAcompanhamentos,
    maxAcompanhamentos
  );

  document
    .querySelectorAll('input[name="acompanhamentos"]')
    .forEach((checkbox) => {
      const parent = checkbox.parentElement;
      checkbox.disabled =
        selectedAcompanhamentos >= maxAcompanhamentos && !checkbox.checked;
      parent.classList.toggle("disabled", checkbox.disabled);
    });
}

function updateOptionCounter(type, selected, max) {
  let counter = document.getElementById(`${type}-counter`);
  if (!counter) {
    counter = document.createElement("div");
    counter.className = "option-counter";
    counter.id = `${type}-counter`;
    document.getElementById(`${type}-section`).appendChild(counter);
  }
  counter.textContent = `Selecionados: ${selected}/${max}`;
  counter.className = `option-counter ${
    selected >= max ? "limit-reached" : ""
  }`;
}

function updateSelectedOptions() {
  const selectedContainer = document.getElementById("selected-options");
  selectedContainer.innerHTML =
    "<h4>Opções Selecionadas:</h4><ul class='selected-options-list'></ul>";
  const list = selectedContainer.querySelector(".selected-options-list");

  // Sabores
  document
    .querySelectorAll('input[name="sabores"]:checked')
    .forEach((checkbox) => {
      const li = document.createElement("li");
      li.textContent = `Sabor: ${checkbox.value}`;
      list.appendChild(li);
    });

  // Acompanhamentos
  document
    .querySelectorAll('input[name="acompanhamentos"]:checked')
    .forEach((checkbox) => {
      const li = document.createElement("li");
      li.textContent = `Acompanhamento: ${checkbox.value}`;
      list.appendChild(li);
    });

  // Sabor único
  const selectedSabor = document.querySelector('input[name="sabor"]:checked');
  if (selectedSabor) {
    const li = document.createElement("li");
    li.textContent = `Sabor: ${selectedSabor.value}`;
    list.appendChild(li);
  }

  // Esconde se não há opções
  if (list.children.length === 0) {
    selectedContainer.innerHTML = "";
  }
}

function addProductWithOptions() {
  if (!currentProductForOptions) return;

  let optionsText = "";
  let isValid = true;

  if (currentProductForOptions.id === "pastelao") {
    const selectedSabores = Array.from(
      document.querySelectorAll('input[name="sabores"]:checked')
    ).map((cb) => cb.value);
    const selectedAcompanhamentos = Array.from(
      document.querySelectorAll('input[name="acompanhamentos"]:checked')
    ).map((cb) => cb.value);

    if (selectedSabores.length === 0) {
      showToast("Selecione pelo menos 1 sabor", "error");
      isValid = false;
    } else {
      optionsText = `Sabores: ${selectedSabores.join(", ")}`;
      if (selectedAcompanhamentos.length > 0) {
        optionsText += ` | Acompanhamentos: ${selectedAcompanhamentos.join(
          ", "
        )}`;
      }
    }
  } else if (currentProductForOptions.id === "pastel-frito") {
    const selectedSabor = document.querySelector('input[name="sabor"]:checked');
    if (!selectedSabor) {
      showToast("Selecione um sabor", "error");
      isValid = false;
    } else {
      optionsText = `Sabor: ${selectedSabor.value}`;
    }
  }

  if (!isValid) return;

  // Adiciona ao carrinho
  const cartItem = {
    id: currentProductForOptions.id,
    name: currentProductForOptions.name,
    price: currentProductForOptions.price,
    quantity: 1,
    options: optionsText,
  };

  const existingIndex = cart.findIndex(
    (item) => item.id === cartItem.id && item.options === cartItem.options
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  renderProducts();
  renderCart();
  updateCartBadge();

  // Fecha modal
  document.getElementById("options-modal").classList.remove("active");
  resetOptionsForm();

  showToast("Item adicionado ao carrinho", "success");
}

function resetOptionsForm() {
  currentProductForOptions = null;
  document.getElementById("options-form").reset();
  document.getElementById("selected-options").innerHTML = "";
}

// ===== CARRINHO (MELHORADO) =====
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione alguns produtos deliciosos!</p>
        <a href="#menu" class="btn btn-primary">Ver Cardápio</a>
      </div>
    `;

    if (subtotalElement) subtotalElement.textContent = "R$ 0,00";
    if (totalElement) totalElement.textContent = "R$ 0,00";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let subtotal = 0;

  cart.forEach((item, index) => {
    const product = findProductById(item.id);
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    const cartItemElement = createCartItemElement(
      item,
      product,
      index,
      itemTotal
    );
    cartItemsContainer.appendChild(cartItemElement);
  });

  // Atualiza totais
  if (subtotalElement)
    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
  if (totalElement) totalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

function createCartItemElement(item, product, index, itemTotal) {
  const element = document.createElement("div");
  element.className = "cart-item";
  element.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
    <div class="cart-item-details">
      <h4 class="cart-item-name">${product.name}</h4>
      ${item.options ? `<p class="cart-item-options">${item.options}</p>` : ""}
      <div class="cart-item-price">R$ ${itemTotal.toFixed(2)}</div>
    </div>
    <div class="cart-item-actions">
      <div class="quantity-controls">
        <button class="quantity-btn decrease">
          <i class="fas fa-minus"></i>
        </button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="quantity-btn increase">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <button class="remove-item" aria-label="Remover item">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

  // Event listeners
  const decreaseBtn = element.querySelector(".decrease");
  const increaseBtn = element.querySelector(".increase");
  const removeBtn = element.querySelector(".remove-item");

  decreaseBtn.addEventListener("click", () => {
    if (item.quantity > 1) {
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    saveCart();
    renderProducts();
    renderCart();
    updateCartBadge();
  });

  increaseBtn.addEventListener("click", () => {
    cart[index].quantity += 1;
    saveCart();
    renderProducts();
    renderCart();
    updateCartBadge();
  });

  removeBtn.addEventListener("click", () => {
    cart.splice(index, 1);
    saveCart();
    renderProducts();
    renderCart();
    updateCartBadge();
    showToast("Item removido do carrinho", "info");
  });

  return element;
}

// ===== GERENCIAMENTO DO CARRINHO =====
function updateProductQuantity(productId, newQuantity) {
  const itemIndex = cart.findIndex(
    (item) => item.id === productId && !item.options
  );

  if (newQuantity <= 0) {
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      showToast("Item removido do carrinho", "info");
    }
  } else {
    if (itemIndex === -1) {
      cart.push({ id: productId, quantity: newQuantity });
      showToast("Item adicionado ao carrinho", "success");
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
  }

  saveCart();
}

function loadCart() {
  const savedCart = localStorage.getItem("tiaCleideCart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      console.error("Erro ao carregar carrinho:", e);
      cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem("tiaCleideCart", JSON.stringify(cart));
}

function updateCartBadge() {
  const cartBadge = document.getElementById("cart-badge");
  if (cartBadge) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems === 0 ? "none" : "flex";

    // Animação do badge
    if (totalItems > 0) {
      cartBadge.classList.add("pulse");
      setTimeout(() => cartBadge.classList.remove("pulse"), 600);
    }
  }
}

// ===== PESQUISA E FILTROS =====
function filterProducts(searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") {
    filteredProducts = [];
    renderProducts();
    return;
  }

  const term = searchTerm.toLowerCase().trim();
  filteredProducts = menu.flatMap((category) =>
    category.items.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    )
  );

  renderProducts();
}

// ===== VERIFICAÇÃO DE HORÁRIO =====
function isOpen(now = new Date()) {
  const day = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const hours = openingHours[day];
  if (!hours) return false;

  const openTime = timeToMinutes(hours.open);
  const closeTime = timeToMinutes(hours.close);

  return currentTime >= openTime && currentTime <= closeTime;
}

function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
}

function checkStoreStatus() {
  const statusIndicator = document.getElementById("status-indicator");
  const statusText = document.getElementById("status-text");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (!statusIndicator || !statusText) return;

  const now = new Date();
  const open = isOpen(now);

  if (open) {
    statusIndicator.className = "status-indicator open";
    statusText.textContent = "Aberto agora - Pedidos online disponíveis";
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
  } else {
    statusIndicator.className = "status-indicator closed";
    statusText.textContent = "Fechado no momento - Agende seu pedido";
    if (checkoutBtn) checkoutBtn.disabled = true;
  }
}

function updateOpeningHoursDisplay() {
  const openingHoursContainer = document.getElementById("opening-hours");
  if (!openingHoursContainer) return;

  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  let html = "";
  for (let i = 0; i <= 6; i++) {
    const hours = openingHours[i];
    if (hours) {
      const isToday = new Date().getDay() === i;
      html += `<li class="${isToday ? "today" : ""}">
        <span>${days[i]}:</span> 
        <span>${hours.open} - ${hours.close}</span>
        ${isToday ? '<span class="today-badge">Hoje</span>' : ""}
      </li>`;
    }
  }

  openingHoursContainer.innerHTML = html;
}

// ===== PROCESSAMENTO DO PEDIDO =====
function processOrder() {
  const addressForm = document.getElementById("address-form");
  const formData = new FormData(addressForm);

  const address = {
    name: formData.get("name"),
    street: formData.get("street"),
    number: formData.get("number"),
    complement: formData.get("complement"),
    neighborhood: formData.get("neighborhood"),
    city: formData.get("city"),
    notes: formData.get("notes"),
  };

  // Validação
  if (
    !address.name ||
    !address.street ||
    !address.number ||
    !address.neighborhood ||
    !address.city
  ) {
    showToast("Preencha todos os campos obrigatórios", "error");
    return;
  }

  // Verifica horário
  if (!isOpen()) {
    showToast(
      "A lanchonete está fechada no momento. Você pode agendar o pedido.",
      "error"
    );
    return;
  }

  const message = buildWhatsAppMessage(cart, address);

  // Fecha modal
  document.getElementById("address-modal").classList.remove("active");

  // Abre WhatsApp
  window.open(message, "_blank");

  // Limpa carrinho
  cart = [];
  saveCart();
  renderCart();
  renderProducts();
  updateCartBadge();

  showToast("Pedido enviado com sucesso!", "success");
}

// ===== BUILD WHATSAPP MESSAGE (FORMATADA CORRETAMENTE) =====
// ===== BUILD WHATSAPP MESSAGE (CORRIGIDA - SEM ESCAPE DUPLO) =====
function buildWhatsAppMessage(cart, address) {
  const phoneNumber = "5581995428388";

  let message = `*🍔 NOVO PEDIDO - LANCHONETE TIA CLEIDE*

`;

  // ===== DADOS DO CLIENTE =====
  message += `*👤 DADOS DO CLIENTE*
Nome: ${address.name}
Telefone: [Cliente informará]

`;

  // ===== ITENS DO PEDIDO =====
  message += `*🛒 ITENS DO PEDIDO*

`;

  let total = 0;
  cart.forEach((item, index) => {
    const product = findProductById(item.id);
    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      message += `*${index + 1}. ${product.name}*
   🔹 Quantidade: ${item.quantity}
   🔹 Preço: R$ ${product.price.toFixed(2)}`;

      if (item.options) {
        message += `
   🔹 Personalização: ${item.options}`;
      }

      message += `
   🔹 Subtotal: R$ ${itemTotal.toFixed(2)}

`;
    }
  });

  // ===== RESUMO DO VALOR =====
  message += `*💰 RESUMO DO VALOR*
Subtotal: R$ ${total.toFixed(2)}
Taxa de entrega: A combinar
*TOTAL: R$ ${total.toFixed(2)}*

`;

  // ===== ENDEREÇO DE ENTREGA =====
  message += `*📍 ENDEREÇO DE ENTREGA*
${address.street}, ${address.number}`;

  if (address.complement) {
    message += `
${address.complement}`;
  }

  message += `
Bairro: ${address.neighborhood}
Cidade: ${address.city}
CEP: ${address.zipcode}

`;

  // ===== OBSERVAÇÕES =====
  if (address.notes && address.notes.trim() !== "") {
    message += `*📝 OBSERVAÇÕES*
${address.notes}

`;
  }

  // ===== HORÁRIO =====
  message += `*⏰ HORÁRIO DO PEDIDO*
${new Date().toLocaleTimeString("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
})}

`;

  message += `_📱 Pedido enviado automaticamente pelo site_`;

  // Debug: mostra a mensagem no console
  console.log("Mensagem formatada:");
  console.log(message);

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
// ===== UTILITÁRIOS =====
function findProductById(id) {
  for (const category of menu) {
    const product = category.items.find((item) => item.id === id);
    if (product) return product;
  }
  return null;
}

function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast ${type} show`;

  // Remove após 3 segundos
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ===== FUNÇÕES PARA TESTE =====
window.testStoreStatus = function (hours, minutes) {
  const testDate = new Date();
  testDate.setHours(hours);
  testDate.setMinutes(minutes);
  return isOpen(testDate);
};

// ===== DIAGNÓSTICO DE IMAGENS =====
function diagnoseImages() {
  console.log("🔍 INICIANDO DIAGNÓSTICO DE IMAGENS...");

  menu.forEach((category) => {
    console.log(`\\n📁 Categoria: ${category.category}`);
    category.items.forEach((product) => {
      const img = new Image();
      img.onload = function () {
        console.log(`✅ ${product.image} - CARREGADA`);
      };
      img.onerror = function () {
        console.log(`❌ ${product.image} - NÃO ENCONTRADA (404)`);
      };
      img.src = product.image;
    });
  });
}

// Executa diagnóstico quando a página carregar
window.addEventListener("load", function () {
  setTimeout(diagnoseImages, 1000);
});
