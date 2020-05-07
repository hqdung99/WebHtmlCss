import loadHeader, {noActive} from "./helpers/loadHeader.js";
import {loadJsonFile} from "./helpers/loadJson.js";
import UICart from "./helpers/loadUICartWatch.js";

$(document).ready(function() {
    loadHeader();
    noActive();

    var products = loadJsonFile("./data/products.json");
    var ui = new UICart();
    var productsList;

    products.then(res => {
        productsList = res;
        console.log(productsList);
        ui.loadUICart(productsList);
    })
});