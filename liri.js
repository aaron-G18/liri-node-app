require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var argsCopy = Array.from(process.argv)
var argsCopy2 = Array.from(process.argv)

var args = Array.from(argsCopy.splice(2));
var args2 = Array.from(argsCopy2.splice(3));
var search = args2.join(" ");

//  `concert-this`;

if (args[0] === "concert-this") {
    var artist = search;
    var queryUrl =
        "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {
            console.log("*");
            console.log("*");
            console.log("*");
            console.log(artist + " events:");
            console.log("*");
            console.log("*");
            console.log("*");
            for (var i in response.data) {
                console.log("--------------------")
                console.log("Venue Name: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
                console.log("Date & Time: " + moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm"));
            };

        },

        function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    );
}


// `spotify-this-song`

if (args[0] === "spotify-this-song") {

    if (args.length === 1) {
        console.log("No song was entered. Here is the info for 'The Sign' by Ace of Base.")
        spotify
            .search({
                type: 'track',
                query: "The Sign"
            })
            .then(function (response) {
                console.log("*");
                console.log("*");
                console.log("Results for The Sign");
                console.log("*");
                console.log("*");
                console.log("--------------------")
                console.log("Artist Name: ", response.tracks.items[0].artists[0].name);
                console.log("Song Name: ", response.tracks.items[0].name);
                console.log("Preview Link: ", response.tracks.items[0].preview_url);
                console.log("Album Name: ", response.tracks.items[0].album.name);
                console.log("--------------------")
                console.log("*");
                console.log("*");
                console.log("Please enter a song name after 'spotify-this-song' to search. (e.g. node liri.js spotify-this-song The Sign");
                console.log("*");
                console.log("*");

            })
            .catch(function (err) {
                console.log(err);
            });

    } else {
        spotify
            .search({
                type: 'track',
                query: search
            })
            .then(function (response) {
                console.log("*");
                console.log("*");
                console.log("Results for ", search);
                console.log("*");
                console.log("*");
                for (var i in response.tracks.items) {
                    console.log("--------------------")
                    console.log("Artist Name: ", response.tracks.items[i].artists[0].name);
                    console.log("Song Name: ", response.tracks.items[i].name);
                    console.log("Preview Link: ", response.tracks.items[i].preview_url);
                    console.log("Album Name: ", response.tracks.items[i].album.name);
                };
            })
            .catch(function (err) {
                console.log(err);
            });


    };
}

// response.tracks.items    returns array of objects:
//    
// [
//     {
//       album: {
//              album_type: 'compilation',
//              artists: [Array],
//              available_markets: [Array],
//              external_urls: [Object],
//              href: 'https://api.spotify.com/v1/albums/1Fq1oCtmlSQabl1zIdoWCg',
//              id: '1Fq1oCtmlSQabl1zIdoWCg',
//              images: [Array],
//              name: 'Arista Heritage Series: Ray Parker',
//              release_date: '2000-02-08',
//              release_date_precision: 'day',
//              total_tracks: 11,
//              type: 'album',
//              uri: 'spotify:album:1Fq1oCtmlSQabl1zIdoWCg'
//              },
//       artists: [ [Object] ],
//       available_markets: [
//              'AD', 'AE', 'AR', 'BE', 'BH', 'BO', 'BR', 'CA',
//              'CH', 'CL', 'CO', 'CR', 'CY', 'DE', 'DK', 'DO',
//              'DZ', 'EC', 'EE', 'EG', 'ES', 'FI', 'FR', 'GB',
//              'GR', 'GT', 'HK', 'HN', 'ID', 'IE', 'IN', 'IS',
//              'IT', 'JO', 'JP', 'KW', 'LB', 'LI', 'LT', 'LU',
//              'LV', 'MA', 'MC', 'MT', 'MX', 'MY', 'NI', 'NL',
//               'NO', 'OM', 'PA', 'PE', 'PH', 'PS', 'PT', 'PY',
//              'QA', 'SA', 'SE', 'SG', 'SV', 'TH', 'TN', 'TW',
//              'US', 'UY', 'VN', 'ZA'
//              ],
//       disc_number: 1,
//       duration_ms: 240800,
//       explicit: false,
//       external_ids: { isrc: 'USAR18400117' },
//       external_urls: {
//         spotify: 'https://open.spotify.com/track/300zfRaCgTmEm5Eqe3HqZZ'
//          },
//       href: 'https://api.spotify.com/v1/tracks/300zfRaCgTmEm5Eqe3HqZZ',
//       id: '300zfRaCgTmEm5Eqe3HqZZ',
//       is_local: false,
//       name: 'Ghostbusters',
//       popularity: 61,
//       preview_url: 'https://p.scdn.co/mp3-preview/fc919929a10a7d712f76c36566321e2048f7daa8?cid=ccdf0875926e459ebdc541cd188992a6',
//       track_number: 4,
//       type: 'track',
//       uri: 'spotify:track:300zfRaCgTmEm5Eqe3HqZZ'
//     },




// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//  X    * Artist(s)

//   X   * The song's name

//   X   * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.






// `movie-this`
// `do-what-it-says`;