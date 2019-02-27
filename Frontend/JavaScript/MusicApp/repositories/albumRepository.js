import { Album } from "/entities/album.js";

export function AlbumRepository() {
    this.getAlbums = async function (artistName, topAlbumNames) {
        var result = [];

        try {
            for (var index = 0; index < topAlbumNames.length; index++) {
                const album = topAlbumNames[index];
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + artistName + "&album=" + album + "&api_key=9a32f4fc4d9d7d4157ef376b08a7fa80&format=json");
                var albumData = await response.json();
                result.push(new Album(albumData.album));
            }
            return result;
        } catch (error) {
            return result;
        }
    }
   
}