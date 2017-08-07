$(document).ready(function () {

    $.ajax({
        url:"https://randomuser.me/api/",
        dataType: "json",
        success: function(data) {
            console.log(data.results[0].picture.thumbnail);
            var myNumber: 5;
            var fName = data.results[0].name.first;
            var lName = data.results[0].name.first;
            var headshot = data.results[0].picture.thumbnail
            // console.log(userFirstName);
            $('.title').append(fName + " " + lName);
            $('.avatar img').append('<img src=' + headshot + ">");
            $('.title').append(myNumber);
        }
    });
});
