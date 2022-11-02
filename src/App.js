import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';
import ListaTarea from './components/ListaTarea';
import { useEffect, useState } from 'react';
import { consultarApi } from './helper/queries';

function App() {

  

  return (
    <div className="App">
      <Container className='my-5'>
      <h1 className='display-4'>Lista de tarea</h1>
      <FormularioTarea/>
     
      </Container>
    </div>
  );
}

export default App;
