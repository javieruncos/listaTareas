import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';



const ListaTarea = ({arregloTarea,setArregloTarea}) => {
    
    return (
        <div className='w-75 mx-auto mt-5'>
        <ListGroup>
            {
                arregloTarea.map((item)=><ItemTarea  tarea={item} key={item._id} setArregloTarea={setArregloTarea}/>)
            }
         
        </ListGroup>
        </div>
    );
};

export default ListaTarea;