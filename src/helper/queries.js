const url = process.env.REACT_APP_API_TAREA;


export const consultarApi = async()=>{

   try {
    const respuesta = await fetch(url);
    const listaTarea = await respuesta.json()
    console.log(listaTarea)
    return listaTarea

   } catch (error) {
    console.log(error)
    return false
   }

}



export const crearTarea = async(tarea)=>{

    try {
        const respuesta = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(tarea)
        })
        return respuesta
    } catch (error) {
        console.log(error)
        return false
    }

  
}