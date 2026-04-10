export function InputSubmit ({params}){
    return(
        <>
            <input 
                type="submit" 
                className={params.className} 
                id={params.id}
                value={params.value}
            />
        </>
    )
}