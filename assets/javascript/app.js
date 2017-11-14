$(document).ready(function () {
    

//this is the function to run when you click on the contact button on the main page
    $(".buttonLeft").click(function () {
//this will hide the three buttons from the site allowing the content to take up the page
        $("#search").hide()

        $("#mail").hide()

        $("#about").hide()

        var createName1 = $("<h4>");
        
        var createName2 = $("<h4>");
        // We used jquery style here because it would add the border to the div that is on the html showing random lines, this makes it so the border doesnt show until the content is loaded
        $("#infotab").attr("style", "border: 2px solid #80cbc4;")
//this is our reset button or "go home button" to refresh the page and reload the buttons
        var resetButton = $("<button>");

        resetButton.addClass("resetHome");

        resetButton.attr("type", "button");

        resetButton.attr("id","reset");

        resetButton.html("X");

        $("#reset").append(resetButton);

       
        $(".resetHome").click(function () {
            location.reload();
        })

        function createCollin() {
            createName1.append("Collin")

//we made everything dynamic with this web page, the icons, the text everything that shows on each page is dynamic
            $("#collinInfo").append(createName1)
            $("#collinInfo").append(

                "<img class='icons' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_square_gray-128.png'> <a class='contact' href='https://github.com/CollinPCavallo' target ='blank'>GitHub</a>" +
                "<br>" +
                "<img class='icons' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_gray-128.png'> <a class='contact' href='https://www.linkedin.com/in/collin-cavallo-383720149/' target ='blank'>Linkdin</a>" +
                "<br>" +
                "<img class='icons' src='https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/google_plus-square-social-media-128.png'> <a class='contact' href='https://plus.google.com/117187149984564164213' target ='blank'>Google</a>"
            )

        }

        function createBrandon() {
            createName2.append("Brandon")

            $("#brandonInfo").append(createName2)
            $("#brandonInfo").append(

                "<img class='icons' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_square_gray-128.png'> <a class='contact' href='https://github.com/bhoang23' target ='blank'>GitHub</a>" +
                "<br>" +
                "<img class='icons' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_gray-128.png'> <a class='contact' href='https://www.linkedin.com/in/brandon-hoang-2646b7128/' target ='blank'>Linkdin</a>" +
                "<br>" +
                "<img class='icons' src='https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/google_plus-square-social-media-128.png'> <a class='contact' href='https://plus.google.com/103907679503488296065' target ='blank'>Google</a>"
            )
        }

        createCollin();
        createBrandon();



    })
//on click funciton for the about us page
    $(".buttonRight").click(function () {



        $("#search").hide()

        $("#mail").hide()

        $("#about").hide()



        var aboutUs = $("<h4>");
        var bioAbout = $("<p>");
        var collinPic = $("<img>");
        var brandonPic = $("<img>");
        $("#ourBio").attr("style", "border: 2px solid #80cbc4");

        var resetButton = $("<button>")

        resetButton.addClass("resetHome");

        resetButton.attr("type", "button")

        resetButton.html("X");

        $("#reset").append(resetButton);

        $(".resetHome").click(function () {
            location.reload();
        })

        function createAboutUs() {
            aboutUs.append("About Us")
            bioAbout.attr("id", "usBio")
            bioAbout.append("Collin and Brandon are two sexy web developers who know how to get a job done. They spend countless ours working on thier crafts. With every new project comes a new challenge. No job is too big no problem is too small, all while looking good. In the words of the great Justin Timberlake <br> 'Im bringing sexy back, YEAH'")
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
//The on click for the middle/ Search Button
    $(".buttonMid").click(function () {

        $("#search").hide()

        $("#mail").hide()

        $("#about").hide()

        console.log("Search Clikced")

        var searchBar = $("<input>");

        var submitBtn = $("<button>");

        var resetButton = $("<button>");

        resetButton.addClass("resetHome");

        resetButton.attr("type", "button");

        resetButton.html("X");

        searchBar.addClass("search");

        searchBar.attr("type", "text");

        searchBar.attr("id", "artistInput");

        searchBar.attr("placeholder", "Artist Name");

        submitBtn.attr("id", "subButn");

        submitBtn.attr("type", "submit");

        $("#searchForm").append(searchBar);

        $("#searchForm").append(submitBtn);

        $("#reset").append(resetButton);
      
        $(".resetHome").click(function () {
            
            location.reload();
        
        })

    })
//this is our user validation modal, if the user doesnt enter an artists name, the modal will pop up and tell them to try again
    $("#searchForm").submit(function (e) {

        if ($("#artistInput").val() === ""){
            e.preventDefault();
            $("#modal1").modal({
                fadeDuration: 200
              });
            
            $("#artistInput").attr("placeholder", "Search Again")

            
            

        }
        else {

        

        e.preventDefault();
//stores the user input in to a variable to be called on later
        var userInput = $("#artistInput").val()

        console.log(userInput)
//this will clear the artist list on the left and the songs on the right everytime a new artist is searched
        $("#artist-list").empty();
        $("#preview-player").empty();

        $("#artistInput").val("");
//ajax call for Lastfm's api to grab similar artist to whatever the user input is.
        var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

        rapid.call('LastFM', 'getSimilarArtists', {

            'apiKey': '1a2f69cf8d628ef504422e08d206f368',

            'artist': userInput,

            'limit': '5',

            'autocorrect': 'true'
//this is the on sucess function to run if the api call was successful.
        }).on('success', function (payload) {

            console.log(payload)
//runs a for loop for 5 objects on the JSON object (payload), and creates elements to be written to the DOM.
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

                $("#artistInput").attr("placeholder", "<--Check these guys out!");

                $("#artist-list").append(createName);

                $("#artist-list").append(artistLink);

                console.log(artList)



            }
//when the 5 similar artist are written to the DOM we made them clickable to pull up songs using ITUNES api, to grab previes of the top 5 songs by the artist.
            $(".artistName").click(function () {

                var iTunesSearch = $(this).attr("newName");

                var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

                var dispName = $("<p>")

                dispName.attr("id", "artSongs")
                dispName.append(iTunesSearch)


                $("#preview-player").append(dispName);

                $("#preview-player").attr("style", "border: 2px solid #80cbc4;")

                rapid.call('iTunes', 'searchMusic', {

                    'term': iTunesSearch,

                    'country': 'US',

                    'entity': 'musicTrack',

                    'limit': '5',

                    'lang': 'en_us'
//this is Pulling the preview url and placing it inside the track name so we can call on it to pull up an Iframe tag to play the song.
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

                        $(".artistName").click(function () {

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
    }
    })


})