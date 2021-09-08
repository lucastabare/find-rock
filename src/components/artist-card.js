import React from "react";
import "./artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-3">
          <div className="item">
            <img src={this.props.img} alt="" className="img-fluid pic" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ArtistCard;
