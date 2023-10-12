// Отримуємо параметр search з URL
// const urlParams = new URLSearchParams(window.location.search);
// const searchText = urlParams.get('search');

const searchText = localStorage.getItem('searchText');
const itemsPerPage = 10; // Задайте кількість товарів на сторінці
let currentPage = 1;

// Масив з карточками товарів
var products = [{
        name: "Товар 1",
        description: "Опис товару 1",
        tags: "Білий, Сумка1, v1, піпі",
        category: "Аксесуари",
        price: "500",
        sizes: ["S", "M", "L"]
    },
    {
        name: "Товар 2",
        description: "Опис товару 2",
        tags: "Чорний, Сумка2, v2",
        category: "Одяг",
        sizes: ["150мл", "250мл", "350мл"],
        price: "500",
    },
    {
        name: "Товар 3",
        description: "Опис товару 3",
        tags: "Синій, Сумка3, v3",
        category: "Білизна",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 4",
        description: "Опис товару 4",
        tags: "Голубий, Сумка4, v4",
        category: "Косметика",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 6",
        description: "Опис товару 6",
        tags: "Білий",
        category: "Аксесуари",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 7",
        description: "Опис товару 7",
        tags: "Чорний",
        category: "Аксесуари",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 8",
        description: "Опис товару 8",
        tags: "Синій",
        category: "Аксесуари",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 9",
        description: "Опис товару 9",
        tags: "Голубий",
        category: "Білизна",
        sizes: ["S", "M", "L"],
        price: "500",
    },
    {
        name: "Товар 10",
        description: "Опис товару 10",
        tags: "Зелений",
        category: "Білизна",
        sizes: ["150мл", "250мл", "350мл"],
        price: "500",
    }
];

