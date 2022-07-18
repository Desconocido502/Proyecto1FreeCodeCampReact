import "./App.css";
import React from "react";
import Testimonio from "./components/Testimonio";
import testimonios from "./helpers/Testimonios.json";

function App() {
  //testimonios.data.forEach((testimonio) => console.log(testimonio));
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonios.data.map((testimonio) => {
          return (
            <Testimonio
              nombre={testimonio.nombre}
              pais={testimonio.pais}
              imagen={testimonio.imagen}
              cargo={testimonio.cargo}
              empresa={testimonio.empresa}
              testimonio={testimonio.testimonio}
              key={testimonio.imagen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
