import Storage from "./localStorage.js";

export default class UIOrder {

    loadUI(productsList) {
        var products = productsList.products;

        var $orderProducts = $(".order-products");
        var $orderContainer = $(".order-products .order-container");
        
        var count = 0;
        var limit = 4;
        var $orderRowCardsItem = $("<div>");
        $orderRowCardsItem.addClass("order-row-cards-item");
        $orderContainer.append($orderRowCardsItem);

        for(var i = 0; i < products.length; i++) {
            var $orderCard = $("<div>");
            $orderCard.addClass("order-card");
            $orderCard.attr("data-id", products[i].id);

            var $orderImage = $("<div>");
            $orderImage.addClass("order-image");
            var $img = $("<img>");
            $img.addClass("img-fluid");
            $img.attr("src", products[i].image);
            $img.attr("alt", products[i].name);
            $orderImage.append($img);

            var $title = $("<div>");
            $title.addClass("title");
            $title.html(`<h5>${products[i].name}</h5>`)

            var $price = $("<div>");
            $price.addClass("price");
            let price = products[i].price / 1000;
            $price.html(`<p>${price.toFixed(3)} VNĐ</p>`)
            
            var $moreInforButton = $("<div>");
            $moreInforButton.addClass("more-infor-button");
            var $a = $("<a>");
            $a.html("chi tiết");
            $a.attr("href", "./item.html?id=" + products[i].id);

            $moreInforButton.append($a);

            var $contentBox = $("<div>");
            $contentBox.addClass("content-box");
            $contentBox.append($title);
            $contentBox.append($price);
            $contentBox.append($moreInforButton);

            $orderCard.append($orderImage);
            $orderCard.append($contentBox);

            if (count < limit) {
                $orderRowCardsItem.append($orderCard);
            } else {
                count = 0;
                $orderRowCardsItem = $("<div>");
                $orderRowCardsItem.addClass("order-row-cards-item");
                $orderContainer.append($orderRowCardsItem);
                $orderRowCardsItem.append($orderCard);
            }

            count++;
        }

        var $cart = $(".header .navbar .navbar-collapse .navbar-nav .cart-situation");
        var $amount = $(".header .navbar .navbar-collapse .navbar-nav .nav-item .amount");
        $amount.html(`${Storage.countAmount()}`);
        // Watch cart click
        $cart.on("click", function() {
            window.document.location = "./cart.html";
        });

    }
}