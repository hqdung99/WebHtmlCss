import loadHeader, {noActive} from "./helpers/loadHeader.js"
import {loadJsonFile} from "./helpers/loadJson.js"
import UIItem from "./helpers/loadUIItem.js";

$(document).ready(function() {
    loadHeader();
    noActive();

    var products = loadJsonFile("./data/products.json");
    var ui = new UIItem();
    var productsList;

    products.then(res => {
        productsList = res;
        ui.loadUIItem(productsList);
    });
});