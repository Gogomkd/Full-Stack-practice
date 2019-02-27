import {ArtistLogic} from "/buisiness-layer/artistLogic.js";
import * as jquerry from "/jquery-3.3.1.min.js"

export function RenderArtist() {
    moment.locale("mk");
    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    this.renderAll = async function(artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);
        // this.artistSearch = await this.artistPageData.getArtistSearch(artistName)
        // $("<div>").attr("id","main-container").addClass("main-container").append(data).appendTo("body").insertBefore("<script>");
        
        $("<div>").addClass("artist-container").appendTo("#main-container");
        var $artistContainer = $(".artist-container");
        $artistContainer
        .append(this.renderSearchButton())
        .append(this.renderArtistProfile())
        .append(this.renderSimilar())
        .append(this.renderBio())
        .append(this.renderArtistAlbum())
        .append(this.renderArtistTopTracks());

    }
    this.renderArtistProfile = function(){// kreiran div so klasa kade mu se dodava ime i se zakacuva slika od artistot 
       
      return  $("<div>").addClass("artist-name").html(this.artistData.artist.name).append($("<img>").attr("src",this.artistData.artist.image[3]["#text"])); 
    }
   
    this.renderSimilar = function() {//se kreira for ciklus za slicni artisti kolku sto se ponudeni vo apito site se printaat na ekran i site se pokazani so slika i so ime


        var $similarArtist = $("<div>").addClass("similar")
        $similarArtist.prepend($("<span>").addClass("similarMainSpan").html("Similar Artists"));
        
        for (let index = 0; index < this.artistData.artist.similar.artist.length; index++) {
            
            $similarArtist.append($("<div>").addClass("similarArtist").append($("<img>").addClass("similarImg").attr("src", this.artistData.artist.similar.artist[index].image[1]["#text"])).append($("<a>").addClass("similarSpan").attr("href", this.artistData.artist.similar.artist[index].name).html(this.artistData.artist.similar.artist[index].name)).on("click", (event) => {
                event.preventDefault();
                $("#main-container").html("");
                console.log(event.target);
    
                this.renderAll(event.target.text)
    
            }));
            
        }
        return $similarArtist;
    }
    this.renderBio = function () {//funkcija za kreiranje na biografija kade se pecati datata na objavata na biografijata na makedonski i se pokazuva na ekran zaedno so slusateli i so broj na pusteni pesni .... Isto tama ima kratko summary za artistot so link do lastFM


      return  $("<div>").addClass("artist-bio").append($("<span>").html(moment(this.artistData.artist.bio.published).format("DD - MMMM - YYYY"))).append($("<span>").html(this.artistData.artist.stats.listeners).append($(("<p>")).text(" -- Listeners "))).append($("<span>").html(this.artistData.artist.stats.playcount).append($(("<p>")).text(" -- Playcounts "))).append($("<div>").addClass("LastSpan").html(this.artistData.artist.bio.summary));
    }


    this.renderArtistAlbum = function() {// Done pecati albumi kade album apito zema 2 parametara artistname i topalbum names 
        var $albums = $("<div>").addClass("artist-album").appendTo(".artist-container")
        $("<span>").addClass("albumSpan").html("Top Albums").appendTo($albums);
        for (let index2 = 0; index2 < this.artistData.album.length; index2++) {


            $albums.append($("<div>").addClass("albums").append($("<img>").addClass("albumImg").attr("src", this.artistData.album[index2].image[1]["#text"])).append($("<span>").addClass("").html(this.artistData.album[index2].name)));
            
        }
       return  $albums;
    }

    this.renderArtistTopTracks = function() {
        var $tracks = $("<div>").addClass("topTracks").appendTo(".artist-container")
        $("<span>").addClass("topTracksSpan1").html("Top Tracks").appendTo($tracks);
        for (let index3 = 0; index3 < this.artistData.topTracks.length; index3++) {
            $tracks.append($("<div>").addClass("tracks").append($("<span>").addClass("topTracksSpan2").html(this.artistData.topTracks[index3].name)).append($("<img>").addClass("trackImg").attr(("src"),this.artistData.topTracks[index3].album.image[0]["#text"])));
        }
        return $tracks;
    }
    
    this.renderSearchButton = function(){
        var $search = $("<div>").addClass("searchDiv").appendTo(".artist-container")
        
           $("<div>").addClass("top").appendTo(".searchDiv")
           $("<div>").addClass("bottom").appendTo(".searchDiv")
           $("<input>").attr("type", "text").addClass("searchInput").appendTo(".top").on("keypress", async (event) => { 
                var result = await this.artistPageData.getArtistSearch(String.fromCharCode(event.which))
                    for (let index4 = 0; index4 < result.results.artistmatches.artist.length; index4++) {
               var searchartist = $("<div>").addClass("divForSearch").append($("<img>").addClass("searchImg").attr(("src"),result.results.artistmatches.artist[index4].image[1]["#text"])).append($("<h5>").text(result.results.artistmatches.artist[index4]
                .name)).appendTo(".bottom")
              ///sea treba da se dodava so for
                }
                console.log(result);
                console.log(searchartist);
                
            });
        
        // $("<button>").html("Search").addClass("searchButton").appendTo(".searchDiv")
        
        return $search;

    }
 
    // $("<input>").attr("type", "text").keypress(async (event) => {
            
    //     if(this.delayedInput != null){
    //         clearTimeout(this.delayedInput);
    //     }

    //     this.delayedInput = setTimeout(async () => {
    //         this.findArtist = await this.artistPageData.getSearchedArtist(String.fromCharCode(event.which));
    //         console.log("Render", this.findArtist.searchArtist[1]);

    //         var $searchResult = $("<div>").appendTo($main).addClass("search-result");

    //         for(var index4 = 0; index4 < this.findArtist.searchArtist.length; index4++){

    //             $("<div>").appendTo($searchResult).addClass("search-result1")
    //             .append($("<img>").attr("src", this.findArtist.searchArtist[index4].image[1]["#text"]))
    //             .append($("<h5>").text(this.findArtist.searchArtist[index4].name));
    //         }
    //     }, 500);

        

        

        
        
    // }).addClass("input-search")
    // .append($("<input>").attr("type", "submit").addClass("input-submit"))
}