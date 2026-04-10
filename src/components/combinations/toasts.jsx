{/* Estilos */}
import '../../styles/toasts.css'

export function ToastLogin({params}){
    return(
        <>
            <div className='container-toast'>
                <div>
                    <div>{params.icon}</div>
                    <div>{params.title}</div>
                </div>
                <div>
                    <span>{params.message}</span>
                </div>
            </div>
        </>
    )
}