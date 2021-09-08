import React from "react";
import ArtistCard from "./artist-card.js";

class SimiliarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar Artits</h5>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-3">
              <ArtistCard
                img="https://via.placeholder.com/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://via.placeholder.com/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://via.placeholder.com/350x350"
                titulo="test loco"
              />
            </div>
            <div className="col-md-3">
              <ArtistCard
                img="https://via.placeholder.com/350x350"
                titulo="test loco"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SimiliarArtist;
