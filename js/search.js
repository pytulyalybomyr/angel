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

//         "1": {
//             name: "Товар 1",
//             description: "Опис товару 1",
//             tags: "Білий, Сумка1, v1, піпі",
//             category: "Аксесуари"
//         },
//         "2": {
//             name: "Товар 2",
//             description: "Опис товару 2",
//             tags: "Чорний, Сумка2, v2",
//             category: "Одяг"
//         },
//         "3": {
//             name: "Товар 3",
//             description: "Опис товару 3",
//             tags: "Синій, Сумка3, v3",
//             category: "Білизна"
//         },
//         "4": {
//             name: "Товар 4",
//             description: "Опис товару 4",
//             tags: "Голубий, Сумка4, v4",
//             category: "Косметика"
//         },
//         "5": {
//             name: "Товар 5",
//             description: "Опис товару 5",
//             tags: "Олег, аксесуари",
//             category: "Аксесуари"
//         },
//         "6": {
//             name: "Товар 6",
//             description: "Опис товару 6",
//             tags: "Білий",
//             category: "Одяг"
//         },
//         "7": {
//             name: "Товар 7",
//             description: "Опис товару 7",
//             tags: "Чорний",
//             category: "Аксесуари"
//         },
//         "8": {
//             name: "Товар 8",
//             description: "Опис товару 8",
//             tags: "Синій",
//             category: "Аксесуари"
//         },
//         "9": {
//             name: "Товар 9",
//             description: "Опис товару 9",
//             tags: "Синій",
//             category: "Білизна"
//         },
//         "10": {
//             name: "Товар 10",
//             description: "Опис товару 10",
//             tags: "Білий",
//             category: "Білизна"
//         },
//         "11": {
//             name: "Товар 11",
//             description: "Опис товару 11",
//             tags: "Зелений",
//             category: "Аксесуари"
//         },
//         "12": {
//             name: "Товар 12",
//             description: "Опис товару 12",
//             tags: "Голубий",
//             category: "Косметика"
//         }

