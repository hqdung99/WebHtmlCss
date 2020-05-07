import loadHeader, {changeActiveToOrder} from "./helpers/loadHeader.js";
import {loadJsonFile} from "./helpers/loadJson.js";
import UIOrder from "./helpers/loadUIOrder.js";

$(document).ready(function() {
    var productsList;

    loadHeader();
    changeActiveToOrder();

    var products = loadJsonFile("./data/products.json");
    var ui = new UIOrder();

    products.then(res => {
        productsList = res;
        console.log(productsList);
        ui.loadUI(productsList);
    });



});