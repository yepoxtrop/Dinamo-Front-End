import logoTransparente from "../../assets/logo/logo_transparente.png"

export function CardDianmoo(){
    return(
        <>
            <div className="container-header-skills-login">
                <div className="container-logo-header-panel-left">
                    <img src={logoTransparente} alt="logo-empresa" className="logo-png-empresa-panel-left"/> {/* Cambiar logo de la empresa */}
                </div>
                <div className="container-title-header-panel-left" >
                    <span className="title-login-panel-left">Dinamo</span> {/* Cambiar el nombre de la empresa */}
                    <span className="title2-login-panel-left">Gestión Documental</span>
                </div>
            </div>
        </>
    )
}