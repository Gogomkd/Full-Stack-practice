import {ArtistRepository} from "/repositories/artistRepository.js";
import {AlbumRepository} from "/repositories/albumRepository.js"
import { topTracksRepository } from "../repositories/topTrackRepository.js";
export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    this.trackRepo = new topTracksRepository();
    this.searchArtist = [];
    
    this.getArtistPageData = async function(artistName) {
        
        var artist =  await this.artistRepo.getArtist(artistName);
        var topAlbumNames = await this.artistRepo.getTopAlbumsNames(artistName);
        var albums = await this.albumRepo.getAlbums(artistName, topAlbumNames);
        var artistTopTracks = await this.artistRepo.getTopTrackNames(artistName);
        var tracks = await this.trackRepo.getTopTracks(artistName, artistTopTracks);
        
        var pageData = {
            artist: artist,
            album: albums,
            topTracks: tracks,

        }
        console.log(pageData);
        return pageData;
    }
    this.getArtistSearch = async function(key){
        
        this.searchArtist.push(key);
        var search = await this.artistRepo.searchArtist(this.searchArtist.join("").toString());
        console.log(this.searchArtist.join("").toString());
        
        return search;
    }
}
