// Variable
const productsItems = document.querySelector(".products-items");
const cartAmount = document.querySelector(".cart-amount");
const showCartContainer = document.querySelector(".show-cart-container");
const showCart = document.querySelector(".show-cart");
const closeCartContainer = document.querySelector(".close-cart-container");
const showCartItems = document.querySelector(".show-cart-items");
const cartNumberAmount = document.querySelector(".cart-number-amount");
const totalAmountMoney = document.querySelector(".total-amount-money");
const clearCartButton = document.querySelector(".clear-cart");

var productsInfor;

var cart = [];

// Class Load products from products.json file
class Products {
    async getProducts() {
        try {
            var result = await fetch("./data/products.json");
            var data = await result.json();

            return data.items;
        } catch(err) {
            console.log(err);
        }
    }
}

class UI {
    loadProducts(products) {
        products.forEach(product => {
            productsItems.innerHTML += `
            <article class="item">
                <div class="item-image-container">
                    <img src=${product.url} alt="Item 1" class="item-image">
                    <button class="bag-button appear-button" data-id=${product.id}><i class="fas fa-cart-plus"></i>add to cart</button>
                </div>
                <p class="item-name">${product.name}</p>
                <p class="item-price">$${product.price}</p>
            </article>
        `;
        });
    }

    showCartListener() {
        cartAmount.addEventListener("click", () => {
            showCartContainer.classList += " show-cart-container-visible";
            showCart.classList += " show-cart-translate0";
        });
    }

    hideCartListener() {
        closeCartContainer.addEventListener("click", () => {
            showCartContainer.classList.remove("show-cart-container-visible");
            showCart.classList.remove("show-cart-translate0");
        });
    }

    addItemToCartListener() {
        const buttonsDOM = [...productsItems.querySelectorAll(".appear-button")];
        buttonsDOM.forEach(button => {
            button.addEventListener("click", (event) => {
                this.addToCart(button.dataset.id);
                event.target.disabled = true;
                event.target.innerHTML = "IN CART";
            });
        });
    }

    findPriceById(id) {
        var amountMoney = 0;
        productsInfor.forEach(item => {
            if (item.id == id)
                amountMoney = item.price;
        });
        return parseFloat(amountMoney);
    }

    checkIncart(id) {
        for(var i = 0; i < cart.length; i++) {
            if (cart[i].id == id)
                return true;
        }
        return false;
    }

    addToCart(id) {

        var item = undefined;
        productsInfor.forEach(it => {
            if (it.id == id)
                item = it;
        });

        if (item == undefined)
            return;

        if (!this.checkIncart(id)){
            cart.push({"id": id, "amount": 1});
            Storage.saveCart();
        }

        showCartItems.innerHTML += `
        <div class="single-show-cart-item" data-id=${item.id}>
            <div class="image-show-cart-item">
                <img src=${item.url} alt="product">
            </div>
            <div class="infor-item">
                <p>${item.name}</p>
                <p>$${item.price}</p>
                <button class="remove-button" data-id=${item.id}>remove</button>
            </div>
            <div class="amount-item-control">
                <i class="fas fa-chevron-up"></i>
                <p class="amount-item">1</p>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        `;
        this.lastSingleShowCartItemEventListener();
        this.totalAmountMoneyCalc();
    }

    totalAmountMoneyCalc() {
        var listItemInShowCart = showCartItems.querySelectorAll(".single-show-cart-item");
        var lengthItems = listItemInShowCart.length;

        var totalMoney = 0;
        var totalItem = 0;
        listItemInShowCart.forEach(item => {
            let amountItem = parseInt(item.querySelector(".amount-item").textContent);
            var price = this.findPriceById(item.dataset.id);
            totalMoney += amountItem * price;
            totalItem += amountItem;
        });
        totalAmountMoney.innerHTML = "$" + totalMoney;
        cartNumberAmount.innerHTML = "" + totalItem;
    }

