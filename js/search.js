// Отримуємо параметр search з URL
// const urlParams = new URLSearchParams(window.location.search);
// const searchText = urlParams.get('search');

const searchText = localStorage.getItem('searchText');


function kosmatuka() {
    location.href = `katalog.html?search=Косметика`;
}

function сlose() {
    location.href = `katalog.html?search=Одяг`;
}

function biluzxna() {
    location.href = `katalog.html?search=Білизна`;
}

function acsess() {
    location.href = `katalog.html?search=Аксесуари`;
}

// Масив з карточками товарів
const products = [{
        name: "Товар 1",
        description: "Опис товару 1",
        tags: "Білий, Сумка1, v1, піпі",
        category: "Аксесуари"
    },
    {
        name: "Товар 2",
        description: "Опис товару 2",
        tags: "Чорний, Сумка2, v2",
        category: "Одяг"
    },
    {
        name: "Товар 3",
        description: "Опис товару 3",
        tags: "Синій, Сумка3, v3",
        category: "Білизна"
    },
    {
        name: "Товар 4",
        description: "Опис товару 4",
        tags: "Голубий, Сумка4, v4",
        category: "Косметика"
    },
    {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Олег, аксесуари",
        category: "Аксесуари"
    },
    {
        name: "Товар 6",
        description: "Опис товару 6",
        tags: "Білий",
        category: "Одяг"
    },
    {
        name: "Товар 7",
        description: "Опис товару 7",
        tags: "Чорний",
        category: "Аксесуари"
    },
    {
        name: "Товар 8",
        description: "Опис товару 8",
        tags: "Синій",
        category: "Аксесуари"
    },
    {
        name: "Товар 9",
        description: "Опис товару 9",
        tags: "Синій",
        category: "Білизна"
    },
    {
        name: "Товар 10",
        description: "Опис товару 10",
        tags: "Білий",
        category: "Білизна"
    }, {
        name: "Товар 11",
        description: "Опис товару 11",
        tags: "Зелений",
        category: "Аксесуари"
    }, {
        name: "Товар 12",
        description: "Опис товару 12",
        tags: "Голубий",
        category: "Косметика"
    }
];

// Функція для створення карточки товару
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
                <div class="card__block">
                    <div class="card__block-img">
                        <img src="./img/case.webp" alt="">
                        <div class="card__block-img_circles">
                            <div class="card__block-img_circle">
                                <a href title="Додати в корзину">
                                    <img src="./img/cart.svg" alt="">
                                </a>
                            </div>
                            <div class="card__block-img_circle">
                                <a href title="Переглянути">
                                    <img src="./img/lope.svg" alt="">
                                </a>
                            </div>
                            <div class="card__block-img_circle">
                                <a href title="Додати в уподобане">
                                    <img src="./img/heart.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card__block-item">
                        <h2>${product.name}</h2>
                        <h1>1300 UAN</h1>
                    </div>
                </div>
            `;
    return productCard;
}

// Функція для відображення всіх товарів
function displayAllProducts() {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        searchResults.appendChild(productCard);
    });
}

// Викликаємо функцію для відображення всіх товарів
displayAllProducts();


// Фільтр по категоріях товарів
function displayProducts(searchText) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ``;
    document.getElementById('productList').style.display = "block";

    const filteredProducts = products.filter(product => {
        return product.category.toLowerCase().includes(searchText.toLowerCase());

    });

    if (filteredProducts.length === 0) {
        searchResults.innerText = 'Нічого не знайдено.';
    } else {
        document.getElementById('productList').style.display = "none";
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    }
}

if (searchText) {
    displayProducts(searchText);

    localStorage.removeItem('searchText');
}


// Фільтр по категоріях товарів
function displayFilterProducts() {
    const searchResults = document.getElementById('searchResults');
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    document.getElementById('productList').style.display = "block";
    searchResults.innerHTML = ``;
    document.getElementById("activefilter_h2").innerHTML = '';

    const filteredProducts = products.filter(product => {
        // return product.category.toLowerCase() === selectedCategory.toLowerCase();
        return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
    });



    // if (filteredProducts.length === 0) {
    //     searchResults.innerText = 'Нічого не знайдено.';
    //     document.getElementById("activefilter_h2").innerHTML = 'Усі елементи';
    //     products.forEach(product => {
    //         const productCard = createProductCard(product);
    //         searchResults.appendChild(productCard);
    //     });
    // }

    // if (categoryFilter.value === '') {
    //     document.getElementById("activefilter_h2").innerHTML = 'Немає';
    // }

    if (categoryFilter.value === 'all') {
        document.getElementById("activefilter_h2").innerHTML = 'Усі товари';
        products.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    } else {
        document.getElementById('productList').style.display = "none";
        document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    }
}







// // Отримуємо параметр search з URL
// const urlParams = new URLSearchParams(window.location.search);
// const searchText = urlParams.get('search');



// // Масив з карточками товарів

// const products = [{
//         name: "Товар 1",
//         description: "Опис товару 1",
//         tags: "Білий, Сумка1, v1, піпі"
//     },
//     {
//         name: "Товар 2",
//         description: "Опис товару 2",
//         tags: "Чорний, Сумка2, v2"
//     },
//     {
//         name: "Товар 3",
//         description: "Опис товару 3",
//         tags: "Білий, Сумка3, v3"
//     },
//     {
//         name: "Товар 4",
//         description: "Опис товару 4",
//         tags: "Чорний, Сумка4, v4"
//     },
//     {
//         name: "Товар 5",
//         description: "Опис товару 5",
//         tags: "Білий, аксесуари"
//     }
// ];

// // Викликаємо функцію для відображення карточок товарів
// function displayAllProducts() {
//     const productList = document.getElementById('productList');

//     // Перебираємо масив products і створюємо карточки товарів
//     products.forEach(product => {
//         const productCard = document.createElement('div');
//         productCard.innerHTML = `
//                     <h2>${product.name}</h2>
//                     <p>${product.description}</p>
//                     <p>Теги: ${product.tags}</p>
//                 `;
//         productList.appendChild(productCard);
//     });
// }
// displayAllProducts();


// // Функція для відображення карточок товарів на сторінці
// function displayProducts(searchText) {
//     const searchResults = document.getElementById('searchResults');
//     searchResults.innerHTML = '';
//     document.getElementById('productList').style.display = "block";
//     // searchResults.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;

//     const filteredProducts = products.filter(product => {
//         // Тут ви можете визначити, які товари показувати на основі пошуку (наприклад, за назвою)
//         return product.tags.toLowerCase().includes(searchText.toLowerCase());
//     });

//     if (filteredProducts.length === 0) {
//         searchResults.innerText = 'Нічого не знайдено.';
//     } else {
//         document.getElementById('productList').style.display = "none";
//         filteredProducts.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
//             searchResults.appendChild(productCard);
//         });
//     }
// }
// // Викликаємо функцію для відображення карточок товарів з урахуванням параметрів пошуку
// if (searchText) {
//     displayProducts(searchText);
// }


// // Фільтр по категоріях елментів "tags" 
// function filter12() {
//     const categoryFilter = document.getElementById('categoryFilter');
//     const selectedCategory = categoryFilter.value;

//     // Фільтруємо товари на основі обраної категорії
//     if (selectedCategory === 'all') {
//         // Показуємо усі товари
//         displayProducts(products);
//     } else {
//         const filtered = products.filter(product => {
//             return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
//         });
//         displayProducts(filtered);
//     }
// }