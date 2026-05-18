{/* Estilos */}
import '../../styles/inputs.css';
{/* Hooks */}
import { useState } from "react";

export function InputFile ({params}){

    const [inputValue, setInputValue] = useState("");
    const [className, setClassName] = useState(params.className);
    const handleChange = (event) => {
        setInputValue(event.target.value);
        if (inputValue === "") {
            setClassName(params.className);
        }else{
            setClassName(params.className + "-active");
        }
    };

    return(
        <>
            <div className="container-input">
                <input 
                    type="file" 
                    name={params.name} 
                    className={params.className} 
                    required={params.required}
                    id={params.id}
                    accept={params.accept}
                />
            </div>
        </>
    )
}