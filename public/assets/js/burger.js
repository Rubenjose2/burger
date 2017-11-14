$(function() {
    $("#create-burger").on("submit", function(event) {
        event.preventDefault();
        var burger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: 0
        };
        console.log(burger);
        // Send the Post to populate inside the Database
        $.ajax("/api/burger", {
            type: "POST",
            data: burger
        }).then(function() {
            console.log("new Burger Created");
            location.reload();
        })
    });
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var burger_status = $(this).data("newsdevoured");
        var newBurgerStatus = {
                devoured: burger_status
            }
            // send the request on a PUT
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerStatus
        }).then(function() {
            location.reload();
        })
    });
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the request to be Deleted

        $.ajax("/api/burger/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("Burger Deleted");
            location.reload();
        })
    })

});