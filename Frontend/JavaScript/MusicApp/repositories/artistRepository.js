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
}