    clearCartListener() {
        clearCartButton.addEventListener("click", () => {
            showCartItems.innerHTML ="";
            totalAmountMoney.innerHTML = "$0";
            cartNumberAmount.innerHTML = "0";
            
            const buttonsDOM = [...productsItems.querySelectorAll(".appear-button")];
            buttonsDOM.forEach(button => {
                button.disabled = false;
                button.innerHTML = `<i class="fas fa-cart-plus"></i>add to cart`;
            });
            cart = [];
            Storage.saveCart();
        });

    }

    loadEventButtonsListener() {
        this.showCartListener();
        this.hideCartListener();
        this.addItemToCartListener();
        this.clearCartListener();
    }

    lastSingleShowCartItemEventListener() 
    {
        var cartItems = showCartItems.querySelectorAll(".single-show-cart-item");
        cartItems.forEach(item => 
            {
                item.addEventListener("click", (event) => {
                    if (event.target.classList.contains("remove-button")) 
                    {
                        var id = event.target.dataset.id;
                        Storage.deleteItem(id);

                        var grandParentItem = event.target.parentElement.parentElement;

                        const buttonsDOM = [...productsItems.querySelectorAll(".appear-button")];
                        buttonsDOM.forEach(button => {
                            if (button.dataset.id == id) {
                                button.disabled = false;
                                button.innerHTML = `<i class="fas fa-cart-plus"></i>add to cart`;
                            }
                        });
                        grandParentItem.remove();
                        this.totalAmountMoneyCalc();
                    } else if (event.target.classList.contains("fa-chevron-up")) {
                        var amountElement = event.target.parentElement.querySelector(".amount-item");
                        var amount = parseInt(amountElement.textContent) + 1;
                        amountElement.textContent = amount;
                        var id = event.target.parentElement.parentElement.dataset.id;
                        Storage.changeAmount(id, amount);
                        this.totalAmountMoneyCalc();
                    } else if (event.target.classList.contains("fa-chevron-down")) {
                        var amountElement = event.target.parentElement.querySelector(".amount-item");
                        var amount = parseInt(amountElement.textContent);
                        if (amount > 0) {
                            amountElement.textContent = amount - 1;
                            var id = event.target.parentElement.parentElement.dataset.id;
                            Storage.changeAmount(id, amount);
                        } else {
                            // remove item
                            var grandParentItem = event.target.parentElement.parentElement;
                            var removeButton = grandParentItem.querySelector(".infor-item").querySelector(".remove-button");
                            var id = removeButton.dataset.id;
                            Storage.deleteItem(id);

                            const buttonsDOM = [...productsItems.querySelectorAll(".appear-button")];
                            buttonsDOM.forEach(button => {
                                if (button.dataset.id == id) {
                                    button.disabled = false;
                                    button.innerHTML = `<i class="fas fa-cart-plus"></i>add to cart`;
                                }
                            });
                            grandParentItem.remove();
                        }
                        this.totalAmountMoneyCalc();
                    }
                });
            }
        );
    }

    loadCart() {
        Storage.loadCartStorage();
        for(var i = 0; i < cart.length; i++) {
            this.addToCart(cart[i].id);
            this.disabledAddToCartButton(cart[i].id);
        }
        this.totalAmountMoneyCalc();
    }
    disabledAddToCartButton(id) {
        const buttonsDOM = productsItems.querySelectorAll(".appear-button");
        buttonsDOM.forEach(item => {
            if (item.dataset.id == id) {
                item.disabled = true;
                item.innerHTML = "IN CART";
            }
        });
    }
}

class Storage {
    static saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static deleteItem(id) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                cart.splice(i, 1);
                Storage.saveCart();
                return;
            }
        }
    }

    static changeAmount(id, amount) {
        for(let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                cart[i].amount = amount;
                Storage.saveCart();
                return;
            }
        }
    }

    static loadCartStorage() {
        if (localStorage.getItem("cart") != null)
            cart = [...JSON.parse(localStorage.getItem("cart"))];
        else 
            cart = [];
            Storage.saveCart();
        }
}

var ui = new UI();
var products = new Products();

products.getProducts().then(products => {
    productsInfor = products;
    ui.loadProducts(products);
    ui.loadCart();
    ui.loadEventButtonsListener();
});