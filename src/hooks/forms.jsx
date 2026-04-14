{/* Hooks */}
import { useState, useRef, useEffect } from "react";
{/* Paquetes */}
import axios from "axios";

export function useSendFormData(api_url){
    const [formData, setFormData] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = async (event) => {

        try {

            /* El formulario no se recarga */
            event.preventDefault();
            
            /* */
            const data = {
                "usuario": event.target.username.value,
                "contrasena": event.target.password.value,
                "fecha": new Date()
            }
            setFormData(data);

            const peticion = await axios.post(`${api_url}`, data);

            return peticion;
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    }

    return handleSubmit ; 
}