$(function() {
    var listNameFile = ['1 (1).jpeg', '1 (1).jpg', '1 (1).png', '1 (10).jpg', 
                        '1 (11).jpg', '1 (12).jpg', '1 (13).jpg', '1 (14).jpg', 
                        '1 (15).jpg', '1 (16).jpg', '1 (17).jpg', '1 (18).jpg', 
                        '1 (19).jpg', '1 (2).jpg', '1 (2).png', '1 (20).jpg', 
                        '1 (21).jpg', '1 (22).jpg', '1 (23).jpg', '1 (24).jpg', 
                        '1 (25).jpg', '1 (26).jpg', '1 (27).jpg', '1 (28).jpg', 
                        '1 (29).jpg', '1 (3).jpg', '1 (3).png', '1 (30).jpg', 
                        '1 (31).jpg', '1 (32).jpg', '1 (33).jpg', '1 (34).jpg', 
                        '1 (35).jpg', '1 (36).jpg', '1 (37).jpg', '1 (38).jpg', 
                        '1 (39).jpg', '1 (4).jpg', '1 (4).png', '1 (40).jpg', 
                        '1 (41).jpg', '1 (42).jpg', '1 (43).jpg', '1 (44).jpg', 
                        '1 (45).jpg', '1 (46).jpg', '1 (5).jpg', '1 (5).png', 
                        '1 (6).jpg', '1 (6).png', '1 (7).jpg', '1 (7).png', 
                        '1 (8).jpg', '1 (9).jpg'];
    
    var container = document.createElement("div");
    container.className += "container";
    var body = $("body");
    body.prepend(container);

    var turn = 1;
    var count = 0;
    var container1, container2, container3, item, img;

    for(var i = 0; i < listNameFile.length; i++) {

        if ((turn == 1) && (count >= 0) && (count < 4)) {
            if (count == 0) {
                container1 = document.createElement("div");
                container1.className = "container1";
                container.append(container1);
            }

            item = document.createElement("div");   
            item.className = "item";
            img = document.createElement("img");
            img.setAttribute("src", "/Images/" + listNameFile[i]);
            item.append(img);
            container1.append(item);

            count++;
            console.log("turn: " +  turn + ", count: " + count);
        } else if (turn == 1) {
            count = 0;
            turn = 2;
        }
        
        if (turn == 2 && count >= 0 && count < 4) {
            if (count == 0) {
                container2 = document.createElement("div");
                container2.className = "container2";
                container.append(container2);
            }

            item = document.createElement("div");   
            item.className = "item";
            img = document.createElement("img");
            img.setAttribute("src", "/Images/" + listNameFile[i]);
            item.append(img);
            container2.append(item);

            count++;
        } else if (turn == 2) {
            count = 0;
            turn = 3;
        }

        if (turn == 3 && count >= 0 && count < 7) {
            if (count == 0) {
                container3 = document.createElement("div");
                container3.className = "container3";
                container.append(container3);
            }

            item = document.createElement("div");   
            item.className = "item";
            img = document.createElement("img");
            img.setAttribute("src", "/Images/" + listNameFile[i]);
            item.append(img);
            container3.append(item);

            count++;
        } else if (turn == 3) {
            count = 0;
            turn = 1;
        }
    }
});