import React from "react";
import "./page-home.css";
import logo from "./logo.svg";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="">
            <div className="col-md-6 centrar">
              <img src={logo} alt="" id="logo" />
              <form onSubmit={this.handleSubmit} name="Form">
                <div className="busqueda">
                  <input
                    name="busqueda"
                    onChange={this.onChange}
                    type="text"
                    id="buscar"
                    value={this.props.busqueda}
                    placeholder="Busca una banda"
                  />
                </div>
                <div className="actions">
                  <button className="btng" type="submit">
                    Search Similiar
                  </button>
                  <button className="btng">Escuela DevRock </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
