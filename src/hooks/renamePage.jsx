{/* Hooks */}
import { useEffect } from "react";

/**
 * Actualiza el titulo de la pestaña del navegador al montar la pagina.
 *
 * Este custom hook recibe el nombre que debe mostrarse en `document.title`
 * y lo asigna cuando el componente que lo usa se renderiza por primera vez.
 *
 * @param {string} name Titulo que se mostrara en la pestaña del navegador.
 * @returns {void}
 *
 * @author Luis Angel Sarmiento Diaz
 */
export function useRenamePage(name){
    useEffect(()=>{
        document.title = name;
    },[])
}
