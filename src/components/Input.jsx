import { useState } from "react";
const pass = "252525";

const Input = () => {
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if (nombre === "") {
            alert("Escribe tu nombre")
            return
        }

        setNombre('');
        setClave('')
        alert(`Bienvenido ${nombre}`)
    };

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setClave(e.target.value)}
                        value={clave}
                    />
                </div>
                {clave === pass ? (<>
                    <label className="cc">Contraseña Correcta!</label>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </>
                ) : null}
            </form>
        </>
    );
};

export default Input;
