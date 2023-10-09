// Отримуємо параметр search з URL
// const urlParams = new URLSearchParams(window.location.search);
// const searchText = urlParams.get('search');

const searchText = localStorage.getItem('searchText');
const itemsPerPage = 10; // Задайте кількість товарів на сторінці
let currentPage = 1;


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
var products = [{
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
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    },
    {
        name: "Товар 6",
        description: "Опис товару 6",
        tags: "Білий",
        category: "Аксесуари"
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
        tags: "Голубий",
        category: "Білизна"
    },
    {
        name: "Товар 10",
        description: "Опис товару 10",
        tags: "Зелений",
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
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    }, {
        name: "Товар 5",
        description: "Опис товару 5",
        tags: "Білий, аксесуари",
        category: "Аксесуари"
    },
];

// Функція для створення карточки товару
// Функція для відображення всіх товарів


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



// var cart = {};
// var maxItems = 3;

// // jQuery(document).ready(function () {
// //     $('.katalog-popup').css("display", 'block')
// //     $('.katalog-popup').removeAttr("style");

// //     loadGoods();
// //     checkCart();
// //     showMiniCart();
// //     bindPopups();

// //     // Фільтрація товарів за категорією
// //     var box = jQuery('.katalog-cards-main');

// //     $(".nav-fill").on("click", "LI", function (event) {
// //         var Filter = $(this).data("f");

// //         box.each(function () {
// //             $(this).removeClass("hide");
// //             $(this).children(":first").removeClass("hide");
// //             if (!$(this).hasClass(Filter) && Filter !== 'all') {
// //                 $(this).addClass("hide");
// //                 $(this).children(":first").addClass("hide");
// //             }
// //         });
// //     });
// // });


// function addToCart() {
//     var articul = jQuery(this).attr('data-art');

//     if (Object.keys(cart).length >= maxItems && cart[articul] === undefined) {
//         Swal.fire(
//             'Помилка',
//             'Досягнута максимальна кількість елементів (' + maxItems + ') в кошику',
//             'error'
//         );
//         return;
//     }

//     if (cart[articul] != undefined) {
//         cart[articul]++;
//     } else {
//         cart[articul] = 1;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     showMiniCart(); // Оновити вміст кошика
// }


// addToCart()

// // function checkCart() {
// //     if (localStorage.getItem('cart') != null) {
// //         cart = JSON.parse(localStorage.getItem('cart'));
// //     }
// // }



// // function showMiniCart() {
// //     checkCart();
// //     showCart();
// // }

// function saveCartToLS() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }


// Show Cart Function Ends Here
// var cart = {};
// var maxItems = 3;

// jQuery(document).ready(function () {
//     console.log(cart);
//     showCart();
//     checkCart();
//     showMiniCart();
// });

// function addToCart() {
//     var articul = jQuery(this).attr('data-art');

//     if (cart === undefined) {
//         cart = {}; // Ініціалізуємо об'єкт, якщо він пустий або відсутній
//     }

//     if (Object.keys(cart).length >= maxItems && cart[articul] === undefined) {
//         Swal.fire(
//             'Помилка',
//             'Досягнута максимальна кількість елементів (' + maxItems + ') в кошику',
//             'error'
//         );
//         return;
//     }

//     if (cart[articul] != undefined) {
//         cart[articul]++;
//     } else {
//         cart[articul] = 1;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     showMiniCart(); // Оновити вміст кошика
// }

// function checkCart() {
//     if (localStorage.getItem('cart') != null) {
//         cart = JSON.parse(localStorage.getItem('cart'));
//     }
// }

// function showCart() {
//     // Змінні `cart` і `products` повинні бути ініціалізовані або доступні в цьому контексті
//     const cartItems = Object.keys(cart);

//     const filteredProducts = products.filter(product => {
//         return cartItems.includes(product.name);
//     });

//     const cartContainer = document.getElementById("my-cart");
//     cartContainer.innerHTML = '';

//     filteredProducts.forEach(product => {
//         const productCard = createProductCardCart(product);
//         cartContainer.appendChild(productCard);
//     });

//     const deleteButtons = cartContainer.querySelectorAll('.delete');
//     deleteButtons.forEach(deleteButton => {
//         deleteButton.addEventListener('click', function () {
//             const articul = this.getAttribute('data-art');
//             if (cart[articul] !== undefined) {
//                 delete cart[articul];
//                 saveCartToLS();
//                 showCart();
//             }
//         });
//     });

//     const minus = cartContainer.querySelectorAll('.minus');
//     minus.forEach(minu => {
//         minu.addEventListener('click', function () {
//             var articul = this.getAttribute('data-art');
//             if (cart[articul] > 1) {
//                 cart[articul]--;
//             } else {
//                 delete cart[articul];
//             }
//             saveCartToLS();
//             showCart();
//         });
//     });
// }

