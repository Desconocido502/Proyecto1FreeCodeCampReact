import React from "react";
import "../css/Testimonio.css";

//*Ta mas bomnito con destructuracion de objetos :)
export default function Testimonio({nombre, pais, cargo, imagen, empresa, testimonio}) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../img/testimonio-${imagen}.png`)}
          alt={`testimonio-${imagen}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            <b>{nombre}</b> en {pais}
          </p>
          <p className="cargo-testimonio">
            {cargo} en <b>{empresa}</b>
          </p>
          <p className="texto-testimonio">"{testimonio}"</p>
        </div>
      </div>
    </>
  );
}

/*
export default function Testimonio(props) {
  return (
    <>
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={require(`../img/testimonio-${props.imagen}.png`)}
          alt={`testimonio-${props.imagen}`}
        />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">
            {props.nombre} en {props.pais}
          </p>
          <p className="cargo-testimonio">
            {props.cargo} en {props.empresa}
          </p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
    </>
  );
}
*/