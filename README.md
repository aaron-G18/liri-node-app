# liri-node-app

This is an app that runs in node.js. It takes in shell commands, queries the correct API, and returns results depending on what command key words are entered. This app utilizes a few APIs to accomplish this (OMDB, node-spotify, and Bands in Town Artist Events APIs).

The user can get information about:
Concert events for bands/artists entered.
Song/album information for song titles enetered.
Movie information for movie titles entered.

The user will need to create a .env file in the root directory and enter their own API keys for Spotify and OMDB.
The API keys need to be entered on the .env file in the following format:

//# Spotify API keys
//
//SPOTIFY_ID=xxxxxx
//SPOTIFY_SECRET=yyyyyy
//
//# OMDB API key
//
//OMDB_APIKEY=zzzzzz

(without the //, xxxxxx would be their node-spotify ID, yyyyyy would be their node-spotify secret, and zzzzzz would be their OMDB API key)

**There are four main shell commands that can be entered to execute the app correctly.
* **Any of the shell commands should start with "node liri.js" and then have key commands added after that.
* To search for concert events, "concert-this" and the band/artist name should be typed after the "node liri.js" and then press enter. (e.g. "node liri.js concert-this Metallica")
* To search for song/album information, "spotify-this-song" and the song title should be typed after the "node liri.js" and then press enter. (e.g. "node liri.js spotify-this-song Criminal")
* To search for information about a movie, "movie-this" and the movie title should be typed after the "node liri.js" and then press enter. (e.g. "node liri.js movie-this Jaws)

Here are some screenshots of the app results:
