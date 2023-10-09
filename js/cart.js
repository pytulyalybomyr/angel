function createProductCard(product) {
    const productCard = document.createElement("div");
    // $('.cart_add').on('click', addToCart);
    productCard.classList.add("card");
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
                        <button class = "cart_add" data-art = "${product.name}" title = "Додати в корзину" >
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
    // const addToCartButton = productCard.querySelector(".cart_add");
    // addToCartButton.addEventListener("click", addToCart);
    return productCard;
}

function createProductCardCart(product) {
    const productCard = document.createElement("div");
    // $('.cart_add').on('click', addToCart);
    // $('.delete').on('click', deleteGoods);

    productCard.classList.add("card");
    productCard.innerHTML = `
        <div class="card__block">
            <div class="card__block-img">
                <img src="./img/case.webp" alt="">
                <div class="card__block-img_circles">
                    // <div class="card__block-img_circle">
                        // <button class="cart_add" data-art="${product.name}" title="Додати в корзину">
                            // <img src="./img/cart.svg" alt="">
                            // </button>
                        // </div>
                    <div class="card__block-img_circle">
                        <button class="delete" data-art="${product.name}" title="Переглянути">
                            <img src="./img/lope.svg" alt="">
                        </button>
                    </div>
                    <div class="card__block-img_circle">
                        <button class="minus" data-art="${product.name}" title="Додати в уподобане">
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

var cart = {};
var maxItems = 3;

jQuery(document).ready(function () {
    $(".katalog-popup").css("display", "block");
    $(".katalog-popup").removeAttr("style");
    showCart();
    checkCart();
    showMiniCart();
    bindPopups();

    // Фільтрація товарів за категорією
    var box = jQuery(".katalog-cards-main");

    $(".nav-fill").on("click", "LI", function (event) {
        var Filter = $(this).data("f");

        box.each(function () {
            $(this).removeClass("hide");
            $(this).children(":first").removeClass("hide");
            if (!$(this).hasClass(Filter) && Filter !== "all") {
                $(this).addClass("hide");
                $(this).children(":first").addClass("hide");
            }
        });
    });

    console.log(cart);
});

function bindPopups() {
    $(".katalog-cards-main").on("dblclick", openPopup);
    // 	$('.katalog-cards-main').on("mouseuover", function ());
}

function openPopup(event) {
    var target = $(event.currentTarget);
    var popup = target.find(".katalog-popup");

    if (!popup.is(":visible")) {
        popup.css("display", "block");
    } else {
        popup.css("display", "none");
    }

    $(".katalog-popup-x").on("click", function () {
        popup.css("display", "none");
    });

    $(document).on("mouseup", function (e) {
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.css("display", "none");
        }
    });
}

function Main_popup() {
    $("body").on("click", ".katalog-cards-main", function () {
        var popup_window = $(this).find(".katalog-popup");
        var popup_window__button = popup_window.find(".katalog-popup-x");
        popup_window.addClass("show");

        popup_window__button.off("click").click(function () {
            popup_window.removeClass("show");
        });

        $(document)
            .off("mouseup")
            .mouseup(function (e) {
                var popup = popup_window.find(".katalog-popup-block");
                if (e.target != popup[0] && popup.has(e.target).length === 0) {
                    popup_window.removeClass("show");
                }
            });
    });
}

function addToCart() {
    var articul = this.getAttribute("data-art");

    if (Object.keys(cart).length >= maxItems && cart[articul] === undefined) {
        Swal.fire(
            "Помилка",
            "Досягнута максимальна кількість елементів (" + maxItems + ") в кошику",
            "error"
        );
        return;
    }

    if (cart[articul] != undefined) {
        cart[articul]++;
    } else {
        cart[articul] = 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showMiniCart(); // Оновити вміст кошика
}

function checkCart() {
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
}

function showCart() {
    const cartItems = Object.keys(cart);

    const filteredProducts = products.filter((product) => {
        return cartItems.includes(product.name);
    });

    const cartContainer = document.getElementById("my-cart");
    cartContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
        const productCard = createProductCardCart(product);
        cartContainer.appendChild(productCard);
    });

    const deleteButtons = cartContainer.querySelectorAll(".delete");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", function () {
            const articul = this.getAttribute("data-art");
            if (cart[articul] !== undefined) {
                delete cart[articul];
                saveCartToLS();
                showCart();
            }
        });
    });
    const minus = cartContainer.querySelectorAll(".minus");
    minus.forEach((minu) => {
        minu.addEventListener("click", function () {
            var articul = this.getAttribute("data-art");
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

// Додані функції plusGoods, minusGoods та deleteGoods
function plusGoods() {
    var articul = jQuery(this).attr("data-art");
    if (cart[articul] <= 8) {
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
}

function minusGoods() {
    var articul = jQuery(this).attr("data-art");
    if (cart[articul] > 1) {
        cart[articul]--;
    } else {
        delete cart[articul];
    }
    saveCartToLS();
    showCart();
}

function deleteGoods() {
    var articul = jQuery(this).attr("data-art");
    delete cart[articul];
    saveCartToLS();
    showCart();
}

function saveCartToLS() {
    localStorage.setItem("cart", JSON.stringify(cart));
}