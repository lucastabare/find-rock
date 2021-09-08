import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

/* 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Javascript peleado
 let elemento = document.createElement("p");
elemento.innerHTML = "Soy Lucas de Cordoba";
let contenedor = document.getElementById("root");
contenedor.appendChild(elemento);

 

let elemento = <p>Hola, soy Lucas desde JSX</p>;
let container = document.getElementById("root");
ReactDOM.render(elemento, container);

let jsx = React.createElement("h1", {}, "hola Soy Lucas desde create element");
let container = document.getElementById("root");
ReactDOM.render(jsx, container); 
 */
