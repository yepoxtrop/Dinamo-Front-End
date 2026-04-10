import { Lineicons } from "@lineiconshq/react-lineicons";
export function InputPassword ({params}){
    return(
        <>
            <input 
                type="password" 
                name={params.name} 
                className={params.className} 
                placeholder={params.placeholder}
                required={params.required}
                maxLength={params.maxLength}
                minLength={params.minLength}
                id={params.id}
            />
            <Lineicons icon={params.icon} className="icon-input-text" />
        </>
    )
}