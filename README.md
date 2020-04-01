# liri-node-app

This is an app that runs in node.js. It takes in shell commands, queries the correct API, and returns results depending on what command key words are entered. This app utilizes a few APIs to accomplish this (OMDB, node-spotify, and Bands in Town Artist Events APIs).

The user can get information about:
Concert events for bands/artists entered.
Song/album information for song titles enetered.
Movie information for movie titles entered.

The user will need to create a .env file in the root directory and enter their own API keys for Spotify and OMDB.
The API keys need to be entered on the .env file in the following format:

'# Spotify API keys'

'SPOTIFY_ID=xxxxxx
SPOTIFY_SECRET=yyyyyy'

'# OMDB API key'

'OMDB_APIKEY=zzzzzz'

(without the ' ', xxxxxx would be their node-spotify ID, yyyyyy would be their node-spotify secret, and zzzzzz would be their OMDB API key)


**There are four main shell commands that can be entered to execute the app correctly.**
* **Any of the shell commands should start with "node liri.js" and then have key commands added after that.**
* To search for concert events, "concert-this" and the band/artist name should be typed after "node liri.js" and then press enter. (e.g. "node liri.js concert-this Metallica")
* To search for song/album information, "spotify-this-song" and the song title should be typed after "node liri.js" and then press enter. (e.g. "node liri.js spotify-this-song Criminal")
* To search for information about a movie, "movie-this" and the movie title should be typed after "node liri.js" and then press enter. (e.g. "node liri.js movie-this Jaws)
* To use the text in the "random.txt" file to search, "do-what-it-says" should be entered after "node liri.js" and then press enter. (e.g. "node liri.js do-what-it-says")

Here are linsk to some screenshots of the app results and a video of the app in use:

[concert-this Metallica](https://github.com/aaron-G18/liri-node-app/blob/master/images/concert-this%20Metallica.png)

[spotify-this-song Criminal](https://github.com/aaron-G18/liri-node-app/blob/master/images/spotify-this-song%20Criminal.png)

[movie-this](https://github.com/aaron-G18/liri-node-app/blob/master/images/movie-this%20Jaws.png)

[do-what-it-says](https://github.com/aaron-G18/liri-node-app/blob/master/images/do-what-it-says.png)

[video of app in use](https://github.com/aaron-G18/liri-node-app/blob/master/images/screen%20reording%20of%20liri%20app.mov)


