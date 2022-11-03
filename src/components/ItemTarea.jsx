import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { consultarApi, borrarTarea } from "../helper/queries";

const ItemTarea = ({ tarea, setArregloTarea }) => {
    
  const borrar = () => {
    borrarTarea(tarea.id).then((respuesta) => {
      if (respuesta.status === 200) {
        consultarApi().then((respuesta) => {
          setArregloTarea(respuesta);
        });
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea.nombreTarea}
        <button className="btn btn-danger ms-5" onClick={borrar}>
          borrar
        </button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