function createProductCardPopup(product) {
    const productCard = document.createElement('div');
    // $('.cart_add').on('click', addToCart);
    productCard.classList.add('popup');
    productCard.innerHTML = `
                <div class="popup__nav">
                <h1>Про товар</h1>
                <img onclick="closePopup()" style="width: 35px;
             height: 35px;" src="./img/cross.svg" alt="">
            </div>
            <div class="popup__main">
                <h1 class="popup__main-title" id="popupTitle">${product.name}</h1>
                <div class="popup__main-block">
                    <img src="./img/bombshell.webp" alt="">
                    <div class="popup__main-block_text">
                        <h3>Бренд: Victoria’s Secret</h3>
                        <h1>${product.price}</h1>
                        <h3 style="margin-top: 5px;">Кількість:</h3>
                        <div class="popup__main-block_count">
                            <button class="popup__main-block_count_minus minus" data-art="${product.name}">-</button>
                            <h1 style="margin-top: 0;" class="item-quantity">1</h1>
                            <button class="popup__main-block_count_plus plus" data-art="${product.name}">+</button>
                        </div>
                        <h3 style="display: flex; margin-top: 5px;"> Розмір: </h3>
                        <div class="popup__main-block_size">
                            ${product.sizes.map(size => `<button class="product-moin" value="${size}">${size}</button>`).join('')} 
                        </div>
                        <div class="popup__main-block_add cart_add" data-art="${product.name}">
                            <h1 style="font-size: 13px; margin-top: 0; margin-right: 5px;">Додати в кошик</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 22 22" fill="none">
                                <path d="M21.8081 4.3659C21.7317 4.27439 21.636 4.20078 21.528 4.15027C21.4199 4.09977 21.3021 4.0736 21.1828 4.07362H4.75392L4.25592 1.33818C4.18771 0.962735 3.98989 0.623132 3.69695 0.378584C3.40402 0.134036 3.03454 5.51511e-05 2.65295 0H0.814724C0.598646 0 0.391418 0.0858368 0.238627 0.238627C0.0858367 0.391418 0 0.598646 0 0.814725C0 1.0308 0.0858367 1.23803 0.238627 1.39082C0.391418 1.54361 0.598646 1.62945 0.814724 1.62945H2.64785L5.2509 15.9167C5.32758 16.3404 5.51483 16.7363 5.79371 17.0644C5.4088 17.4239 5.13098 17.883 4.99106 18.3908C4.85114 18.8986 4.85458 19.4352 5.00101 19.9411C5.14744 20.447 5.43113 20.9025 5.82062 21.257C6.21011 21.6116 6.69019 21.8513 7.20762 21.9497C7.72505 22.048 8.25961 22.0012 8.75202 21.8143C9.24444 21.6274 9.67547 21.3077 9.99732 20.8908C10.3192 20.4739 10.5193 19.976 10.5754 19.4523C10.6316 18.9286 10.5416 18.3996 10.3154 17.9239H14.941C14.7588 18.3055 14.6644 18.7231 14.665 19.146C14.665 19.71 14.8323 20.2613 15.1456 20.7303C15.4589 21.1992 15.9043 21.5647 16.4253 21.7805C16.9464 21.9963 17.5197 22.0528 18.0729 21.9428C18.626 21.8327 19.1341 21.5612 19.5329 21.1624C19.9317 20.7636 20.2033 20.2555 20.3133 19.7023C20.4233 19.1492 20.3669 18.5758 20.151 18.0548C19.9352 17.5337 19.5697 17.0884 19.1008 16.7751C18.6319 16.4617 18.0806 16.2945 17.5166 16.2945H7.65535C7.46456 16.2945 7.27982 16.2275 7.13335 16.1052C6.98688 15.9829 6.88797 15.8131 6.85387 15.6254L6.53103 13.8503H18.3445C18.9169 13.8502 19.4711 13.6493 19.9105 13.2824C20.35 12.9156 20.6467 12.4062 20.749 11.843L21.9874 5.03398C22.0083 4.91629 22.0031 4.79543 21.9722 4.67998C21.9412 4.56452 21.8852 4.45729 21.8081 4.3659ZM8.96197 19.146C8.96197 19.3877 8.89029 19.624 8.75601 19.825C8.62172 20.026 8.43086 20.1826 8.20755 20.2751C7.98425 20.3676 7.73852 20.3918 7.50146 20.3446C7.2644 20.2975 7.04665 20.1811 6.87574 20.0102C6.70482 19.8393 6.58843 19.6215 6.54128 19.3844C6.49412 19.1474 6.51832 18.9017 6.61082 18.6784C6.70332 18.455 6.85996 18.2642 7.06093 18.1299C7.2619 17.9956 7.49818 17.9239 7.73988 17.9239C8.064 17.9239 8.37484 18.0527 8.60403 18.2819C8.83321 18.5111 8.96197 18.8219 8.96197 19.146ZM18.7387 19.146C18.7387 19.3877 18.667 19.624 18.5327 19.825C18.3984 20.026 18.2076 20.1826 17.9842 20.2751C17.7609 20.3676 17.5152 20.3918 17.2782 20.3446C17.0411 20.2975 16.8233 20.1811 16.6524 20.0102C16.4815 19.8393 16.3651 19.6215 16.318 19.3844C16.2708 19.1474 16.295 18.9017 16.3875 18.6784C16.48 18.455 16.6366 18.2642 16.8376 18.1299C17.0386 17.9956 17.2749 17.9239 17.5166 17.9239C17.8407 17.9239 18.1515 18.0527 18.3807 18.2819C18.6099 18.5111 18.7387 18.8219 18.7387 19.146ZM19.146 11.5518C19.1118 11.74 19.0125 11.9102 18.8654 12.0326C18.7183 12.1549 18.5328 12.2216 18.3415 12.2209H6.23468L5.05027 5.70307H20.2062L19.146 11.5518Z" fill="black">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>`;

    productCard.innerHTML
    // Attach the click event handler directly to the button element
    // productCard.querySelector('.open').addEventListener('click', () => openProductPopup());
    // const addToCartButton = productCard.querySelector('.cart_add');
    // addToCartButton.addEventListener('click', addToCart);
    // productCard.querySelector('.open').addEventListener('click', openProductPopup);
    const minusToCartButton = productCard.querySelector('.popup__main-block_count_minus');
    minusToCartButton.addEventListener('click', minusGoods);
    const plusToCartButton = productCard.querySelector('.popup__main-block_count_plus');
    plusToCartButton.addEventListener('click', plusGoods);

    const addToCartButton = productCard.querySelector('.cart_add');
    addToCartButton.addEventListener('click', addToCart);
    const sizeButtons = productCard.querySelectorAll('.product-moin');

    sizeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Видаляємо клас "dsdded" з інших кнопок розміру
            sizeButtons.forEach(otherButton => otherButton.classList.remove('dsdded'));

            // Додаємо клас "dsdded" до обраного розміру
            button.classList.add('dsdded');
        });
    });


    return productCard;

}

