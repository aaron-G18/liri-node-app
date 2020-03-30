require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var args = process.argv.splice(2);

//  `concert-this`;
console.log(args);


if (args[0] === "concert-this") {
    var artist = args[1];
    var queryUrl =
        "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {

            // console.log(response);

            // console.log(response.data[0].venue);

            console.log(artist + " events:");
            for (var i in response.data) {
                console.log("--------------------")
                console.log("Venue Name: " + response.data[i].venue.name);
                console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
                console.log("Date & Time: " + moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm"));
            };

        },

        // data: [
        //     {
        //       offers: [],
        //       venue: [Object],
        //       datetime: '2020-03-30T20:00:00',
        //       artist: [Object],
        //       on_sale_datetime: '',
        //       description: 'Live Stream \n\nhttps://www.youtube.com/user/MetallicaTV/featured',
        //       lineup: [Array],
        //       id: '102213303',
        //       title: 'Metallica Mondays',
        //       artist_id: '128',
        //       url: 'https://www.bandsintown.com/e/102213303?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
        //     },

        // {
        //     name: 'Metallica Mondays',
        //     country: 'United States',
        //     region: 'NY',
        //     city: 'New York City',
        //     latitude: '40.71427',
        //     longitude: '-74.00597'
        //   }




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

//  1. `node liri.js concert-this <artist/band name here>`

//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

//      * Name of the venue

//      * Venue location

//      * Date of the Event (use moment to format this as "MM/DD/YYYY")

//     * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:

//       * `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`

// `spotify-this-song`
// `movie-this`
// `do-what-it-says`;