import React from "react";
import "./loading.css";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h1>Error{props.errorMensaje}...</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Error;
