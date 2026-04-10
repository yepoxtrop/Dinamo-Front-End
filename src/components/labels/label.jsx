export function Label ({params}){
    return(
        <>
            <label htmlFor={params.htmlFor} className={params.className}>
                {params.value}
            </label>
        </>
    )
}