// function showMiniCart() {
//     checkCart();
//     showCart();
// }

// function plusGoods() {
//     var articul = jQuery(this).attr('data-art');
//     if (cart[articul] <= 8) {
//         cart[articul]++;
//         saveCartToLS();
//         showCart();
//     }
// }

// function minusGoods() {
//     var articul = jQuery(this).attr('data-art');
//     if (cart[articul] > 1) {
//         cart[articul]--;
//     } else {
//         delete cart[articul];
//     }
//     saveCartToLS();
//     showCart();
// }

// function deleteGoods() {
//     var articul = jQuery(this).attr('data-art');
//     delete cart[articul];
//     saveCartToLS();
//     showCart();
// }

// function saveCartToLS() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// var cart = {};
// var maxItems = 3;

// jQuery(document).ready(function () {
//     $('.katalog-popup').css("display", 'block')
//     $('.katalog-popup').removeAttr("style");

//     loadGoods();
//     checkCart();
//     showMiniCart();
//     bindPopups();

//     // Фільтрація товарів за категорією
//     var box = jQuery('.katalog-cards-main');

//     $(".nav-fill").on("click", "LI", function (event) {
//         var Filter = $(this).data("f");

//         box.each(function () {
//             $(this).removeClass("hide");
//             $(this).children(":first").removeClass("hide");
//             if (!$(this).hasClass(Filter) && Filter !== 'all') {
//                 $(this).addClass("hide");
//                 $(this).children(":first").addClass("hide");
//             }
//         });
//     });
// });



// function addToCart() {
//     var articul = jQuery(this).attr('data-art');

// if (cart === undefined) {
//     cart = {}; // Ініціалізуємо об'єкт, якщо він пустий або відсутній
// }

//     if (Object.keys(cart).length >= maxItems && cart[articul] === undefined) {
//         Swal.fire(
//             'Помилка',
//             'Досягнута максимальна кількість елементів (' + maxItems + ') в кошику',
//             'error'
//         );
//         return;
//     }

//     if (cart[articul] != undefined) {
//         cart[articul]++;
//     } else {
//         cart[articul] = 1;
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     showMiniCart(); // Оновити вміст кошика
// }

// function showCart() {
//     // Змінні `cart` і `products` повинні бути ініціалізовані або доступні в цьому контексті
//     const cartItems = Object.keys(cart);

//     const filteredProducts = products.filter(product => {
//         return cartItems.includes(product.name);
//     });

//     const cartContainer = document.getElementById("my-cart");
//     cartContainer.innerHTML = '';

//     filteredProducts.forEach(product => {
//         const productCard = createProductCardCart(product);
//         cartContainer.appendChild(productCard);
//     });

//     const deleteButtons = cartContainer.querySelectorAll('.delete');
//     deleteButtons.forEach(deleteButton => {
//         deleteButton.addEventListener('click', function () {
//             const articul = this.getAttribute('data-art');
//             if (cart[articul] !== undefined) {
//                 delete cart[articul];
//                 saveCartToLS();
//                 showCart();
//             }
//         });
//     });

//     const minus = cartContainer.querySelectorAll('.minus');
//     minus.forEach(minu => {
//         minu.addEventListener('click', function () {
//             var articul = this.getAttribute('data-art');
//             if (cart[articul] > 1) {
//                 cart[articul]--;
//             } else {
//                 delete cart[articul];
//             }
//             saveCartToLS();
//             showCart();
//         });
//     });
// }

// function checkCart() {
//     if (localStorage.getItem('cart') != null) {
//         cart = JSON.parse(localStorage.getItem('cart'));
//     }
// }



// function showMiniCart() {
//     checkCart();
//     showCart();
// }

// jQuery('#my-cart').on('click', '.popup__cart-quintly', function (event) {
//     var target = jQuery(event.target);
//     if (target.hasClass('plus')) {
//         plusGoods.call(target[0]); // Виклик функції plusGoods з потрібним контекстом
//     } else if (target.hasClass('minus')) {
//         minusGoods.call(target[0]); // Виклик функції minusGoods з потрібним контекстом
//     } else if (target.hasClass('delete')) {
//         deleteGoods.call(target[0]); // Виклик функції deleteGoods з потрібним контекстом
//     }
// });
// // Додані функції plusGoods, minusGoods та deleteGoods
// function plusGoods() {
//     var articul = jQuery(this).attr('data-art');
//     if (cart[articul] <= 8) {
//         cart[articul]++;
//         saveCartToLS();
//         showCart();
//     }
// }

// function minusGoods() {
//     var articul = jQuery(this).attr('data-art');
//     if (cart[articul] > 1) {
//         cart[articul]--;
//     } else {
//         delete cart[articul];
//     }
//     saveCartToLS();
//     showCart();
// }

