import React from 'react';
import { useState ,useEffect} from 'react';
import { crearTarea } from '../helper/queries';
import ListaTarea from './ListaTarea';
import {useForm} from "react-hook-form";
import { Form } from 'react-bootstrap';
import { consultarApi } from '../helper/queries';



const FormularioTarea = () => {

    // const [arregloTarea, setArregloTarea] = useState([])

    // useEffect(()=>{
    //   consultarApi().then((respuesta)=>{
    //      setArregloTarea(respuesta)
    //   })
    // },[])


    const{register,handleSubmit,formState:{errors}}=useForm()


    const onSubmit = (data)=>{
       crearTarea(data).then((respuesta)=>{
        if(respuesta.status === 201){
            console.log("tarea agregada")
        }else{
            console.log("error al agregar tarea")
        }
       })
    } 
    



    return (
        <div className='my-5 w-50 mx-auto'>
            <form className='d-flex' onSubmit={handleSubmit(onSubmit)}>
            <input className='form-control' 
            {...register("nombreTarea",{
                required:"la tarea es un datoobligatorio",
                minLength:{
                    value:2,
                    message:"la cantidad minima de caracteres es de 2"
                }
            })}
            />
            <Form.Text className="text-danger">
              {errors.nombreTarea?.message}
            </Form.Text>
            <button className='btn btn-primary'>enviar</button>
            </form>
            {/* <ListaTarea  arregloTarea={arregloTarea}></ListaTarea> */}
            <ListaTarea></ListaTarea>
        </div>
    );
};

export default FormularioTarea;



