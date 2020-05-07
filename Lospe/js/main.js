import loadHeader, {changeActiveToHome} from "./helpers/loadHeader.js";
import {loadJsonFile} from "./helpers/loadJson.js";
import loadAbout from "./helpers/loadMainPage.js";


$(document).ready(function() {
    changeActiveToHome();

    // Load review
    var members = loadJsonFile("./data/members.json");
    var membersList;
    members.then(res => {
        membersList = res;
        loadAbout(membersList);
    });

    var $buttons = $(".project-area .container .btn-group .btn");
    $buttons.on("click", (event) => {
        $buttons.removeClass("active");
        event.target.classList.add("active");
        let select = "" + event.target.dataset.filter;

        var $gridContainer = $(".project-area .container .grid");
        $gridContainer.isotope({
            filter: select
        });

    });

    $(".project-area .container .btn-group  #btn1").trigger("click");

    $(".project-area .container .grid .image .popup-link").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    let header_offset = $(".header").height();

    loadHeader();

});