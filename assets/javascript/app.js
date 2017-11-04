$(document).ready(function () {
    $(".buttonLeft").click(function () {
        $("#search").hide()
        $("#mail").hide()
        $("#about").hide()
        console.log("Search Clikced")

    })
    $(".buttonRight").click(function () {
        $("#search").hide()
        $("#mail").hide()
        $("#about").hide()
        console.log("Search Clikced")

    })
    $(".buttonMid").click(function (event) {
        event.preventDefault();
        
        $("#search").hide()
        $("#mail").hide()
        $("#about").hide()
        console.log("Search Clikced")
        
        var searchBar = $("<input>")
        var submitBtn = $("<button>")
        
        searchBar.addClass("search");

        searchBar.attr("type", "text")
        searchBar.attr("id", "artistInput")
        searchBar.attr("placeholder", "Artist Name")

        submitBtn.attr("id", "subButn")
        submitBtn.attr("type", "submit")

        
        $("#searchForm").append(searchBar);
        $("#searchForm").append(submitBtn);

        
    })
    
    $("#searchForm").submit(function(e){

        e.preventDefault();
        var userInput = $("#artistInput").val()
        console.log(userInput)
        

    

    var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

    rapid.call('LastFM', 'getSimilarArtists', {
        'apiKey': '1a2f69cf8d628ef504422e08d206f368',
        'artist': userInput,
        'limit': '5',
        'autocorrect': 'true'

    }).on('success', function (payload) {
        $("#listArtist").empty();
        console.log(payload)
        
        
        for (var i = 0; i < 5; i++){
            
           
            
            var artName = payload.similarartists.artist[i].name;
            
            var addName = $("<p>")
            console.log(artName)
            
            addName.append(artName);
            
            addName.addClass("artistList")

            $("#listArtist").append(addName);

        }
        /*YOUR CODE GOES HERE*/
    }).on('error', function (payload) {
        /*YOUR CODE GOES HERE*/
    });
    console.log(userInput)
    $("#artistInput").text("");
    
})
    

})