function closePopup() {
    popup_overview = document.querySelector(".popup-overview")
    popup_overview.innerHTML = ""
}

function openProductPopup(event) {
    popup_overview = document.querySelector(".popup-overview")
    popup_overview.innerHTML = ""
    const target = event.currentTarget; // Отримуємо елемент, на який було натиснуто
    const productName = target.getAttribute('data-art'); // Отримуємо атрибут data-art, який містить назву продукту
    const product = products.find(item => item.name === productName); // Знаходимо обраний продукт у масиві

    console.log(target)
    console.log(productName)
    console.log(product)

    if (product) {
        // const popup = document.getElementById("productPopup");
        // const titleElement = document.getElementById("popupTitle");
        // const descriptionElement = document.getElementById("popupDescription");

        // // Встановлюємо дані у вікні popup
        // titleElement.textContent = product.name;
        // descriptionElement.textContent = product.description;
        const productCard = createProductCardPopup(product);
        popup_overview.appendChild(productCard);

        // Відображаємо popup
        // popup.style.display = "block";
    }
}

// window.addEventListener("click", (event) => {
//     const popup = document.getElementById("productPopup");
//     if (event.target === popup) {
//         popup.style.display = "none";
//     }
// });



function createProductCard(product) {
    const productCard = document.createElement('div');
    // $('.cart_add').on('click', addToCart);
    productCard.classList.add('card');
    productCard.innerHTML = `
                <div class="card__block-icons">
                    <div class="card__block-icon">
                        <h2>Закінчується</h2>
                    </div>
                </div>
                <div class="card__block">
                    <div class="card__block-img">
                        <img src="./img/case.webp" alt="">
                        <div class="card__block-img_circles">
                            <div class="card__block-img_circle">
                                <button class="open" data-art="${product.name}">
                                    <h1>Перегляд</h1>
                                    <img src="./img/lope.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class = "card__block-item" >
                        <h2>${product.name}</h2> 
                        <h1>${product.price} UAN </h1> 
                    </div>
                </div>`;
    // Attach the click event handler directly to the button element
    // productCard.querySelector('.open').addEventListener('click', () => openProductPopup());
    // const addToCartButton = productCard.querySelector('.cart_add');
    // addToCartButton.addEventListener('click', addToCart);
    productCard.querySelector('.open').addEventListener('click', openProductPopup);

    return productCard;

}

