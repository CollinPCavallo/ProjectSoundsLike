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
    $(".buttonMid").click(function () {
        $("#search").hide()
        $("#mail").hide()
        $("#about").hide()
        console.log("Search Clikced")

    })

    var rapid = new RapidAPI("default-application_59fbc461e4b06d2e9b6cef94", "e938f07c-2598-49e9-adbf-79f15a8f44d0");

    rapid.call('LastFM', 'getSimilarArtists', {
        'apiKey': '1a2f69cf8d628ef504422e08d206f368',
        'artist': 'Datsik',
        'limit': '5',
        'autocorrect': 'true'

    }).on('success', function (payload) {
        console.log(payload)
        /*YOUR CODE GOES HERE*/
    }).on('error', function (payload) {
        /*YOUR CODE GOES HERE*/
    });

})