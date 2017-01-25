//Linking all NPMs
var keys = require("./key.js");
var spotify= require("spotify");
var twitter = require("twitter");
var request = require("request");
//Global Vars
var operator = process.argv[2];
var argument = process.argv[3];
console.log(operator);
// Spotify function for liri
if (operator== "spotify-this-song"){
	if (argument == true ){
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

}