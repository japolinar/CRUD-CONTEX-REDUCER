import React, {useState} from 'react'
import { AppContext, useAppContext } from '../context/appContext';

const Create = () => {

  const {createStudent } = useAppContext(AppContext);

  const [name, setName] = useState('');
  const [edad, setEdad] = useState('');

  const handleSubmit = (e)=>{ 
    e.preventDefault();
    //console.log(`Su nombre es: ${name} - tiene ${edad} años `);

    createStudent({
      id: Date.now(),
      name,
      edad
    })

    setName('')
    setEdad('')

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>

        <div className="form-floating">
          <input
            value={edad}
            onChange={(e)=>setEdad(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Edad"
          />
          <label htmlFor="floatingPassword">Edad</label>
        </div>

        <div className="d-grid gap-2 mt-3">
          <button className="btn btn-outline-primary p-2" type="submit">
            <i className="fa-solid fa-circle-plus fa-2xl" />
          </button>
        </div>
      </form>
    </>
  );
}

export default Create
