import {ArtistLogic} from "/buisiness-layer/artistLogic.js";
import * as jquerry from "/jquery-3.3.1.min.js"

export function RenderArtist() {
    moment.locale("mk");
    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    this.renderAll = async function(artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);
        
        // $("<div>").attr("id","main-container").addClass("main-container").append(data).appendTo("body").insertBefore("<script>");
        
        $("<div>").addClass("artist-container").appendTo("#main-container");
        var $artistContainer = $(".artist-container");
        $artistContainer
        .append(this.renderArtistProfile())
        .append(this.renderSimilar())
        .append(this.renderBio())
        .append(this.renderArtistAlbum());
        

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
}