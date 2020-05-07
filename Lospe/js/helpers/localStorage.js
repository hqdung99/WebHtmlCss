export default class Storage {

    static storeCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static addItem(id, amount) {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);
        
        var check = this.checkAvaiable(data, id);
        if (check != -1) {
            data[check].amount += amount;
        } else {
            data.push({"id": id, "amount": amount});
        }

        this.storeCart(data);
    }

    static setAmountItem(id, amount) {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);
        
        var check = this.checkAvaiable(data, id);
        if (check != -1) {
            data[check].amount = amount;
        } else {
            data.push({"id": id, "amount": amount});
        }

        this.storeCart(data);
        
        if (amount == 0) {
            this.deleteItem(id);
        }
    }

    static deleteItem(id) {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);
        var check = this.checkAvaiable(data, id);
        if (check!= -1) {
            data.splice(check, 1);
        }
        this.storeCart(data);
    }

    static loadCart() {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);

        return data;
    }


    static checkAvaiable(data, id) {
        for(var i = 0; i < data.length; i++) {
            if (data[i].id == id)
                return i;
        }
        return -1;
    }

    static countAmount() {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);
        var amount = 0;
        for(var i = 0; i < data.length; i++) {
            amount += data[i].amount;
        }

        return amount;
    }

    static countNumberProducts() {
        var cart = localStorage.getItem("cart");
        if (cart == null) {
            cart = [];
            this.storeCart(cart);
            cart = localStorage.getItem("cart");
        }
        var data = JSON.parse(cart);

        return data.length;
    }
    
    
}