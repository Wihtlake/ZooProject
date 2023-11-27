var loading = false;
var page = 1;

$(document).ready(function () {
    loadProducts();

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $("#product-container").height() - 100 && !loading) {
            loadProducts();
        }
    });
});

function loadProducts() {
    loading = true;
    $("#loading-message").show();

    // Пример данных для новых товаров (замените на ваши данные)
    var newProducts = `
        <div class="product_card">
            <div class="product_card_img">
                <img src="" alt="">
            </div>
            <div class="product_card_img_text">
                <h2>Новый товар</h2>
                <p>цена: 999р</p>
            </div>
            <div class="product_card_button">
                <a href="">добавить в корзину</a>
            </div>
        </div>
        <!-- Добавьте другие товары по аналогии -->
    `;

    // Добавление новых товаров в контейнер с анимацией
    $("#product-container").append(newProducts);

    // Задержка перед появлением новых товаров
    setTimeou
