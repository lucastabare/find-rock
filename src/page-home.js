import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
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
                  <button className="btng" onClick={this.handleClick}>
                    Escuela DevRock{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Aguante DevRock</h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
