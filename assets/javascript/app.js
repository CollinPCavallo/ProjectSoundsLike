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

        var aboutUs = $("<h4>");
        var bioAbout = $("<p>");
        var collinPic= $("<img>");
        var brandonPic= $("<img>");
        $("#ourBio").attr("style", "border: 2px solid #80cbc4");

        function createAboutUs(){
            aboutUs.append("About Us")
            bioAbout.append("blah blah blah blah blah blah blah blah")
            collinPic.attr("src", "https://pbs.twimg.com/profile_images/876906909537714178/pdwQ2Sxz.jpg")
            brandonPic.attr("src", "https://www.allkpop.com/upload/2016/06/af_org/G-Dragon_1467158254_af_org.jpg")

            collinPic.addClass("profilePic")
            brandonPic.addClass("profilePic")
            

            $("#aboutBio").append(aboutUs)
            $("#bioUs").append(bioAbout)
            $("#ourBio").append(collinPic)
            $("#ourBio").append(brandonPic)
            

        }

        createAboutUs();
    })
    
    $(".buttonMid").click(function () {

        $("#search").hide()

        $("#mail").hide()

        $("#about").hide()

        console.log("Search Clikced")

        var searchBar = $("<input>")

        var submitBtn = $("<button>")

        var resetButton = $("<button>")

        resetButton.addClass("resetHome");

        resetButton.attr("type", "button")

        resetButton.html("X");

        searchBar.addClass("search");

        searchBar.attr("type", "text")

        searchBar.attr("id", "artistInput")

        searchBar.attr("placeholder", "Artist Name")

        submitBtn.attr("id", "subButn")

        submitBtn.attr("type", "submit")

        $("#searchForm").append(searchBar);

        $("#searchForm").append(submitBtn);

        $("#reset").append(resetButton);

    })

    $("#searchForm").submit(function (e) {

        e.preventDefault();

        var userInput = $("#artistInput").val()

        console.log(userInput)

        $("#artist-list").empty();
        $("#preview-player").empty();

        $("#artistInput").val("");

        var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

        rapid.call('LastFM', 'getSimilarArtists', {

            'apiKey': '1a2f69cf8d628ef504422e08d206f368',

            'artist': userInput,

            'limit': '5',

            'autocorrect': 'true'

        }).on('success', function (payload) {

            console.log(payload)

            for (var i = 0; i < 5; i++) {

                var artList = payload.similarartists.artist[i].name

                var artLinkPath = payload.similarartists.artist[i].url;

                var createName = $("<p>")

                var artistLink = $("<a>")

                createName.append(artList)

                createName.addClass("artistName")

                createName.attr("newName", payload.similarartists.artist[i].name)

                artistLink.attr("href", artLinkPath);

                artistLink.addClass("artInfo")

                artistLink.attr("target", "blank");

                artistLink.append("Find out more about " + artList + " here!");

                $("#artist-list").attr("style", "border: 2px solid #80cbc4;")

                $("#artistInput").attr("placeholder", "Search Again");

                $("#artist-list").append(createName);

                $("#artist-list").append(artistLink);

                console.log(artList)



            }

            $(".artistName").click(function () {

                var iTunesSearch = $(this).attr("newName");

                var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

                var dispName = $("<p>")

                dispName.append(iTunesSearch)

                $("#preview-player").append(dispName);

                $("#preview-player").attr("style", "border: 2px solid #80cbc4;")

                rapid.call('iTunes', 'searchMusic', {

                    'term': iTunesSearch,

                    'country': 'US',

                    'entity': 'musicTrack',

                    'limit': '5',

                    'lang': 'en_us'

                }).on('success', function (musicData) {

                    console.log(musicData);

                    for (var k = 0; k < 5; k++) {

                        var previewUrl = musicData.results[k].previewUrl

                        var trackName = musicData.results[k].trackName

                        var createPreview = $("<p>")

                        createPreview.addClass("iframeText");

                        createPreview.append("Check Out " + iTunesSearch + "'s song " + "'" + trackName + "'" + " here");

                        createPreview.attr("data-link", previewUrl)

                        createPreview.attr("song", trackName)

                        $("#preview-player").append(createPreview);

                    }

                    $(".iframeText").click(function () {

                        var createDiv = $("<div>")

                        createDiv.addClass("previewSong")

                        $(".previewSong").html("")

                        var createPlayer = $("<iframe>")

                        createPlayer.attr("src", $(this).attr("data-link"))

                        createPlayer.attr("width", "450")

                        createPlayer.attr("height", "200")

                        createDiv.append(createPlayer)

                        $(this).append(createDiv)
                        
                        $(".artistName").click(function(){

                            $("#preview-player").html("");

                        })
                    })
                    /*YOUR CODE GOES HERE*/
                }).on('error', function (musicData) {
                    /*YOUR CODE GOES HERE*/
                });

            })
            /*YOUR CODE GOES HERE*/
        }).on('error', function (payload) {
            /*YOUR CODE GOES HERE*/
        });

    })

})