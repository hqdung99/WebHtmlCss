$(function() {
    var $inputAddBox = $(".add-box input");
    var $buttonAddBox = $(".add-box button");
    var $containerOpportunities = $(".container-opportunities");
    
    // If you use jQuery, so variable is jQuery object, so
    // you must use jQuery object method.
    $buttonAddBox.on("click", addElementMethodClick);
    $inputAddBox.on("keypress", addElementMethodPressEnter);

    function addElementMethodClick(event) {
        if ($inputAddBox.val().length == 0)
            return;
        
        createElement($inputAddBox.val());
        $inputAddBox.val("");
    }

    function addElementMethodPressEnter(event) {
        if ($inputAddBox.val().length == 0 || event.keyCode != 13)
            return;
        
        createElement($inputAddBox.val());
        $inputAddBox.val("");
    }

    function createElement(nameOpportunity) {
        var $item = $("<div>")
        $item.attr("class", "item");
        var $nameTask = $("<div>");
        $nameTask.attr("class", "name-task");
        var $pNameTask = $("<p>");
        var $iconChecked = $("<div>");
        $iconChecked.attr("class", "icon-checked");
        var $iIconChecked = $("<i>");
        $iIconChecked.attr("class", "far fa-check-circle unchecked");
        var $inputChangeNameTask = $("<input>");

        $pNameTask.text(nameOpportunity);
        $nameTask.append($pNameTask);
        $iconChecked.append($iIconChecked);
        $item.append($nameTask);
        $item.append($iconChecked);
    
        $containerOpportunities.prepend($item);

            // Mark done item

        $iIconChecked.on("click", function() {
            if ($(this).hasClass("unchecked")) {
                $(this).removeClass("far fa-check-circle unchecked");
                $(this).addClass("fas fa-check-circle checked");

                $item.detach();
                $containerOpportunities.append($item);
            } else {
                $(this).removeClass("fas fa-check-circle checked");
                $(this).addClass("far fa-check-circle unchecked");

                $item.detach();
                $containerOpportunities.prepend($item);
            }
        });


        // Add box button
        var $divEditBox = $("<div>");
        $divEditBox.addClass("add-box edit-box");
        var $buttonOk = $("<button>Ok</button>");

        $pNameTask.on("dblclick", function() {
            $(this).detach();
            $iconChecked.detach();

            $inputChangeNameTask.val($(this).text());
            $nameTask.prepend($inputChangeNameTask);

        });

        $inputChangeNameTask.on("focusout", function() {
            $pNameTask.text($(this).val());
            $(this).val("");
            $(this).detach();
            $nameTask.append($pNameTask);
            $item.append($iconChecked);
        });

        // Delete Item
        var longpressTime = 1000;
        var start;
        var divMouseDown;

        $item.on("mousedown", function(e) {
            start = new Date().getTime();
            divMouseDown = setTimeout(function() {
                var $iconDiv = $item.find("div:nth-child(2)");

                if ($iconDiv.hasClass("icon-checked")) {
                    var $iconDelete = $("<div>");
                    $iconDelete.addClass("icon-delete");
                    var $iIconDelete = $("<i>");
                    $iIconDelete.addClass("far fa-trash-alt delete");
                    $iconDelete.append($iIconDelete);

    
                    $iconChecked.detach();
                    $item.append($iconDelete);
    
                    $iIconDelete.on("click", function() {
                        $item.remove();
                    });

                    // Click outside item
                    var $win = $(window);
        
                    $win.on("click.Bst", function(event){
                    if ($item.has(event.target).length == 0 && !$item.is(event.target)) {
                        // outside
                        $iconDelete.remove();
                        $item.append($iconChecked);
                    } else {
                        // inside
                    }
        });
                }
            }, longpressTime);

            $item.on("mouseup mouseleave", function() {
                if (divMouseDown) {
                    clearTimeout(divMouseDown);
                }
                start = 0;
                e.stopPropagation();
            });
        });
    }
});