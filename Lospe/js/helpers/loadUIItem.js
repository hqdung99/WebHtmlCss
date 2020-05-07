import Storage from "./localStorage.js";

export default class UIItem {
    loadUIItem(productsList) {

        var products = productsList.products;

        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var id = parseInt(urlParams.get("id")) -1;

        var $itemProduct = $(".item-product");
        var $itemContainer = $(".item-container");
        var $itemLeft = $(".itemLeft");
        var $itemRight = $(".itemRight");
        var $itemImage = $(".item-product .item-container .item-left .image");
        var $productDescription = $(".item-product .item-container .item-left .content-box .product-description p");
        var $tBody = $(".item-product .item-container .item-left .content-box .table tbody");
        var $titleText = $(".item-product .item-container .item-right .buy-container .title .title-text");
        var $price = $(".item-product .item-container .item-right .buy-container .product-price");
        var $minus = $(".item-product .item-container .item-right .buy-container .product-quantity .minus-text")
        var $plus = $(".item-product .item-container .item-right .buy-container .product-quantity .plus-text");
        var $inputQuantity = $(".item-product .item-container .item-right .buy-container .product-quantity input");
        var $buyButton = $(".item-product .item-container .item-right .buy-container .product-quantity .buy-button");
        var $recommend = $(".item-product .item-container .item-right .recommend");
        var $cart = $(".header .navbar .navbar-collapse .navbar-nav .cart-situation");
        var $amount = $(".header .navbar .navbar-collapse .navbar-nav .nav-item .amount");
        $amount.html(`${Storage.countAmount()}`);
        var $title = $("title");
        $title.html(products[id].name);


        var $img = $("<img>");
        $img.addClass("img-fluid");
        $img.attr("alt", products[id].name);
        $img.attr("src", products[id].image);
        $itemImage.append($img);

        $productDescription.html(products[id].description);
        $tBody.html(`
            <tr>
                <th scope="row">Bảo quản</th>
                <td>${products[id].preservation}</td>
            </tr>
            <tr>
                <th scope="row">Hạn sử dụng</th>
                <td>${products[id].expiryday}</td>
            </tr>
            <tr>
                <th scope="row">Xuất xứ</th>
                <td>${products[id].origin}</td>
            </tr>
        `);


        let price = products[id].price / 1000;
        $titleText.html(products[id].name);
        $price.html(price.toFixed(3) + " VNĐ");

        var count = 0;
        var i = 0;
        while(count <= 8 && i < products.length) {

            if ((i) == id) {
                i++;
                continue;
            }

            var $item = $("<div>");
            $item.addClass("item");
            $item.attr("data-id", products[i].id);
            var x = products[i].id;
            $item.on("click", function(event) {
                var $it = event.currentTarget;
                window.document.location = "./item.html?id=" + $it.dataset.id;
            });
            
            $item.html(`
                <div class="image">
                    <img src="${products[i].image}" alt="${products[i].name}" class="img-fluid">
                </div>
                <div class="name">
                    ${products[i].name}
                </div>
                <div class="price">
                    ${price.toFixed(3)} VNĐ
                </div>
            `);
            $recommend.append($item);
            i++;
            count++;
        }

        // Add + - event listener
        $minus.on("click", function() {
            var quantity = parseInt($inputQuantity.val());

            if (quantity > 0)
                $inputQuantity.val(quantity - 1);
            if (isNaN(quantity)) {
                $inputQuantity.val(0);
            }
        });

        $plus.on("click", function() {
            var quantity = parseInt($inputQuantity.val());

            if (isNaN(quantity)) {
                $inputQuantity.val(0);
            } else
                $inputQuantity.val(quantity + 1);
        });

        // Add chon mua button

        $buyButton.on("click", function() {
            var quantity = parseInt($inputQuantity.val());

            if (quantity == 0 || isNaN(quantity)) {
                $(".modal-button").trigger("click");
                return;
            }

            let index = id + 1;
            Storage.addItem(index, quantity);
            $amount.html(`${Storage.countAmount()}`);
            $(".success-button").trigger("click");
        });

        // Watch cart click
        $cart.on("click", function() {
            window.document.location = "./cart.html";
        });
    }
}