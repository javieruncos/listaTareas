import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';



const ListaTarea = ({arregloTarea}) => {
    





    return (
        <div className='w-50 mx-auto'>
        <ListGroup>
            {
                arregloTarea.map((item)=>  <ItemTarea  tarea={item} key={item.id}/>)
            }
         
        </ListGroup>
        </div>
    );
};

export default ListaTarea;