function updatePaginationControls() {
    const totalPageCount = Math.ceil(products.length / itemsPerPage);
    const paginationElement = document.getElementById('paginationControls');
    paginationElement.innerHTML = '';

    const currentPageElement = document.getElementById('currentPage'); // Отримуємо елемент для відображення поточної сторінки

    // Додаємо кнопку "Назад"
    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayAllProducts(currentPage);
            updatePaginationControls();
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
        }
    });
    paginationElement.appendChild(prevButton);

    for (let i = 1; i <= totalPageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;

        // Перевіряємо, чи ця кнопка представляє поточну сторінку
        if (i === currentPage) {
            pageButton.classList.add("active"); // Додаємо клас "active" для підсвічування
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayAllProducts(currentPage);
            updatePaginationControls();
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
        });
        paginationElement.appendChild(pageButton);
    }

    // Додаємо кнопку "Вперед"
    const nextButton = document.createElement('button');
    nextButton.textContent = '»';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPageCount) {
            currentPage++;
            displayAllProducts(currentPage);
            updatePaginationControls();
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
        }
    });
    paginationElement.appendChild(nextButton);

    // Оновлюємо текст поточної сторінки при першому завантаженні
    currentPageElement.textContent = `Сторінка: ${currentPage}`;
}
// Викликаємо функцію для відображення всіх товарів
function displayProducts(currentPage) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ``;
    document.getElementById("search_h2").innerHTML = '';
    document.getElementById('productList').style.display = "block";

    const filteredProducts = products.filter(product => {
        return product.category.toLowerCase().includes(searchText.toLowerCase());

    });

    const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationElement = document.getElementById('paginationControls');
    paginationElement.innerHTML = '';

    const currentPageElement = document.getElementById('currentPage'); // Отримуємо елемент для відображення поточної сторінки

    // Додаємо кнопку "Назад"
    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
        }
    });
    paginationElement.appendChild(prevButton);

    for (let i = 1; i <= totalPageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add("ssdssd")
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;

            // Видаляємо клас "active" з попередньої активної кнопки
            const activeButton = paginationElement.querySelector(".active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }

            // Додаємо клас "active" до нової активної кнопки
            pageButton.classList.add("active");
        });
        paginationElement.appendChild(pageButton);

        // Перевіряємо, чи поточна кнопка є активною
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
    }

    // Додаємо кнопку "Вперед"
    const nextButton = document.createElement('button');
    nextButton.classList.add("ssdssd")
    nextButton.textContent = '»';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPageCount) {
            currentPage++;
            displayProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
            nextButton.click()

            // Видаляємо клас "active" з попередньої активної кнопки
            const activeButton = paginationElement.querySelector(".active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }

            // Додаємо клас "active" до нової активної кнопки
            pageButton.classList.add("active");
        }
    });
    paginationElement.appendChild(nextButton);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

    if (filteredProducts.length === 0) {
        searchResults.innerText = 'Нічого не знайдено.';
        document.getElementById("search_h2").innerHTML = 'Пусто';
    } else {
        document.getElementById('productList').style.display = "none";
        document.getElementById("search_h2").innerHTML = searchText;
        productsToDisplay.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });

    }

}

function displayAllProducts(page) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        searchResults.appendChild(productCard);
    });

    updatePaginationControls();
}

