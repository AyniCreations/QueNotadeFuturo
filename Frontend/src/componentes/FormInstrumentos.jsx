import './Formulario.css';

import { Col, Container } from 'reactstrap';
import toast, { Toaster } from 'react-hot-toast';

import React from 'react';

//import 'bootstrap/dist/css/bootstrap.min.css';
const INITIAL_STATE = {
  tipoInstrumento: '',
  instrumento: '',
  descripcion: '',
  precio: '',
  cantidad: '',
};

export function FormInstrumentos() {
  const [instrumentos, setInstrumentos] = React.useState([]);
  const [state, setState] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    fetchInstrumentos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const fetchInstrumentos = () => {
    fetch('http://localhost:4000/api/instrumentos')
      .then((res) => res.json())
      .then(setInstrumentos);
  };

  const deleteInstrumento = (id) => {
    if (window.confirm('Realmente desea eliminar el Instrumento?')) {
      fetch(`http://localhost:4000/api/instrumentos/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Instrumento eliminado');
          fetchInstrumentos();
        });
    }
  };

  const editInstrumento = (id) => {
    fetch(`http://localhost:4000/api/instrumentos/${id}`)
      .then((res) => res.json())
      .then(setState);
  };

  const agregarInstrumento = (e) => {
    e.preventDefault();
    if (state._id) {
      fetch(`http://localhost:4000/api/instrumentos/${state._id}`, {
        method: 'PUT',
        body: JSON.stringify(state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json)
        .then((data) => {
          toast.success('Instrumento actualizado');
          setState(INITIAL_STATE);
          fetchInstrumentos();
        });
    } else {
      fetch('http://localhost:4000/api/instrumentos', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Instrumento creado');
          fetchInstrumentos();
        });
    }
  };

  return (
    <main>
      <Container style={{ marginTop: '1em' }}>
        <Toaster position='bottom-right' reverseOrder={true} />
        <Col sm='6'>
          <h4>Nuevo Instrumento</h4>
          <form onSubmit={agregarInstrumento}>
            <div className='form-group'>
              <select
                className='form-select mb-3'
                required
                placeholder='Ingrese Identificación'
                onChange={handleChange}
                name='tipoInstrumento'
                value={state.tipoInstrumento}
              >
                <option>Tipo Instrumento</option>
                <option value='Cuerda'>Cuerda</option>
                <option value='Percusión'>Percusión</option>
                <option value='Viento'>Viento</option>
              </select>
            </div>
            <br></br>
            <div className='mb-3'>
              <input
                name='instrumento'
                className='form-control'
                type='text'
                required
                placeholder='Ingrese nombre del instrumento'
                onChange={handleChange}
                value={state.instrumento}
              />
            </div>
            <div className='mb-3'>
              <input
                name='descripcion'
                className='form-control'
                type='text'
                placeholder='Ingrese la descripcion'
                onChange={handleChange}
                value={state.descripcion}
              />
            </div>
            <div className='mb-3'>
              <input
                name='precio'
                className='form-control'
                type='text'
                placeholder='Ingrese el precio'
                onChange={handleChange}
                value={state.precio}
              />
            </div>
            <div className='mb-3'>
              <input
                name='cantidad'
                className='form-control'
                type='number'
                placeholder='Ingrese cantidad'
                onChange={handleChange}
                value={state.cantidad}
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary mb-5'
              style={{ marginRight: '0.5em' }}
            >
              Guardar
            </button>
            <button
              type='button'
              className='ml-1 btn btn-info mb-5'
              onClick={() => setState(INITIAL_STATE)}
            >
              Limpiar
            </button>
          </form>
        </Col>
        <Col sm='10'>
          <h4>Lista de instrumentos</h4>
          <table className='table'>
            <thead>
              <tr>
                <th>Tipo instrumento</th>
                <th>Instrumento</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {instrumentos.map((instrumento) => {
                return (
                  <tr key={instrumento._id}>
                    <td>{instrumento.tipoInstrumento}</td>
                    <td>{instrumento.instrumento}</td>
                    <td>{instrumento.descripcion}</td>
                    <td>{instrumento.precio}</td>
                    <td>{instrumento.cantidad}</td>
                    <td>
                      <button
                        onClick={() => editInstrumento(instrumento._id)}
                        type='button'
                        className='btn btn-info'
                        style={{ marginRight: '10px' }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => deleteInstrumento(instrumento._id)}
                        type='button'
                        className='btn btn-danger'
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Col>
      </Container>
    </main>
  );
}