// Функція для створення карточки товару
function createProductCard(product) {
    const productCard = document.createElement('div');
    // $('.cart_add').on('click', addToCart);
    productCard.classList.add('card');
    productCard.innerHTML = `
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

// function deleteFromCart(articul) {
//     if (cart[articul] !== undefined) {
//         delete cart[articul];
//         saveCartToLS();
//         showCart();
//     }
// }

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
    document.getElementById("search_h2").innerHTML = '';
    document.getElementById('productList').style.display = "block";

    const filteredProducts = products.filter(product => {
        return product.category.toLowerCase().includes(searchText.toLowerCase());

    });

    if (filteredProducts.length === 0) {
        searchResults.innerText = 'Нічого не знайдено.';
        document.getElementById("search_h2").innerHTML = 'Пусто';
    } else {
        document.getElementById('productList').style.display = "none";
        document.getElementById("search_h2").innerHTML = searchText;
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    }
}

// if (searchText) {
//     displayProducts(searchText);

//     localStorage.removeItem('searchText');
// }


// Фільтр по категоріях товарів
function displayFilterProducts() {
    const searchResults = document.getElementById('searchResults');
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    document.getElementById('productList').style.display = "block";
    searchResults.innerHTML = ``;
    document.getElementById("activefilter_h2").innerHTML = '';


    const filteredProductsSearch = products.filter(product => {
        return product.category.toLowerCase().includes(searchText.toLowerCase());

    });

    const filteredProducts = filteredProductsSearch.filter(product => {
        return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
    });




    if (categoryFilter.value === 'all' || filteredProducts.length === 0) {
        document.getElementById("activefilter_h2").innerHTML = 'Усі товари';
        filteredProducts = products; // Відображаємо всі товари, якщо немає результатів пошуку
    } else {
        document.getElementById('productList').style.display = "none";
        document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
    }

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        searchResults.appendChild(productCard);
    });
}

// Викликаємо функцію для відображення товарів за текстом пошуку
if (searchText) {
    displayProducts(searchText);

    function displayFilterProducts() {
        const searchResults = document.getElementById('searchResults');
        const categoryFilter = document.getElementById('categoryFilter');
        const selectedCategory = categoryFilter.value;
        document.getElementById('productList').style.display = "block";
        searchResults.innerHTML = ``;
        document.getElementById("activefilter_h2").innerHTML = '';


        const filteredProductsSearch = products.filter(product => {
            return product.category.toLowerCase().includes(searchText.toLowerCase());

        });

        const filteredProducts = filteredProductsSearch.filter(product => {
            return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
        });




        if (categoryFilter.value === 'all' || filteredProducts.length === 0) {
            document.getElementById("activefilter_h2").innerHTML = 'Усі товари';
            filteredProducts = products; // Відображаємо всі товари, якщо немає результатів пошуку
        } else {
            document.getElementById('productList').style.display = "none";
            document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
        }

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    }
} else {
    // Якщо текст пошуку не вказаний, відображаємо всі товари
    displayAllProducts();

    function displayFilterProducts() {
        const searchResults = document.getElementById('searchResults');
        const categoryFilter = document.getElementById('categoryFilter');
        const selectedCategory = categoryFilter.value;
        document.getElementById('productList').style.display = "block";
        searchResults.innerHTML = ``;
        document.getElementById("activefilter_h2").innerHTML = '';




        const filteredProducts = products.filter(product => {
            return product.tags.toLowerCase().includes(selectedCategory.toLowerCase());
        });




        if (categoryFilter.value === 'all' || filteredProducts.length === 0) {
            document.getElementById("activefilter_h2").innerHTML = 'Усі товари';
            filteredProducts = products; // Відображаємо всі товари, якщо немає результатів пошуку
        } else {
            document.getElementById('productList').style.display = "none";
            document.getElementById("activefilter_h2").innerHTML = categoryFilter.value;
        }

        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    }
}

var cart = {};
var maxItems = 3;

jQuery(document).ready(function () {
    $('.katalog-popup').css("display", 'block')
    $('.katalog-popup').removeAttr("style");
    showCart();
    checkCart();
    showMiniCart();
    bindPopups();


    // Фільтрація товарів за категорією
    var box = jQuery('.katalog-cards-main');

    $(".nav-fill").on("click", "LI", function (event) {
        var Filter = $(this).data("f");

        box.each(function () {
            $(this).removeClass("hide");
            $(this).children(":first").removeClass("hide");
            if (!$(this).hasClass(Filter) && Filter !== 'all') {
                $(this).addClass("hide");
                $(this).children(":first").addClass("hide");
            }
        });
    });

    console.log(cart)
});

function bindPopups() {
    $('.katalog-cards-main').on("dblclick", openPopup);
    // 	$('.katalog-cards-main').on("mouseuover", function ());
}

function openPopup(event) {
    var target = $(event.currentTarget);
    var popup = target.find('.katalog-popup');

    if (!popup.is(":visible")) {
        popup.css("display", "block");
    } else {
        popup.css("display", "none");
    }

    $('.katalog-popup-x').on("click", function () {
        popup.css("display", "none");
    });

    $(document).on("mouseup", function (e) {
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.css("display", "none");
        }
    });
}

function Main_popup() {
    $('body').on("click", ".katalog-cards-main", function () {
        var popup_window = $(this).find('.katalog-popup');
        var popup_window__button = popup_window.find('.katalog-popup-x');
        popup_window.addClass("show");

        popup_window__button.off("click").click(function () {
            popup_window.removeClass("show");
        });

        $(document).off("mouseup").mouseup(function (e) {
            var popup = popup_window.find('.katalog-popup-block');
            if (e.target != popup[0] && popup.has(e.target).length === 0) {
                popup_window.removeClass("show");
            }
        });
    });
}

// function loadGoods() {

//     var out = '';
//     for (var key in data) {
//         var product = data[key];
//         out += '<div class="katalog-cards-main ' + product.type + ' ' + product.id + '">';
//         out += '<div class="katalog-card">';
//         out += '<div class="katalog-card_out">';
//         out += '<img class="katalog-card__img" src="' + product.image + '" alt="">';
//         out += '<div class="katalog-card__text">';
//         out += '<h1>' + product.namafull + '</h1>';
//         out += '<div class="Stars" style="--rating: ' + product.star + ';" aria-label="Rating of this product is 2.3 out of 5.">';
//         out += '</div>';
//         // 			out += '<meter style="--percent: calc(' + product.star + '/5*100%);" class="average-rating" min="0" max="5" value="5" title="4.3 out of 5 stars">&nbsp;</meter>';
//         out += '<div class="katalog-card__text-price">';
//         out += '<h2>' + product.cost + 'UAN - ' + product.weight + '</h2>';
//         // 			out += '<h2></h2>';
//         out += '</div>';
//         out += '<div class="katalog-card__text-main">';
//         out += '<div style="background: url(https://anna-cakeshop.000webhostapp.com/wp-content/themes/cake/img/cart-white.svg) center center no-repeat #5f9ea0" class="katalog-card__text-button" data-art="' + key + '">';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '<div class="katalog-popup">';
//         out += '<div class="katalog-popup-screen">';
//         out += '<div class="katalog-popup-block">';
//         out += '<div class="katalog-popup-x" style="font-size: 26px;cursor: pointer;position: absolute;right: 13px;top: 5px;">✖';
//         out += '</div>'
//         // 			out += '<div class="katalog-popup-x" style="font-size: 26px;cursor: pointer;position: absolute;right: 13px;top: 5px;	">✖</div>';
//         out += '<img src="' + product.image + '" alt="">';
//         out += '<div class="katalog-popup-block_text">';
//         out += '<h1>' + product.namafull + '</h1>';
//         out += '<div class="katalog-card__text-price">';
//         out += '<h2  style="font-size: 15px;">' + product.cost + 'UAN - ' + product.weight + '</h2>';
//         out += '</div>';
//         out += '<div class="Stars" style="--rating: ' + product.star + ';" aria-label="Rating of this product is 2.3 out of 5.">';
//         out += '</div>';
//         out += '<h2>Смак:</h2>';
//         out += '<p>' + product.dis + '</p>';
//         //             out += '<div style="background: url(https://anna-cakeshop.000webhostapp.com/wp-content/themes/cake/img/cart-white.svg) center center no-repeat #5f9ea0" class="katalog-popup-block__text-button" data-art="' + key + '">';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//         out += '</div>';
//     }
//     jQuery('.katalog-cards').html(out);
//     jQuery('.katalog-card__text-button').on('click', addToCart);
// }

function addToCart() {
    var articul = this.getAttribute('data-art');

    if (Object.keys(cart).length >= maxItems && cart[articul] === undefined) {
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
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showCart() {
    const cartItems = Object.keys(cart);

    const filteredProducts = products.filter(product => {
        return cartItems.includes(product.name);
    });

    const cartContainer = document.getElementById("my-cart");
    cartContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = createProductCardCart(product);
        cartContainer.appendChild(productCard);
    });

    const deleteButtons = cartContainer.querySelectorAll('.delete');
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', function () {
            const articul = this.getAttribute('data-art');
            if (cart[articul] !== undefined) {
                delete cart[articul];
                saveCartToLS();
                showCart();
            }
        });
    });
    const minus = cartContainer.querySelectorAll('.minus');
    minus.forEach(minu => {
        minu.addEventListener('click', function () {
            var articul = this.getAttribute('data-art');
            if (cart[articul] > 1) {
                cart[articul]--;
            } else {
                delete cart[articul];
            }
            saveCartToLS();
            showCart();
        });
    });
}

function showMiniCart() {
    checkCart();
    showCart();
}

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
// Додані функції plusGoods, minusGoods та deleteGoods
function plusGoods() {
    var articul = jQuery(this).attr('data-art');
    if (cart[articul] <= 8) {
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
}

function minusGoods() {
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
    var articul = jQuery(this).attr('data-art');
    delete cart[articul];
    saveCartToLS();
    showCart();
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
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


// var data = {
//     "119989012001": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "1",
//         "namafull": "\u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0430 \u043f\u043e\u043b\u0443\u043d\u0438\u0446\u044f",
//     },
//     "119989012002": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "2",
//         "namafull": "\u041c\u0430\u043a\/\u0447\u043e\u0440\u043d\u0438\u0446\u044f\/\u043a\u0435\u0448\u044e",
//     },
//     "119989012003": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "3",
//         "namafull": "\u0421\u043d\u0456\u043a\u0435\u0440\u0441",
//         "cost": "630",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/09\/2.jpg",
//         "dis": "\u041c\u0435\u0433\u0430 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u041a\u0430\u0440\u0430\u043c\u0435\u043b\u044c \u0432\u043b\u0430\u0441\u043d\u043e\u0433\u043e \u0432\u0438\u0440\u043e\u0431\u043d\u0438\u0446\u0442\u0432\u0430  \u0442\u0430 \u0430\u0440\u0430\u0445\u0456\u0441 <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q3"
//     },
//     "119989012004": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "4",
//         "namafull": "\u041e\u0440\u0435\u043e \u043a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439",
//         "cost": "550",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake2.jpg",
//         "dis": "\u041c\u0435\u0433\u0430 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br>   \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437 \u0437 \u043a\u0440\u0438\u0445\u0442\u043e\u044e \u043f\u0435\u0447\u0438\u0432\u0430 \u043e\u0440\u0435\u043e",
//         "id": "q4"
//     },
//     "119989012005": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "5",
//         "namafull": "\u041e\u0440\u0435\u043e \u0437 \u0447\u0456\u0437\u043a\u0435\u0439\u043a\u043e\u043c",
//         "cost": "600",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake4.jpg",
//         "dis": "\u041c\u0435\u0433\u0430 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438 <br> \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u0438\u0439 \u0447\u0456\u0437\u043a\u0435\u0439\u043a \u0437 \u043f\u0435\u0447\u0438\u0432\u043e\u043c \u043e\u0440\u0435\u043e) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q5"
//     },
//     "119989012006": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "1",
//         "namafull": "\u041a\u0430\u0432\u0430\/\u0432\u0438\u0448\u043d\u044f\/\u0448\u043e\u043a\u043e\u043b\u0430\u0434",
//         "cost": "670",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake6.jpg",
//         "dis": " \u041c\u0435\u0433\u0430 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438<br> \u041a\u0430\u0432\u043e\u0432\u0430 \u043f\u0440\u043e\u043f\u0438\u0442\u043a\u0430<br> \u0413\u0430\u043d\u0430\u0448 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0447\u043e\u0440\u043d\u043e\u0433\u043e \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u0443 \u0442\u0430 \u043a\u0440\u0435\u043c \u0447\u0456\u0437 <br>\u0441\u043e\u043a\u043e\u0432\u0438\u0442\u0456 \u0432\u0438\u0448\u043d\u0456",
//         "id": "q6"
//     },
//     "119989012007": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "2",
//         "namafull": "\u0411\u0430\u043d\u0430\u043d\/\u0448\u043e\u043a\u043e\u043b\u0430\u0434\/\u043a\u0430\u0440\u0430\u043c\u0435\u043b\u044c",
//         "cost": "600",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake7.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u0434\u043e\u043c\u0430\u0448\u043d\u044f \u043a\u0430\u0440\u0430\u043c\u0435\u043b\u044c ,\u0431\u0430\u043d\u0430\u043d\u0438 <br>\u043a\u0440\u0435\u043c \u0447\u0456\u0437 \u0437 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f\u043c \u0447\u043e\u0440\u043d\u043e\u0433\u043e \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u0443",
//         "id": "q7"
//     },
//     "119989012008": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "3",
//         "namafull": "\u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0441\u043e\u043b\u043e\u0434\u0430",
//         "cost": "580",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake8.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0432\u0438\u0448\u043d\u044f\/ \u043c\u0430\u043b\u0438\u043d\u0430\/\u0447\u043e\u0440\u043d\u0438\u0446\u044f\/\u043b\u043e\u0445\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q8"
//     },
//     "119989012009": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "4",
//         "namafull": "\u0404\u0433\u0435\u0440\u043c\u0435\u0439\u0441\u0442\u0435\u0440 \/\u0432\u0438\u0448\u043d\u044f",
//         "cost": "700",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake9.jpg",
//         "dis": "\u041c\u0435\u0433\u0430 \u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u043a\u043e\u0440\u0436\u0456 <br> \u0430\u0440\u043e\u043c\u0430\u0442\u043d\u0430 \u0432\u0438\u0448\u043d\u044f \u0437 \u043d\u043e\u0442\u043a\u043e\u044e \u0404\u0433\u0435\u0440\u043c\u0435\u0439\u0441\u0442\u0440\u0443<br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q9"
//     },
//     "1199890120010": {
//         "type": "bis",
//         "weight": "250\u0433\u0440\u0430\u043c",
//         "star": "5",
//         "namafull": "\u0422\u0440\u043e\u043f\u0456\u043a\u0438",
//         "cost": "800",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake10.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u0422\u0440\u043e\u043f\u0456\u0447\u043d\u0430 \u043d\u0430\u0447\u0438\u043d\u043a\u0430(\u043c\u0430\u043d\u0433\u043e,\u043c\u0430\u0440\u0430\u043a\u0443\u0439\u044f,\u043a\u043e\u043a\u043e\u0441)<br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q10"
//     },
//     "1199890120011": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "1",
//         "namafull": "\u0424\u0456\u0441\u0442\u0430\u0448\u043a\u0430\/\u043c\u0430\u043b\u0438\u043d\u0430 \u0437 \u0447\u0456\u0437\u043a\u0435\u0439\u043a\u043e\u043c  ",
//         "cost": "700",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake11.jpg",
//         "dis": "\u041d\u0456\u0436\u043d\u0456 \u0444\u0456\u0441\u0442\u0430\u0448\u043a\u043e\u0432\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u043a\u0430 <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c\u0447\u0456\u0437 <br>\u0444\u0456\u0441\u0442\u0430\u0448\u043a\u043e\u0432\u0438\u0439 \u0447\u0456\u0437\u043a\u0435\u0439\u043a",
//         "id": "q11"
//     },
//     "1199890120012": {
//         "type": "bis",
//         "weight": "1\u043a\u0433",
//         "star": "2",
//         "namafull": "\u0428\u043e\u043a\u043e\u043b\u0430\u0434 \/\u0432\u0438\u0448\u043d\u044f",
//         "cost": "580",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake12.jpg",
//         "dis": " \u041c\u0435\u0433\u0430\u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u043a\u043e\u0440\u0436\u0456<br> \u0412\u0438\u0448\u043d\u0435\u0432\u0435 \u043a\u043e\u043d\u0444\u0456 <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q12"
//     },
//     "1199890120013": {
//         "type": "bis",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "2",
//         "namafull": "\u041b\u0456\u0441\u043e\u0432\u0438\u0439 \u0433\u043e\u0440\u0456\u0445",
//         "cost": "700",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake12.jpg",
//         "dis": "\u041c\u0435\u0433\u0430\u0448\u043e\u043a\u043e\u043b\u0430\u0434\u043d\u0456 \u043a\u043e\u0440\u0436\u0456<br> \u0424\u0443\u043d\u0434\u0443\u0447\u043d\u0438\u0439 \u0433\u0430\u043d\u0430\u0448 <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c <br>\u0444\u0443\u043d\u0434\u0443\u0447\u043d\u0435 \u043f\u0440\u043e\u043b\u0456\u043d\u0435",
//         "id": "q13"
//     },
//     "1199890120014": {
//         "type": "bis",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "3",
//         "namafull": "\u0424\u0456\u0441\u0442\u0430\u0448\u043a\u0430\/\u043c\u0430\u043b\u0438\u043d\u0430 \u0437 \u0433\u0430\u043d\u0430\u0448\u0435\u043c",
//         "cost": "700",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake4.jpg",
//         "dis": "\u041d\u0456\u0436\u043d\u0456 \u0444\u0456\u0441\u0442\u0430\u0448\u043a\u043e\u0432\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u041c\u0430\u043b\u0438\u043d\u043e\u0432\u0430 \u043d\u0430\u0447\u0438\u043d\u043a\u0430 <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c\u0447\u0456\u0437 <br>\u0444\u0456\u0441\u0442\u0430\u0448\u043a\u043e\u0432\u0438\u0439 \u0433\u0430\u043d\u0430\u0448",
//         "id": "q14"
//     },
//     "1199890120015": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "1",
//         "namafull": "",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake7.jpg",
//         "dis": "",
//         "id": "q15"
//     },
//     "1199890120016": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "4",
//         "namafull": "",
//         "cost": "530",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake11.jpg",
//         "dis": "",
//         "id": "q16"
//     },
//     "1199890120017": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "1",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432\u0430 \u0445\u043c\u0430\u0440\u0438\u043d\u043a\u0430",
//         "cost": "530",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake9.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q17"
//     },
//     "1199890120018": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "2",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432\u0430 \u0445\u043c\u0430\u0440\u0438\u043d\u043a\u0430",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake9.webp",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q18"
//     },
//     "1199890120019": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "3",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432\u0430 \u0445\u043c\u0430\u0440\u0438\u043d\u043a\u0430",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake6.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q19"
//     },
//     "1199890120020": {
//         "type": "mysc",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "5",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432\u0430 \u0445\u043c\u0430\u0440\u0438\u043d\u043a\u0430",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake6.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q20"
//     },
//     "1199890120021": {
//         "type": "mysb",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "2",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake1.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q21"
//     },
//     "1199890120022": {
//         "type": "kendib",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "4",
//         "namafull": "\u0412\u0435\u0434\u043c\u0456\u0434\u044c ",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/IMG_20230820_091124-01-scaled.jpeg",
//         "dis": "\u042f\u0433\u043e\u0434\u0438. <br>\u0441\u043c\u0430\u0447\u043d\u043e) <br>\u043a\u0443\u043f\u0443\u0439",
//         "id": "q22"
//     },
//     "1199890120023": {
//         "type": "kendib",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "3",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432\u0430 \u0445\u043c\u0430\u0440\u0438\u043d\u043a\u0430",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake8.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438. <br> \u042f\u0433\u0456\u0434\u043d\u0430 \u043d\u0430\u0447\u0438\u043a\u0430(\u041b\u0456\u0441\u043e\u0432\u0456 \u044f\u0433\u043e\u0434\u0438\/ \u0412\u0438\u0448\u043d\u044f\/ \u041c\u0430\u043b\u0438\u043d\u0430) <br> \u0412\u0430\u043d\u0456\u043b\u044c\u043d\u0438\u0439 \u043a\u0440\u0435\u043c \u0447\u0456\u0437",
//         "id": "q23"
//     },
//     "1199890120024": {
//         "type": "mysb",
//         "weight": "500\u0433\u0440\u0430\u043c",
//         "star": "1",
//         "namafull": "\u041c\u0443\u0441\u043e\u0432",
//         "cost": "500",
//         "image": "https:\/\/anna-cakeshop.000webhostapp.com\/wp-content\/uploads\/2023\/08\/cake10.jpg",
//         "dis": "\u0421\u043c\u0430\u0447\u043d\u0456 \u0432\u0430\u043d\u0456\u043b\u044c\u043d\u0456 \u0431\u0456\u0441\u043a\u0432\u0456\u0442\u0438",
//         "id": "q24"
//     }
// };
// var out = '';