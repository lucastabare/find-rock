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
            {this.props.data.slice(0, 4).map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[3]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SimiliarArtist;
