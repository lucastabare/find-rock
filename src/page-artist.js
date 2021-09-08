import React, { Component } from "react";
import SearchBar from "./components/search-bar";
import "./page-artist.css";
import SimiliarArtist from "./components/similar-artis.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3">
              <div className="col-md-6">
                <img
                  src="https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/600x600/public/cerati.jpg"
                  alt=""
                  className="pic-artis margenes50"
                />
              </div>
              <h2>Gustavo Cerati</h2>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014) fue un músico, cantautor,
                actor, y productor discográfico argentino que obtuvo
                reconocimiento internacional por haber sido el líder de la banda
                de rock Soda Stereo. Es considerado por parte de la prensa,
                cantantes y críticos como uno de los músicos más influyentes del
                rock latinoamericano.
              </p>
            </div>
          </div>
          <div className="row centrar">
            <SimiliarArtist />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
