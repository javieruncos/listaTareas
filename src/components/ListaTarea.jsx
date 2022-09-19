import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';


const ListaTarea = () => {
    return (
        <div>
        <ListGroup>
         <ItemTarea/>
         <ItemTarea/>
         <ItemTarea/>
        </ListGroup>
        </div>
    );
};

export default ListaTarea;