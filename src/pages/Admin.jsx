import { useState } from "react";

export const Admin = () => {

    const [usuarioMail, setUsuarioMail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para enviar los datos de inicio de sesión al servidor
        // Por ejemplo, utilizando una función de envío de formulario o una API REST
        console.log('Usuario: ', usuarioMail);
        console.log('Contraseña: ', contraseña);
    };

    return (
        <div className="container-form">
            <h2>Menu QR</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="usuarioMail">Usuario</label>
                <input
                    type="text"
                    id="usuarioMail"
                    name="usuarioMail"
                    value={usuarioMail}
                    onChange={(event) => setUsuarioMail(event.target.value)}
                    placeholder="Ingresá tu usuario o tu mail"
                    required
                />

                <label htmlFor="contraseña">Contraseña</label>
                <input
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={contraseña}
                    onChange={(event) => setContraseña(event.target.value)}
                    placeholder="contraseña"
                    required
                />

                <button type="submit">Iniciar Sesión</button>

                <a href="/olvidar-contraseña">¿Olvidaste tu contraseña?</a>
            </form>
        </div>
    );
};