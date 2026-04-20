{/* Estilos */}
import '../../styles/toasts.css'
{/* Componentes */}
import { RiCloseLargeLine } from "react-icons/ri";
{ /* Hooks */ }
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function ToastLogin({params}){

    const [isVisible, setIsVisible] = useState(undefined);
    const [seconds, setSeconds] = useState(10);
    
    const users = useSelector((isVisible)=>{
        return isVisible.users.logIn;
    })
    
    useEffect(() => {
        if (users == false) {
            setIsVisible(true);
            setSeconds(10);
        }
    }, [users]);

    useEffect(() => {
        if (isVisible == false || isVisible == undefined) return;

        const interval = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    setIsVisible(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isVisible]);

    function handleCloseToast() {
        setIsVisible(false);
        setSeconds(10);
    }

    return(
        <>
            <div className='container-toast' id={`container-toast${isVisible?'-active':(isVisible==false?'-inactive':'-disable')}`}>
                <div className='header-toast'>
                    <div className='header-info1'>
                        <div className='header-icon'>{params.icon}</div>
                        <div className='header-value'>
                            <span className='value-toast1'>{params.title}</span>
                        </div>
                    </div>

                    <div className='header-info2'>
                        <div className='header-value'>
                            <span className='value-toast2'>{seconds} seg</span>
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