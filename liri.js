//Linking all NPMs
var keys = require("./key.js");
var spotify= require("spotify");
var twitter = require("twitter");
var request = require("request");
//Global Vars
var operator = process.argv[2];
var argument = process.argv[3];
var conKey = keys.twitterKeys.consumer_key;
var conSec = keys.twitterKeys.consumer_secret;
var accKey = keys.twitterKeys.access_token_key;
var accSec = keys.twitterKeys.access_token_secret;
var client = new twitter({
	consumer_key: conKey,
	consumer_secret: conSec,
	access_token_key: accKey,
	access_token_secret: accSec
});
var params ={screen_name: "cuddlykatdfgftw"};
// Spotify function for liri
if (operator== "spotify-this-song"){
	if (argument){
	spotify.search({type: "track", query: argument}, function(err,data){
		if(err){
			console.log("Error has occured!");
			return;
		}else{
			// Variables for data results
			let songInfo = data.tracks.items[0];
			let album = songInfo.album.name;
			let name = songInfo.name;
			let artist = songInfo.artists[0].name;
			let url = songInfo.preview_url;
			// Console Logging Results
			console.log("The Song Name is: "+ name);
			console.log("The Artist is: " + artist);
			console.log("The Album is: "+ album);
			console.log("If you would like to preview the song: " + url);
		}
	});
			// Default Song, Searches the wrong song though....
	}else{
		let argument = "The Sign";
		spotify.search({type: "track", query: argument}, function(err,data){
			if(err){
				console.log("Error has occured!");
				return;
			}else{
				// Variables for data results
				let songInfo = data.tracks.items[0];
				let album = songInfo.album.name;
				let name = songInfo.name;
				let artist = songInfo.artists[0].name;
				let url = songInfo.preview_url;
				// Console Logging Results
				console.log("The Song Name is: "+ name);
				console.log("The Artist is: " + artist);
				console.log("The Album is: "+ album);
				console.log("If you would like to preview the song: " + url);
			}
		});		
	}
// Movie Function for LIRI
}else if (operator == "movie-this"){
	if (argument == true){

	let queryUrl = "http://www.omdbapi.com/?t=" + argument + "&y=&plot=short&r=json&tomatoes=true";
		request(queryUrl, function (er, res, data) {
			let title = JSON.parse(data).Title;
 			let tomMeter = JSON.parse(data).tomatoMeter;
 			let plot = JSON.parse(data).Plot;
 			let date =  JSON.parse(data).Released;
 			let actors = JSON.parse(data).Actors;
 			let imdb = JSON.parse(data).Metascore;
 			let country = JSON.parse(data).Country;
 			let tomURL= JSON.parse(data).tomatoURL;
 			console.log("The title of the movie is : " + title)
 			console.log("It was released on: " +date);
 			console.log("Here is a plot: "+plot);
 			console.log("The Actors are: "+ actors);
 			console.log("The IMDB rating is: "+ imdb);
 			console.log("The movie was produced in :"+ country);
 			console.log("The rating on Rotten Tomatoes is: "+tomMeter);
 			console.log("The Rotten Tomatoes Page is: "+ tomURL);
	});
 	}else{
 		let argument = "Mr.Nobody"
		let queryUrl = "http://www.omdbapi.com/?t=" + argument + "&y=&plot=short&r=json&tomatoes=true";
		request(queryUrl, function (er, res, data) {
			let title = JSON.parse(data).Title;
 			let tomMeter = JSON.parse(data).tomatoMeter;
 			let plot = JSON.parse(data).Plot;
 			let date =  JSON.parse(data).Released;
 			let actors = JSON.parse(data).Actors;
 			let imdb = JSON.parse(data).Metascore;
 			let country = JSON.parse(data).Country;
 			let tomURL= JSON.parse(data).tomatoURL;
 			console.log("The title of the movie is : " + title)
 			console.log("It was released on: " +date);
 			console.log("Here is a plot: "+plot);
 			console.log("The Actors are: "+ actors);
 			console.log("The IMDB rating is: "+ imdb);
 			console.log("The movie was produced in :"+ country);
 			console.log("The rating on Rotten Tomatoes is: "+tomMeter);
 			console.log("The Rotten Tomatoes Page is: "+ tomURL);
 			console.log("It is on Netflix! You should go check it out.");
	});
}
//Twitter
}else if (operator == "twitter"){
	client.get("statuses/user_timeline", function(error, tweets, responses){
		if (error){
			console.log("Opps something went wrong here!");
			console.log(error);
		}else{
			tweets.forEach(function(val){
				console.log(val.text);
				console.log(val.created_at);
			})
		}
	});
}