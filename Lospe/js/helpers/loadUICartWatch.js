import Storage from "./localStorage.js";
import sendData from "./sendData.js";

export default class UICart {
    loadUICart(productsList) {
        var products = productsList.products;

        var $cart = $(".header .navbar .navbar-collapse .navbar-nav .cart-situation");
        var $amount = $(".header .navbar .navbar-collapse .navbar-nav .nav-item .amount");
        $amount.html(`${Storage.countAmount()}`);

        // Watch cart click
        $cart.on("click", function() {
            window.document.location = "./cart.html";
        });

        var $numberProducts = $(".cart-section .left-container .title-cart span");
        $numberProducts.html(`(${Storage.countNumberProducts()} sản phẩm)`);

        var cart = Storage.loadCart();
        var cartInforAndTotal = this.loadListProductsInCart(products, cart);
        var cartInfor = cartInforAndTotal[0];

        var $itemsCart = $(".cart-section .left-container .items-cart");
        for(var i = 0; i < cartInfor.length; i++) {
            var $item = $("<div>");
            $item.addClass("item");
            $item.attr("data-id", cartInfor[i].id);
            let price = cartInfor[i].price / 1000;
            $item.html(`
                <div class="image">
                    <img src="${cartInfor[i].image}" alt="${cartInfor[i].name}" class="img-fluid">
                </div>
                <div class="item-infor">
                    <div class="title-description">
                        <div class="image">
                            <img src="./images/lospe.png" alt="Lospe Logo" class="img-fluid">
                        </div>
                        <div class="name-product">
                            <a href="./item.html?id=${cartInfor[i].id}">${cartInfor[i].name}</a>
                        </div>
                    </div>
                    <div class="transport">
                        <div class="image">
                            <img src="./images/chervon-double-right.png" alt="Chervon" class="img-fluid">
                        </div>
                        <span>Giao hàng nhanh</span>
                    </div>
                    <div class="delete">
                        Xóa
                    </div>
                </div>
                <div class="price-quantity">
                    <div class="price">
                        ${price.toFixed(3)} VNĐ
                    </div>
                    <div class="quantity">
                        <span class="minus-text">-</span>
                        <input type="number" value="${cartInfor[i].amount}">
                        <span class="plus-text">+</span>
                    </div>
                </div>
            `);

            $itemsCart.append($item);
        }

        var $minus = $(".cart-section .left-container .items-cart .item .price-quantity .quantity .minus-text")
        var $plus = $(".cart-section .left-container .items-cart .item .price-quantity .quantity .plus-text");
        var $inputQuan = $(".cart-section .left-container .items-cart .item .price-quantity .quantity input");
        var $sumMoney = $(".cart-section .right-container .sum-money .sum");
        var $realMoney = $(".cart-section .right-container .real-money .contain .real");

        // Load money sum
        let cart1 = Storage.loadCart();
        var sumMoney = UICart.calcSumMoney(products, cart1) / 1000;
        $sumMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
        $realMoney.html(`${sumMoney.toFixed(3)} VNĐ`);


        var $deleteItem = $(".cart-section .left-container .items-cart .item .item-infor .delete");
        $deleteItem.on("click", function() {
            var item = event.target.parentNode.parentNode;
            Storage.deleteItem(item.dataset.id)
            item.remove();
            $amount.html(`${Storage.countAmount()}`);

            $numberProducts.html(`(${Storage.countNumberProducts()} sản phẩm)`);

            // loadmoney when delete
            let cart1 = Storage.loadCart();
            var sumMoney = UICart.calcSumMoney(products, cart1) / 1000;
            $sumMoney.html(`${sumMoney.toFixed(3)}  VNĐ`);
            $realMoney.html(`${sumMoney.toFixed(3)}  VNĐ`);
        });

        // input change listener
        $inputQuan.change(function(event) {
            let $input = $(event.target);
            let quantity = parseInt($input.val());

            if (isNaN(quantity) || quantity < 0) {
                $input.val(0);
            }

            quantity = parseInt($input.val());
            Storage.setAmountItem(event.target.parentNode.parentNode.parentNode.dataset.id,  quantity);
            $amount.html(`${Storage.countAmount()}`);

            if (quantity == 0) {
                var $item = $(event.target).parent().parent().parent();
                $item.remove();
            }

            $numberProducts.html(`(${Storage.countNumberProducts()} sản phẩm)`);
        
            let cart = Storage.loadCart();
            var sumMoney = UICart.calcSumMoney(products, cart) / 1000;
            $sumMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
            $realMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
        });

        // Add + - event listener
        $minus.on("click", function(event) {
            var $inputQuantity = $(event.target).next();
            var quantity = parseInt($inputQuantity.val());

            if (quantity > 0) {
                $inputQuantity.val(quantity - 1);
                Storage.setAmountItem(event.target.parentNode.parentNode.parentNode.dataset.id,  parseInt($inputQuantity.val()));
                $amount.html(`${Storage.countAmount()}`);
            }

            if (isNaN(quantity)) {
                $inputQuantity.val(0);
            }

            if (parseInt($inputQuantity.val()) == 0) {
                var $item = $(event.target).parent().parent().parent();
                $item.remove();
            }

            $numberProducts.html(`(${Storage.countNumberProducts()} sản phẩm)`);
        
            let cart = Storage.loadCart();
            var sumMoney = UICart.calcSumMoney(products, cart) / 1000;
            $sumMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
            $realMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
        });

        $plus.on("click", function() {
            var $inputQuantity = $(event.target).prev();
            var quantity = parseInt($inputQuantity.val());

            if (isNaN(quantity)) {
                $inputQuantity.val(1);
            } else
                $inputQuantity.val(quantity + 1);
                Storage.setAmountItem(event.target.parentNode.parentNode.parentNode.dataset.id,  parseInt($inputQuantity.val()));
                $amount.html(`${Storage.countAmount()}`);

            let cart = Storage.loadCart();
            var sumMoney = UICart.calcSumMoney(products, cart) / 1000;
            $sumMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
            $realMoney.html(`${sumMoney.toFixed(3)} VNĐ`);
        });


        // Order
        var $buyButton = $(".cart-section .right-container .order .buy-button");
        var $modalButton = $(".cart-section .right-container .order .check-buy-button");

        $buyButton.on("click", function() {
            var $nameCustomer = $(".cart-section .right-container .order .name-customer");
            var $phoneNumberCustomer = $(".cart-section .right-container .order .phone-number-customer");
            var $emailCustomer = $(".cart-section .right-container .order .email-customer");
            var $dispatchBoxCustomer = $(".cart-section .right-container .order .dispatch-box-customer");
            
            var name = $nameCustomer.val();
            var phoneNumber = $phoneNumberCustomer.val();
            var email = $emailCustomer.val();
            var dispatch = $dispatchBoxCustomer.val();
            
            if (name == "" || phoneNumber == "" || email == "" || dispatch == "") {
                var $invalidButton = $(".cart-section .right-container .order .check-buy-button");
                console.log("a");
                $invalidButton.trigger("click");
                return;
            }

            let cart = Storage.loadCart();
            var sumMoney = UICart.calcSumMoney(products, cart);
            let cartString = UICart.getCartString(products, cart);
            try {
                sendData(name, phoneNumber, email, dispatch, cartString, sumMoney);
                var $successButton = $(".cart-section .right-container .order .success-buy");
                $successButton.trigger("click");
                $nameCustomer.val("");
                $phoneNumberCustomer.val("");
                $emailCustomer.val("");
                $dispatchBoxCustomer.val("");
            } catch (err) {
                console.log(err);
            }

        });
    }

