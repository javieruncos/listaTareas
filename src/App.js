import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import FormularioTarea from './components/FormularioTarea';


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
