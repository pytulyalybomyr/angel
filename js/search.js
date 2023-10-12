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
        sizes: ["S", "M", "L"]
    },
    {
        name: "Товар 8",
        description: "Опис товару 8",
        tags: "Синій",
        category: "Аксесуари",
        sizes: ["S", "M", "L"]
    },
    {
        name: "Товар 9",
        description: "Опис товару 9",
        tags: "Голубий",
        category: "Білизна",
        sizes: ["S", "M", "L"]
    },
    {
        name: "Товар 10",
        description: "Опис товару 10",
        tags: "Зелений",
        category: "Білизна",
        sizes: ["150мл", "250мл", "350мл"]
    }
];

function openProductPopup(event) {

    const target = event.currentTarget; // Отримуємо елемент, на який було натиснуто
    const productName = target.getAttribute('data-art'); // Отримуємо атрибут data-art, який містить назву продукту
    const product = products.find(item => item.name === productName); // Знаходимо обраний продукт у масиві

    console.log(target)
    console.log(productName)
    console.log(product)

    if (product) {
        const popup = document.getElementById("productPopup");
        const titleElement = document.getElementById("popupTitle");
        const descriptionElement = document.getElementById("popupDescription");

        // Встановлюємо дані у вікні popup
        titleElement.textContent = product.name;
        descriptionElement.textContent = product.description;

        // Відображаємо popup
        popup.style.display = "block";
    }
}

// window.addEventListener("click", (event) => {
//     const popup = document.getElementById("productPopup");
//     if (event.target === popup) {
//         popup.style.display = "none";
//     }
// });

// const closePopupButton = document.getElementById("closePopup");
// closePopupButton.addEventListener("click", () => {
//     const popup = document.getElementById("productPopup");
//     popup.style.display = "none";
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
                                <button class="cart_add" data-art="${product.name}" title="Додати в корзину">
                                    <img src="./img/cart.svg" alt="">
                                </button>
                            </div>
                            <div class="card__block-img_circle">
                                <button class="open" data-art="${product.name}">
                                    <img src="./img/lope.svg" alt="">
                                </button>
                            </div>
                            <div class="card__block-img_circle">
                                <a href title="Додати в уподобане">
                                    <img src="./img/heart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class = "card__block-item" >
                        <h2>${product.name}</h2> 
                        <h3> Розмір:
                            <select class = "product-size" >
                            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')} 
                            </select> 
                        </h3>
                        <h1>${product.price} UAN </h1> 
                    </div>
                </div>`;
    // Attach the click event handler directly to the button element
    // productCard.querySelector('.open').addEventListener('click', () => openProductPopup());
    const addToCartButton = productCard.querySelector('.cart_add');
    addToCartButton.addEventListener('click', addToCart);
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
    var selectedSize = $(this).closest('.card').find('.product-size').val();

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
        quantity: 1,
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
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateTotalItemsAndPriceOnHomePage();
    showMiniCart();
}

function plusGoods(event) {
    var articul = $(event.target).data('art');
    var selectedSize = $(event.target).closest('.cart__blocks').find('.item-size').text();
    var cartKey = `${articul}:${selectedSize}`;


    if (!cart) {
        // Якщо cart порожній або відсутній, спробуйте отримати дані з localStorage
        var storedCart = localStorage.getItem('cart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    }

    if (cart && cart[cartKey]) {
        // Тут ви можете отримати доступ до властивостей об'єкта cart[cartKey]
        var selectedSize = cart[cartKey].size;
        cart[cartKey].quantity++;
        saveCartToLS();
        showMiniCart();
    } else {
        // Виконайте обробку, якщо властивість не існує
        console.error("Властивість або об'єкт не існує в кошику");
    }
}

// Функція, що видаляє товар із кошика
function minusGoods(event) {
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
        cart[cartKey].quantity--;

        if (cart[cartKey].quantity === 0) {
            delete cart[cartKey];
        }

        saveCartToLS();
        showMiniCart();
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