{/* Componentes */}
import { InputSubmit } from "../../components/inputs/inputSubmit.jsx";
import { Label } from "../../components/labels/label.jsx";
import { TargetInputText, TargetInputPassword, TargetInputCheckbox, TargetInputEmail, TargetInputFile } from "../combinations/targetInputs.jsx";
{/* Hooks */}
import { useNavigate } from "react-router-dom";
{/* Estado */}
import { store } from "../../services/stores/store.js";
{/* Actions */}
import { setLogin } from "../../services/stores/slices/users/slice.js";
import { setWait } from "../../services/stores/slices/buttons/slice.js";
{/* Paquetes */}
import axios from "axios";
{/* Estilos */}
import '../../styles/forms.css';
import { Link } from "react-router-dom";

export function Form ({params, api_url, api_url2}){
    
    {/* Componentes de inputs */}
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox
    };

    {/* Envio de datos con hook personalizado */}

    const dispatch = store.dispatch;
    const navigate = useNavigate();

    const handleSubmit = async (event) =>{
        
        try {
            /* El formulario no se recarga */
            event.preventDefault();

            dispatch(setWait(true)); 
            
            /* Objeto con los datos del form */
            const data = {
                "usuario": event.target.username.value,
                "contrasena": event.target.password.value,
                "fecha": new Date()
            }
            
            dispatch(setLogin([undefined, undefined]));

            const peticion = await axios.post(`${api_url}`, data, {
                withCredentials: true
            });

            

            

            if (peticion.status == 200){
                
                try {
                    const peticion2 = await axios.get(`${api_url2}`, {
                        withCredentials: true
                    });
                    
                    console.log(peticion2.data.Datos)
                    if (peticion2.data && peticion2.data.Datos) {
                        dispatch(setLogin([true, true, peticion2.data.Datos]));
                        navigate("/index");
                    } else {
                        dispatch(setLogin([false, undefined, undefined]));
                    }
                } catch (error2) {
                    console.log("Error en segunda petición:", error2);
                    dispatch(setLogin([false, undefined, undefined]));
                }

            }else{
                dispatch(setLogin([false, undefined, undefined]));
            }

            dispatch(setWait(false));

        } catch (error) {
            console.log(error)
            dispatch(setLogin([false, undefined, undefined]));
            dispatch(setWait(false));

        }
        
    }; 

    return(
        <>
            <form onSubmit={handleSubmit}>
                {Object.entries(params).map(([key, value]) => {
                    const Component = fieldComponents[key];
                    return <div key={key} className="container-inputs">{Component ? <Component params={value.campo} /> : null}</div>;
                })}
            </form>
        </>
    )
}



export function FormSignature({params, paramsTerms, paramsButtons, classNameForm}){
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox,
        email: TargetInputEmail
    }
    return(
        <>
            <form className={classNameForm}>
                <div className="container-principal-input-form-signature">
                    {Object.entries(params).map(([key, value]) => {
                    const Component = fieldComponents[key];
                    if (!Array.isArray(value)) {
                        return (
                            <div key={key} className={"container-inputs-signature"}>
                                {Component ? <Component params={value} /> : null}
                            </div>
                        );
                    }

                    return value.map((item, index) => (
                        <div key={`${key}-${index}`} className="container-inputs-signature">
                            {Component ? <Component params={item} /> : null}
                        </div>
                    ));
                })}
                </div>
                
                <div className="container-second-input-form-signature">
                    {Object.entries(paramsTerms).map(([key, value]) => {
                        return <div key={key} className="container-inputs"><TargetInputCheckbox params={value} /></div>;
                    })}
                </div>
                
                <div className="container-buttons-input-form-signature">
                    {Object.entries(paramsButtons).map(([key, value]) => {
                        return <div key={key} className="container-inputs"><InputSubmit params={value} /></div>;
                    })}
                </div>
                
            </form>
        </>
    )
}

export function FormRenewSignature({params, paramsFiles, paramsButtons}){
    const fieldComponents = {
        text: TargetInputText,
        password: TargetInputPassword,
        submit: InputSubmit,
        checkbox: TargetInputCheckbox,
        email: TargetInputEmail
    }
    return(
        <>
            <form enctype="multipart/form-data">
                <div>
                    <div></div>

                    <div>
                        <div>
                            <span>Configuración de Nueva Clave</span>
                        </div>
                        <div>
                            {Object.entries(params).map(([key, value]) => {
                                const Component = fieldComponents[key];
                                if (!Array.isArray(value)) {
                                    return (
                                        <div key={key} className={"container-inputs-signature"}>
                                            {Component ? <Component params={value} /> : null}
                                        </div>
                                    );
                                }

                                return value.map((item, index) => (
                                    <div key={`${key}-${index}`} className="container-inputs-signature">
                                        {Component ? <Component params={item} /> : null}
                                    </div>
                                ))
                            })}
                        </div>

                        <div className="container-buttons-input-form-signature">
                            {Object.entries(paramsButtons).map(([key, value]) => {
                                return <div key={key} className="container-inputs"><InputSubmit params={value} /></div>;
                            })}
                        </div>

                        <div>
                            <span>Este proceso generará un nuevo archivo .p12 válido por 3 meses.</span>
                        </div>
                        
                    </div>
                </div>
                <div></div>
            </form>
        </>
    )
}