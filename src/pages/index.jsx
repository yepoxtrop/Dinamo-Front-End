{/* Componentes */}
import { LeftMenu } from "../components/menus/leftMenu.jsx";
import { Header } from "../components/headers/header.jsx";
{/* Constantes */}
import { URL_API } from "../settings/variablesEntrono.js";
{/* Estilos */}
import '../styles/index.css';
{/* Imagenes */}
{/* Estado */}
import {store} from "../services/stores/store.js";
{/* Actions */}
{/* Hooks */}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
{/* Paquetes */}
import axios from "axios";


export const Index = () => {
    const [dataUser, setDataUser] = useState({}); 
    const [timeActive, setTimeActive] = useState(new Date()); 
    const url = `${URL_API}/Datos_Sesion`;
    const dispatch = store.dispatch;

    {/* Traer datos de la cookie */}
    useEffect(()=>{

        const changeData = async ()=>{

            const request = await axios.get(url, {withCredentials: true});
            console.log(request.data)
            setDataUser(request.data.Datos)
            console.log("se ejecuta funcion")
        }
        changeData();

        const interval = setInterval(changeData, 600000);

        return ()=>{clearInterval(interval)}
    }, []);

    {/* Validar el estado del usuario */}
    useEffect(()=>{

        const changeData = async ()=>{

            const request = await axios.get(url, {withCredentials: true});
            console.log(request.data)
            setDataUser(request.data.Datos)
        }
        changeData();

        const interval = setInterval(changeData, 600000);

        return ()=>{clearInterval(interval)}
    }, []);



    return(
        <>  
            <section className="section-container-index">
                {/* Menu */}
                <LeftMenu />
                
        
                {/* Contenido de la pagina */} 
                <section className="container-data-index">
        
                    <Header params={{
                        namePage:"Dashboard", 
                        userRealName:dataUser.nombreCompletoUsuario, 
                        userRol:dataUser.rolUsuarioId,
                        userName:dataUser.nombreUsuario   
                    }} />
                    
                </section>
            </section>
        </>
    )
}