    loadListProductsInCart(products, cart) {
        var list = [];
        var sumMoney = 0;

        for (var i = 0; i < cart.length; i++) {
            var index = UICart.getProduct(products, cart[i].id);
            if (index != -1) {
                sumMoney += parseFloat(products[index].price) * cart[i].amount;
                list.push({"id": cart[i].id, "image": products[index].image, "name": products[index].name, "price": products[index].price, "amount": cart[i].amount});
            }
        }

        return [list, sumMoney];
    }

    static getCartString(products, cart) {
        var list = "";

        for (var i = 0; i < cart.length; i++) {
            var index = UICart.getProduct(products, cart[i].id);
            if (index != -1) {
                list += "{name: " + products[index].name + ", price: " + products[index].price + ", amount: " + cart[i].amount + "}";
            }
        }
        console.log(list);
        return list.toString();
    }

    static calcSumMoney(products, cart) {
        var sumMoney = 0;

        for (var i = 0; i < cart.length; i++) {
            var index = UICart.getProduct(products, cart[i].id);
            if (index != -1) {
                sumMoney += parseFloat(products[index].price) * cart[i].amount;
            }
        }
        return sumMoney;
    }

    static getProduct(products, id) {
        for(var i = 0; i < products.length; i++) {
            if (products[i].id == id)
                return i;
        }
        return -1;
    }
}