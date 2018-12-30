import {ArtistRepository} from "/repositories/artistRepository.js";
import {AlbumRepository} from "/repositories/albumRepository.js"
export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    
    this.getArtistPageData = async function(artistName) {
        
        var artist =  await this.artistRepo.getArtist(artistName);
        var topAlbumNames = await this.artistRepo.getTopAlbumsNames(artistName);
        var albums = await this.albumRepo.getAlbums(artistName, topAlbumNames);


        var pageData = {
            artist: artist,
            album: albums
        }
        console.log(pageData);
        return pageData;
    } 
}
