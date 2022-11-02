import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemTarea = ({tarea}) => {
    return (
        <div>
            <ListGroup.Item>{tarea.nombreTarea}</ListGroup.Item>
        </div>
    );
};

export default ItemTarea;