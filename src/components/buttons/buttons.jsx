{/* Hooks */}
import { useGoogleLogin } from "@react-oauth/google"
{/* Iconos */}
import { FaGoogle } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLogoMicrosoft } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
{/* Estilos */}
import "../../styles/buttons.css";

export function GmailButtonLogin({params}){
    const loginGoogle = useGoogleLogin({
        onSuccess: ( credentialResponse ) =>{
            console.log(credentialResponse);
        },
        onError: () =>{
            console.log("Error con google Login")
        },
        flow: 'auth-code'
    });

    return(
        <>
            <button onClick={()=>{loginGoogle()}} className={params.className}>
                <FaGoogle className={params.iconClassName} /> <span className={params.textClassName}>Gmail</span>
            </button>  
        </>
    )
}

export function OutlookButtonLogin({params}){
    return(
        <>
            <button className={params.className}>
                <IoLogoMicrosoft className={params.iconClassName} /> <span className={params.textClassName}>Outlook</span>
            </button>
        </>
    )
}


export function GithubButtonLogin({params}){
    return(
        <>
            <button className={params.className}>
                <VscGithubInverted className={params.iconClassName} /> <span className={params.textClassName}>GitHub</span>
            </button>
        </>
    )
}