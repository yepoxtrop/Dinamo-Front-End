import { Form } from "../components/forms/form.jsx";

export const Login = () =>{
    return(
        <>  
            <section>

                <section></section>

                <section>
                    <h1>Login</h1>
                    <Form params={{
                        "text":{
                            "campo":{
                                "label": "Usuario De Dominio",
                                "placeholder": "luis.sarmiento",
                                "type": "text",
                                "name": "username",
                                "required": true,
                                "maxLength": 50,
                                "minLength": 3
                            }, 
                        }, 
                        "password": {
                            "campo":{
                                "label": "Contraseña",
                                "placeholder": "Ingresa tu contraseña",
                                "type": "password",
                                "name": "password",
                                "required": true,
                                "maxLength": 100,
                                "minLength": 6
                            }
                        },
                        "submit": {
                            "campo":{
                                "label": "Iniciar Sesión",
                                "type": "submit"
                            }
                        }

                    }}/>
                </section>
            </section>
            
        </>
    )
}