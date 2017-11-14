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





});