// Викликаємо функцію для відображення товарів за текстом пошуку
if (searchText) {
    displayProducts(currentPage);

    function displayFilterProducts(currentPage) {
        const searchResults = document.getElementById('searchResults');
        const categoryFilter = document.getElementById('categoryFilter');
        const selectedCategory = categoryFilter.value;
        document.getElementById('productList').style.display = "block";
        searchResults.innerHTML = ``;
        document.getElementById("activefilter_h2").innerHTML = '';
        // document.getElementById("search_h2").innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;


        const filteredProductsSearch = products.filter(product => {
            return product.category.toLowerCase().includes(searchText.toLowerCase());

        });


        const filteredProducts = filteredProductsSearch.filter(product => {
            return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
        });


        const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);
        const paginationElement = document.getElementById('paginationControls');
        paginationElement.innerHTML = '';

        const currentPageElement = document.getElementById('currentPage'); // Отримуємо елемент для відображення поточної сторінки

        // Додаємо кнопку "Назад"
        const prevButton = document.createElement('button');
        prevButton.textContent = '«';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayFilterProducts(currentPage);
                // Оновлюємо текст поточної сторінки
                currentPageElement.textContent = `Сторінка: ${currentPage}`;
            }
        });
        paginationElement.appendChild(prevButton);

        for (let i = 1; i <= totalPageCount; i++) {
            const pageButton = document.createElement('button');
            pageButton.classList.add("ssdssd")
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayFilterProducts(currentPage);
                // Оновлюємо текст поточної сторінки
                currentPageElement.textContent = `Сторінка: ${currentPage}`;

                // Видаляємо клас "active" з попередньої активної кнопки
                const activeButton = paginationElement.querySelector(".active");
                if (activeButton) {
                    activeButton.classList.remove("active");
                }

                // Додаємо клас "active" до нової активної кнопки
                pageButton.classList.add("active");
            });
            paginationElement.appendChild(pageButton);

            // Перевіряємо, чи поточна кнопка є активною
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
        }

        // Додаємо кнопку "Вперед"
        const nextButton = document.createElement('button');
        nextButton.classList.add("ssdssd")
        nextButton.textContent = '»';
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPageCount) {
                currentPage++;
                displayFilterProducts(currentPage);
                // Оновлюємо текст поточної сторінки
                currentPageElement.textContent = `Сторінка: ${currentPage}`;
                nextButton.click()

                // Видаляємо клас "active" з попередньої активної кнопки
                const activeButton = paginationElement.querySelector(".active");
                if (activeButton) {
                    activeButton.classList.remove("active");
                }

                // Додаємо клас "active" до нової активної кнопки
                pageButton.classList.add("active");
            }
        });
        paginationElement.appendChild(nextButton);


        if (categoryFilter.value === 'Всі' || filteredProducts.length === 0) {

            if (categoryFilter.value === 'Всі') {
                document.getElementById("activefilter_h2").innerHTML = "Усі товари";
                displayProducts(currentPage)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Вибачте...',
                    text: 'Немає товарів за потбірбним вам фільтром',
                }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }
                })
                document.getElementById("activefilter_h2").innerHTML = "Усі товари";
                displayProducts(currentPage)
            }
        }
        // Відображаємо всі товари на поточній сторінці
        // updatePaginationControls(); // Оновлюємо пагінацію
        else {
            document.getElementById('productList').style.display = "none";
            document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
        }

        // Відображаємо товари з урахуванням пагінації
        const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
        productsToDisplay.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });


        // filteredProducts.forEach(product => {
        //     const productCard = createProductCard(product);
        //     searchResults.appendChild(productCard);
        // });

        // const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
        // productsToDisplay.forEach(product => {
        //     const productCard = createProductCard(product);
        //     searchResults.appendChild(productCard);
        // });
    }
} else {
    displayAllProducts(currentPage);
    document.querySelector('.paginationControls button').click();
    // Якщо текст пошуку не вказаний, відображаємо всі товари
}

