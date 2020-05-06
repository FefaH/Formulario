import React from 'react';
import shortid from 'shortid';

function App() {

  const [tarea, setTarea] = React.useState('')

  const [tareas, setTareas] = React.useState([])

  const agregarTarea = e => {
  e.preventDefault()
  if(!tarea.trim()){
    console.log('Campo vacio')
    return
  }
  setTareas([
    ...tareas,
    {tarea, id: shortid.generate()}
  ])
  setTarea('')
  }

  return (

    

    <div className="container mt-5">
  <h1 className="text-center">CRUD APP</h1>
  <hr/>
  <div className="row">

    <div className="col-8">
      <h4 className="text-center">Lista de Tareas</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="lead">Tarea #1</span>
          <button 
            className="btn btn-sm btn-danger float-right mx-2"
          >Eliminar</button>
          <button 
            className="btn btn-sm btn-warning float-right"
          >Editar</button>
        </li>
      </ul>
    </div>

    <div className="col-4">
      <h4 className="text-center">
        Agregar Tarea
      </h4>
      <form>
        <input 
          type="text" 
          className="form-control mb-2"
          placeholder="Ingrese Tarea"
          onChange={e => setTarea(e.target.value)}
          value={tarea}
        />
        <button className="btn btn-dark btn-block" type="submit">Agregar</button>
      </form>
    </div>

  </div>
</div>
  );
}

export default App;
