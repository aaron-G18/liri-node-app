require("dotenv").config();
var exec = require("child_process").exec;
var fs = require("fs");
var keys = require("./keys.js");
var omdbkey = require("./omdbkey.js");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var omdbAPIKey = omdbkey.omdb.apiKey;
var argsCopy = Array.from(process.argv);
var argsCopy2 = Array.from(process.argv);
var args = Array.from(argsCopy.splice(2));
var args2 = Array.from(argsCopy2.splice(3));
var search = args2.join(" ");
console.log("Global search= ", search);

//// FUNCTIONS

function concertSearch(args, search) {
    console.log("Concert function search= ", search);
    if (args.length === 1) {
        console.log("*");
        console.log("*");
        console.log("No artist/band was entered. Please enter an artist or band after 'concert-this' to search. (e.g. node liri.js concert-this Metallica");
        console.log("*");
        console.log("*");

    } else {
        var artist = search;
        var queryUrl =
            "https://rest.bandsintown.com/artists/" +
            artist +
            "/events?app_id=codingbootcamp";

        axios.get(queryUrl).then(
            function (response) {
                console.log("*");
                console.log("*");
                console.log(artist + " events:");
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
    };

};

function spotifySearch(args, search) {
    if (args.length === 1) {
        console.log("No song was entered. Here is the info for 'The Sign' by Ace of Base.");
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
};

function movieSearch(args, search) {
    if (args.length === 1) {
        console.log("No movie was entered. Here is the info for 'Mr. Nobody.'")
        var movie = search;
        var queryUrl =
            "http://www.omdbapi.com/?apikey=" + omdbAPIKey + "&t=Mr. Nobody";

        axios.get(queryUrl).then(
            function (response) {
                console.log("*");
                console.log("*");
                console.log("Information for Mr. Nobody");
                console.log("*");
                console.log("*");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year of Release: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Where it was Produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Cast: " + response.data.Actors);
                console.log("*");
                console.log("*");
                console.log("Please enter a movie name after 'movie-this' to search. (e.g. node liri.js movie-this Jaws)");
                console.log("*");
                console.log("*");
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
    } else {

        var movie = search;
        var queryUrl =
            "http://www.omdbapi.com/?apikey=" + omdbAPIKey + "&t=" + movie;

        axios.get(queryUrl).then(
            function (response) {
                console.log("*");
                console.log("*");
                console.log("Information for ", movie);
                console.log("*");
                console.log("*");
                console.log("Movie Title: " + response.data.Title);
                console.log("Year of Release: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Where it was Produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Cast: " + response.data.Actors);
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
    };
};

//  `concert-this`;
if (args[0] === "concert-this") {
    concertSearch(args, search);
};

// `spotify-this-song`

if (args[0] === "spotify-this-song") {
    spotifySearch(args, search);
};

// `movie-this`

if (args[0] === "movie-this") {
    movieSearch(args, search);
};

// `do-what-it-says`;

if (args[0] === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (error, data) {
        var args = data.split(",");
        var args2 = Array.from(args);
        var search = args2.splice(1).join(" ");
        console.log("do-what-it-says function args= ", args);
        console.log("do-what-it-says function args2= ", args2);
        console.log("do-what-it-says function search= ", search);

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        if (args[0] === "concert-this") {
            concertSearch(args, search);
        } else if (args[0] === "spotify-this-song") {
            spotifySearch(args, search);
        } else if (args[0] === "movie-this") {
            movieSearch(args, search);
        } else {
            console.log("Error, do-what-it-says did not work.")
        }

    });
};



// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.