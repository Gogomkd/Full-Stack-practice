import {Artist} from "/entities/artist.js";

export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+artistName+"&api_key=9a32f4fc4d9d7d4157ef376b08a7fa80&format=json");
            result = await response.json();
            return new Artist(result.artist);
        }   catch (error) {
            return result;
        }
    }
    this.getTopAlbumsNames = async function(artistName){
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artistName+"&api_key=9a32f4fc4d9d7d4157ef376b08a7fa80&format=json&limit=5");
            result = await response.json();
            var names = result.topalbums.album.map(function(album){
                return album.name;
            });
            return names;
            // return this.artistName.album.name.map(result.artist.topAlbumNames);
            //array.map procitaj ubavo 
        }   catch (error) {
            return result;
        }
    }
    this.getTopTrackNames = async function(artistName){
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artistName+"&api_key=9a32f4fc4d9d7d4157ef376b08a7fa80&format=json&limit=5");
            result = await response.json();
            var names = result.toptracks.track.map(function(track){
                return track.name;
            })
            return names;
        } catch (error){
            return result;
        }
    }
}

