import { Axios } from 'axios'
import React, { useState } from 'react'
import './Formulario.css';

export function Formulario() {
    const [tipoid, setTipoid] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [clave, setClave] = useState('')
    const [rol, setRol] = useState('')
    const [activado, setActivado] = useState('')
    const [desactivado, setDesactivado] = useState('')
    const [activo, setActivo] = useState('')
    const [fijo, setFijo] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [tipoPersona, setTipopersona] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    const registrar = async (e) => {
        e.preventDefault()
        const NuevoRegistro = { tipoid, identificacion, clave, rol, activado, desactivado, activo, fijo, celular, correo, direccion, tipoPersona, nombre, apellido };
        const respuesta = await Axios.post('http://localhost:4000/api', NuevoRegistro);
        console.log(respuesta);
    };

    return (
        <div className="container-body col-12">
            <div className="containerF col-md-3 mt-4">
                <form onSubmit={registrar}>
                    <div className="form-group">
                        <select className="form-select" required placeholder="Ingrese Identificación" onChange={e => setTipoid(e.target.value)}>
                            <option selected>Tipo Identificación</option>
                            <option value="1">CC</option>
                            <option value="2">CE</option>
                            <option value="3">RUT</option>
                            <option value="4">NIT</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" id="_id"required placeholder="Identificación" onChange={e => setIdentificacion(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="password" className="form-control" required placeholder="Clave" onChange={e => setClave(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <select className="form-select" required placeholder="Rol" onChange={e => setRol(e.target.value)}>
                            <option selected>Tipo Identificación</option>
                            <option value="1">Administrador</option>
                            <option value="2">Donador</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="date" className="form-control" required placeholder="Activado" onChange={e => setActivado(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="date" className="form-control" required placeholder="Desactivado" onChange={e => setDesactivado(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="boolean" className="form-control" required placeholder="Activo" onChange={e => setActivo(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" required placeholder="Teléfono Fijo" onChange={e => setFijo(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="number" className="form-control" required placeholder="Celular" onChange={e => setCelular(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="mongoose" className="form-control" required placeholder="E-mail" onChange={e => setCorreo(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Dirección" onChange={e => setDireccion(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <select className="form-select" required placeholder="Tipo de persona" onChange={e => setTipopersona(e.target.value)}>
                            <option selected>Tipo Identificación</option>
                            <option value="1">Natural</option>
                            <option value="2">Juridica</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="text" className="form-control" required placeholder="Apellido" onChange={e => setApellido(e.target.value)} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    );
}