// function deleteGoods() {
//     var articul = jQuery(this).attr('data-art');
//     delete cart[articul];
//     saveCartToLS();
//     showCart();
// }

// function saveCartToLS() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

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
    // Attach the click event handler directly to the button element
    const addToCartButton = productCard.querySelector('.cart_add');
    addToCartButton.addEventListener('click', addToCart);
    return productCard;

}

function createProductCardCart(product) {
    const productCard = document.createElement('div');
    // $('.cart_add').on('click', addToCart);
    // $('.delete').on('click', deleteGoods);


    productCard.classList.add('card');
    productCard.innerHTML = `
                <div class="card__block">
                    <div class="card__block-img">
                        <img src="./img/case.webp" alt="">
                        <div class="card__block-img_circles">
                            // <div class="card__block-img_circle">
                            //     <button class="cart_add" data-art="${product.name}" title="Додати в корзину">
                            //         <img src="./img/cart.svg" alt="">
                            //     </button>
                            // </div>
                            <div class="card__block-img_circle">
                                <button class="delete" data-art="${product.name}" title = "Переглянути" >
                                    <img src="./img/lope.svg" alt="">
                                </button>
                            </div>
                            <div class="card__block-img_circle">
                                <button class = "minus" data-art = "${product.name}" title = "Додати в уподобане" >
                                    <img src="./img/heart.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card__block-item">
                        <h2>${product.name}</h2>
                        <h1>1300 UAN</h1>
                    </div>
                </div>
            `;

    // jQuery('#my-cart').html(out);
    // jQuery('.plus').on('click', plusGoods);
    // jQuery('.minus').on('click', minusGoods);
    const deleteToCartButton = productCard.querySelector('.delete');
    deleteToCartButton.addEventListener('click', deleteGoods);
    const minusToCartButton = productCard.querySelector('.minus');
    minusToCartButton.addEventListener('click', minusGoods);
    return productCard;

}

var cart = {};
var maxItems = 3;



jQuery(document).ready(function () {
    checkCart(); // Перевірити наявність кошика в localStorage
    // Показати вміст кошика
    showMiniCart();
    bindPopups();
    console.log(cart)

    if (cart === undefined) {
        cart = {};
    }
    showCart();
});



function addToCart() {
    var articul = $(this).data('art');

    if (cart === undefined) {
        cart = {};
    }

    if (Object.keys(cart || {}).length >= maxItems && cart[articul] === undefined) {
        Swal.fire(
            'Помилка',
            'Досягнута максимальна кількість елементів (' + maxItems + ') в кошику',
            'error'
        );
        return;
    }

    if (cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showMiniCart(); // Оновити вміст кошика
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

    var cart = JSON.parse(localStorage.getItem('cart'))
    var cartItems = (Object.keys(cart || {}))

    const filteredProducts = products.filter(product => {
        return cartItems.includes(product.name);
    });

    const cartContainer = document.getElementById("my-cart");
    cartContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCardCart(product);
        cartContainer.appendChild(productCard);
    });

    // const deleteButtons = cartContainer.querySelectorAll('.delete');
    // deleteButtons.forEach(deleteButton => {
    //     deleteButton.addEventListener('click', function () {
    //         const articul = this.getAttribute('data-art');
    //         if (cart[articul] !== undefined) {
    //             delete cart[articul];
    //             saveCartToLS();
    //             showCart();
    //         }
    //     });
    // });
    // const minus = cartContainer.querySelectorAll('.minus');
    // minus.forEach(minu => {
    //     minu.addEventListener('click', function () {
    //         var articul = this.getAttribute('data-art');
    //         if (cart[articul] > 1) {
    //             cart[articul]--;
    //         } else {
    //             delete cart[articul];
    //         }
    //         saveCartToLS();
    //         showCart();
    //     });
    // });
}

function showMiniCart() {
    checkCart();
    showCart();
    saveCartToLS();
}

function plusGoods() {
    var articul = jQuery(this).attr('data-art');
    if (cart[articul] <= 8) {
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
}

function minusGoods() {
    if (cart === undefined) {
        cart = {};
    }

    var articul = jQuery(this).attr('data-art');
    if (cart[articul] > 1) {
        cart[articul]--;
    } else {
        delete cart[articul];
    }
    saveCartToLS();
    showCart();
}

function deleteGoods() {
    // var articul = jQuery(this).attr('data-art');
    // delete cart[articul];

    if (cart === undefined) {
        cart = {};
    }

    const articul = this.getAttribute('data-art');
    if (cart[articul] !== undefined) {
        delete cart[articul];
        saveCartToLS();
        showCart();
    }
    // saveCartToLS();
    // showCart();
}

// Додані функції plusGoods, minusGoods та deleteGoods
function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

if (10 > 1) {
    console.log(showCart())
}