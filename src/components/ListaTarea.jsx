import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';
import { useState ,useEffect} from 'react';
import { consultarApi } from '../helper/queries';


const ListaTarea = () => {
      const [arregloTarea, setArregloTarea] = useState([])

    useEffect(()=>{
      consultarApi().then((respuesta)=>{
         setArregloTarea(respuesta)
      })
    },[])






    return (
        <div className='w-50 mx-auto'>
        <ListGroup>
            {
                arregloTarea.map((item)=><ItemTarea  tarea={item} key={item.id}/>)
            }
          
        </ListGroup>
        </div>
    );
};

export default ListaTarea;