export const Form = ({params}) =>{
    return(
        <>
            <form action="">
                <input type="text" placeholder={params.text.campo.placeholder}  />
                <br />
                <input type="password" placeholder={params.password.campo.placeholder}  />
                <br />
                <input type="submit" value={params.submit.campo.label}  />

            </form>
        </>
    )
}