function displayFilterProducts(currentPage) {
    const searchResults = document.getElementById('searchResults');
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    document.getElementById('productList').style.display = "block";
    searchResults.innerHTML = ``;
    document.getElementById("activefilter_h2").innerHTML = '';

    // Отримуємо поточну сторінку та визначаємо діапазон відображення товарів
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Фільтруємо товари за категорією
    const filteredProducts = products.filter(product => {
        return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
    });

    const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationElement = document.getElementById('paginationControls');
    paginationElement.innerHTML = '';

    const currentPageElement = document.getElementById('currentPage'); // Отримуємо елемент для відображення поточної сторінки

    // Додаємо кнопку "Назад"
    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayFilterProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
        }
    });
    paginationElement.appendChild(prevButton);

    for (let i = 1; i <= totalPageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add("ssdssd")
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayFilterProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;

            // Видаляємо клас "active" з попередньої активної кнопки
            const activeButton = paginationElement.querySelector(".active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }

            // Додаємо клас "active" до нової активної кнопки
            pageButton.classList.add("active");
        });
        paginationElement.appendChild(pageButton);

        // Перевіряємо, чи поточна кнопка є активною
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
    }

    // Додаємо кнопку "Вперед"
    const nextButton = document.createElement('button');
    nextButton.classList.add("ssdssd")
    nextButton.textContent = '»';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPageCount) {
            currentPage++;
            displayFilterProducts(currentPage);
            // Оновлюємо текст поточної сторінки
            currentPageElement.textContent = `Сторінка: ${currentPage}`;
            nextButton.click()

            // Видаляємо клас "active" з попередньої активної кнопки
            const activeButton = paginationElement.querySelector(".active");
            if (activeButton) {
                activeButton.classList.remove("active");
            }

            // Додаємо клас "active" до нової активної кнопки
            pageButton.classList.add("active");
        }
    });
    paginationElement.appendChild(nextButton);

    // Якщо вибрано "Усі товари" або немає результатів пошуку, то відображаємо всі товари
    if (categoryFilter.value === 'Всі' || filteredProducts.length === 0) {

        if (categoryFilter.value === 'Всі') {
            // document.getElementById("activefilter_h2").innerHTML = "Усі товари";
            // displayProducts(currentPage)
            location.reload()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Вибачте...',
                text: 'Немає товарів за потбірбним вам фільтром',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }
            })
            document.getElementById("activefilter_h2").innerHTML = "Усі товари";
            displayProducts(currentPage)
        }
    } else {
        document.getElementById('productList').style.display = "none";
        document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
    }

    // Відображаємо товари з урахуванням пагінації
    const productsToDisplay = filteredProducts.slice(startIndex, endIndex);
    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        searchResults.appendChild(productCard);
    });
}

// function createProductCard(product) {
//     const productCard = document.createElement('div');
//     // $('.cart_add').on('click', addToCart);
//     productCard.classList.add('card');
//     productCard.innerHTML = `
//                 <div class="card__block-icons">
//                     <div class="card__block-icon">
//                         <h2>Закінчується</h2>
//                     </div>
//                 </div>
//                 <div class="card__block">
//                     <div class="card__block-img">
//                         <img src="./img/case.webp" alt="">
//                         <div class="card__block-img_circles">
//                             <div class="card__block-img_circle">
//                                 <button class="cart_add" data-art="${product.name}" title="Додати в корзину">
//                                     <img src="./img/cart.svg" alt="">
//                                 </button>
//                             </div>
//                             <div class="card__block-img_circle">
//                                 <a href title="Переглянути">
//                                     <img src="./img/lope.svg" alt="">
//                                 </a>
//                             </div>
//                             <div class="card__block-img_circle">
//                                 <a href title="Додати в уподобане">
//                                     <img src="./img/heart.svg" alt="">
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class = "card__block-item" >
//                         <h2>${product.name}</h2> 
//                         <h3> Розмір:
//                             <select class = "product-size" >
//                             ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')} 
//                             </select> 
//                         </h3>
//                         <h1>${product.price} UAN </h1> 
//                     </div>
//                 </div>`;
//     // Attach the click event handler directly to the button element
//     const addToCartButton = productCard.querySelector('.cart_add');
//     addToCartButton.addEventListener('click', addToCart);
//     return productCard;

// }

function createProductCardCart(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('cart__blocks');
    productCard.innerHTML = `
                        <div class="cart__blocks-desk">
                            <img src="./img/bombshell.webp" alt="">
                            <div class="cart__blocks-desk-h1">
                                <h1 data-art="${product.name}"></h1>
                            </div>
                        </div>
                        <div class="cart__blocks-sizes">
                            <h1 class="cart__blocks-size item-size">0</h1>
                        </div>
                        <div class="cart__blocks-count">
                            <button class="cart__blocks-count_minus minus" data-art="${product.name}">-</button>
                            <h1 class="item-quantity">0</h1>
                            <button class="cart__blocks-count_plus plus" data-art="${product.name}">+</button>
                        </div>
                        <div class="cart__blocks-delete">
                            <!-- <button ></button> -->
                            <h1 class="cart__blocks-delete delete" data-art="${product.name}">x</h1>
                        </div>
                        <div class="cart__blocks-price">
                            <h1>0</h1>
                        </div>
    `;

    // jQuery('#my-cart').html(out);
    // jQuery('.cart__blocks-count_plus').on('click', plusGoods);
    // jQuery('.cart__blocks-count_minus').on('click', minusGoods);
    const minusToCartButton = productCard.querySelector('.cart__blocks-count_minus');
    minusToCartButton.addEventListener('click', minusGoods);
    const addToCartButton = productCard.querySelector('.cart__blocks-count_plus');
    addToCartButton.addEventListener('click', plusGoods);
    const deleteToCartButton = productCard.querySelector('.cart__blocks-delete');
    deleteToCartButton.addEventListener('click', deleteGoods);
    return productCard;

}



