import {topTracks} from "/entities/track.js";

export function topTracksRepository() {
    this.getTopTracks = async function (artistName, topTrackNames) {
        var result = [];

        try {
            for (var index = 0; index < topTrackNames.length; index++) {
                const topTrack = topTrackNames[index];
                var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=" + artistName + "&track=" + topTrack + "&api_key=9a32f4fc4d9d7d4157ef376b08a7fa80&format=json");
                var trackData = await response.json();
                result.push(new topTracks(trackData.track));
            }
            return result;
        } catch (error) {
            return result;
        }
    }
}