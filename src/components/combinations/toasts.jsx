{/* Estilos */}
import '../../styles/toasts.css'
{/* Componentes */}
import { RiCloseLargeLine } from "react-icons/ri";
{ /* Hooks */ }
import { useState, useEffect } from "react";

export function ToastLogin({params}){
    const [state, setState] = useState(false);
    const [time, setTime] = useState(10);
    
    useEffect(() => {
        if (!state) return;

        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setState(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [state]);

    function handleCloseToast() {
        setState(true);
    }

    return(
        <>
            <div className='container-toast' id={`container-toast${state?'-active':'-inactive'}`}>
                <div className='header-toast'>
                    <div className='header-info1'>
                        <div className='header-icon'>{params.icon}</div>
                        <div className='header-value'>
                            <span className='value-toast1'>{params.title}</span>
                        </div>
                    </div>

                    <div className='header-info2'>
                        <div className='header-value'>
                            <span className='value-toast2'>{time} seg</span>
                        </div>
                        <div className='header-icon'><RiCloseLargeLine className='icon-close-toast' onClick={handleCloseToast}/></div>
                    </div>
                    
                </div>
                <div className='body-toast'>
                    <span>{params.message}</span>
                </div>
            </div>
        </>
    )
}