var cart = {};
var maxItems = 3;

jQuery(document).ready(function () {
    checkCart(); // Перевірити наявність кошика в localStorage
    // Показати вміст кошика
    showMiniCart();
    // bindPopups();
    console.log(cart)
    showCart();

    olef()

    // const plusButtons = document.querySelectorAll('.cart__blocks-count_plus');
    // plusButtons.forEach(button => {
    //     button.addEventListener('click', plusGoods);
    // });

    // const minusButtons = document.querySelectorAll('.cart__blocks-count_minus');
    // minusButtons.forEach(button => {
    //     button.addEventListener('click', minusGoods);
    // });

    // const deleteButtons = document.querySelectorAll('.cart__blocks-delete.delete');
    // deleteButtons.forEach(button => {
    //     button.addEventListener('click', deleteGoods);
    // });
});


function addToCart() {
    var articul = $(this).data('art');
    var selectedSize = $(this).closest('.popup').find('.product-moin.dsdded').val();
    var selectedquantity = $(this).closest('.popup').find('.item-quantity').text();
    console.log(selectedSize)

    if (cart === undefined) {
        cart = {};
    }

    var selectedProduct = products.find(product => product.name === articul);

    if (!selectedProduct) {
        Swal.fire(
            'Помилка',
            'Вибраний товар не знайдений',
            'error'
        );
        return;
    }

    if (!selectedProduct.sizes || !selectedProduct.sizes.includes(selectedSize)) {
        Swal.fire(
            'Помилка',
            'Обраний розмір не відповідає списку доступних розмірів для цього товару',
            'error'
        );
        return;
    }

    var cartKey = `${articul}:${selectedSize}`; // Додаємо розмір до ключа кошика

    var cartItem = {
        name: articul,
        size: selectedSize,
        quantity: selectedquantity,
        // Додайте інші дані товару за потреби
    };

    if (Object.keys(cart || {}).length >= maxItems && cart[cartKey] === undefined) {
        Swal.fire(
            'Помилка',
            'Досягнута максимальна кількість елементів (' + maxItems + ') в кошику',
            'error'
        );
        return;
    }

    if (cart[cartKey] != undefined) {
        cart[cartKey].quantity++;
    } else {
        cart[cartKey] = cartItem;
        alert("Все круто товар добавлено")
        closePopup()
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateTotalItemsAndPriceOnHomePage();
    showMiniCart();
}

function plusGoods() {
    const itemQuantity = document.querySelector('.item-quantity'); // Отримуємо елемент, який має містити кількість товару
    let plus_ok = parseInt(itemQuantity.textContent); // Отримуємо поточну кількість товару і перетворюємо її в число

    plus_ok = plus_ok + 1; // Збільшуємо кількість товару на одиницю

    itemQuantity.textContent = plus_ok; // Оновлюємо відображену кількість товару
}

// Функція, що видаляє товар із кошика
function minusGoods() {
    const itemQuantity = document.querySelector('.item-quantity'); // Отримуємо елемент, який містить кількість товару
    let currentQuantity = parseInt(itemQuantity.textContent); // Отримуємо поточну кількість товару і перетворюємо її в число

    if (currentQuantity > 1) { // Перевіряємо, чи кількість більше 1
        currentQuantity = currentQuantity - 1; // Зменшуємо кількість товару на одиницю
        itemQuantity.textContent = currentQuantity; // Оновлюємо відображену кількість товару
    }
}

function deleteGoods(event) {
    if (!cart) {
        // Якщо cart порожній або відсутній, спробуйте отримати дані з localStorage
        var storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    }

    var articul = $(event.target).data('art');
    var selectedSize = $(event.target).closest('.cart__blocks').find('.item-size').text();
    var cartKey = `${articul}:${selectedSize}`;

    if (cart[cartKey] && cart[cartKey].quantity > 0) {
        delete cart[cartKey];
        saveCartToLS();
        showMiniCart();
    }
}

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

function showCart() {
    if (cart === undefined) {
        cart = {};
    }

    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartContainer = document.getElementById("my-cart");
    cartContainer.innerHTML = '';

    // Змінна для збереження загальної ціни
    var totalPrice = 0;

    // Проходимося по всіх елементах кошика
    for (var cartKey in cart) {
        if (cart.hasOwnProperty(cartKey)) {
            var cartItem = cart[cartKey];

            // Знаходимо відповідний товар у масиві products
            var product = products.find(product => product.name === cartItem.name);

            if (product) {
                const productCard = createProductCardCart(product);

                // Отримуємо елемент, що відображає кількість для поточного товару
                var quantityElement = productCard.querySelector('.item-quantity');
                var sizeElement = productCard.querySelector('.item-size');
                var h1Element = productCard.querySelector('.cart__blocks-desk-h1');
                var priceElement = productCard.querySelector('.cart__blocks-price h1');

                // Встановлюємо текст для елемента
                // Встановлюємо текст для кількості товару
                quantityElement.textContent = cartItem.quantity;
                sizeElement.textContent = cartItem.size;
                h1Element.textContent = cartItem.name;

                // Обчислюємо ціну для цього товару (ціна * кількість)
                var itemPrice = product.price * cartItem.quantity;
                priceElement.textContent = `$${itemPrice}`;

                // Додаємо ціну цього товару до загальної ціни
                totalPrice += itemPrice;

                cartContainer.appendChild(productCard);
            }
        }
    }

    // Оновлення загальної ціни на сторінці
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `$${totalPrice}`;
}

function showMiniCart() {
    checkCart();
    showCart();
    saveCartToLS();
    updateTotalItemsAndPriceOnHomePage();
}


function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

if (10 > 1) {
    console.log(showCart())
}

function calculateTotalItemsAndPrice(cart) {
    var totalItems = 0;
    var totalPrice = 0;

    for (var cartKey in cart) {
        if (cart.hasOwnProperty(cartKey)) {
            var cartItem = cart[cartKey];
            totalItems += cartItem.quantity;

            // Отримайте ціну товару на основі інформації про товар, яку у вас є
            var product = products.find(product => product.name === cartItem.name);
            if (product) {
                // Додайте ціну товару, помножену на кількість, до загальної ціни
                totalPrice += product.price * cartItem.quantity;
            }
        }
    }

    return {
        totalItems,
        totalPrice
    };
}

function updateTotalItemsAndPriceOnHomePage() {
    var cart = JSON.parse(localStorage.getItem('cart'));
    var {
        totalItems,
        totalPrice
    } = calculateTotalItemsAndPrice(cart);

    var totalItemsElement = document.getElementById('total-items');
    var totalPriceElement = document.getElementById('total-price');
    var totalItemsElement20 = document.getElementById('total-items2.0');
    var totalPriceElement20 = document.getElementById('total-price2.0');

    totalItemsElement.textContent = `ТОВАРІВ: ${totalItems}`;
    totalPriceElement.textContent = `(${totalPrice} ГРН.)`;
    totalItemsElement20.textContent = `ТОВАРІВ: ${totalItems}`;
    totalPriceElement20.textContent = `(${totalPrice} ГРН.)`;
}

// Викликати цю функцію при завантаженні сторінки або при зміні кошика