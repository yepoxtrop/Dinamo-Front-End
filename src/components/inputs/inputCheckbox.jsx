export function InputCheckbox ({params}){
    return(
        <>
            <input 
                type="checkbox" 
                className={params.className} 
                id={params.id}
                required={params.required}
                name={params.name}
            />
        </>
    )
}