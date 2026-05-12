/**
 * Representa la configuracion necesaria para renderizar un campo de formulario.
 *
 * Centraliza las propiedades usadas por los componentes de inputs, como textos,
 * atributos HTML, clases CSS e iconos asociados al campo.
 *
 * @author Luis Angel Sarmiento Diaz
 */
class InputsForms{
    /**
     * Crea una nueva configuracion para un input de formulario.
     *
     * @param {string|null} [label=null] Texto visible asociado al campo.
     * @param {string|null} [labelClassName=null] Clase CSS aplicada al label.
     * @param {string|null} [placeholder=null] Texto de ayuda mostrado dentro del campo.
     * @param {string|null} [type=null] Tipo de input HTML. Por defecto es "text".
     * @param {string|null} [name=null] Nombre del campo enviado en formularios.
     * @param {boolean|null} [required=null] Indica si el campo es obligatorio. Por defecto es false.
     * @param {number|null} [maxLength=null] Longitud maxima permitida.
     * @param {number|null} [minLength=null] Longitud minima permitida.
     * @param {string|null} [className=null] Clase CSS aplicada al input.
     * @param {string|null} [id=null] Identificador unico del campo.
     * @param {React.ComponentType|null} [icon=null] Componente de icono asociado al campo.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    constructor(label=null, labelClassName=null, placeholder=null, type=null, name=null, required=null, maxLength=null, minLength=null, className=null, id=null, icon=null){
        this._label = label;
        this._labelClassName = labelClassName;
        this._placeholder = placeholder;
        this._type = type==null ? "text" : type;
        this._name = name;
        this._required = required==null ? false : required;
        this._maxLength = maxLength;
        this._minLength = minLength;
        this._className = className;
        this._id = id;
        this._icon = icon;
    }

    /**
     * Obtiene el texto visible asociado al campo.
     *
     * @returns {string|null} Texto del label.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get label(){
        return this._label;
    }

    /**
     * Obtiene la clase CSS aplicada al label.
     *
     * @returns {string|null} Clase CSS del label.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get labelClassName(){
        return this._labelClassName;
    }

    /**
     * Obtiene el texto de ayuda mostrado dentro del campo.
     *
     * @returns {string|null} Placeholder del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get placeholder(){
        return this._placeholder;
    }

    /**
     * Obtiene el tipo de input HTML configurado.
     *
     * @returns {string} Tipo del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get type(){
        return this._type;
    }

    /**
     * Obtiene el nombre del campo.
     *
     * @returns {string|null} Nombre del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get name(){
        return this._name;
    }

    /**
     * Indica si el campo es obligatorio.
     *
     * @returns {boolean} Estado requerido del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get required(){
        return this._required;
    }

    /**
     * Obtiene la longitud maxima permitida para el campo.
     *
     * @returns {number|null} Longitud maxima.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get maxLength(){
        return this._maxLength;
    }

    /**
     * Obtiene la longitud minima permitida para el campo.
     *
     * @returns {number|null} Longitud minima.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get minLength(){
        return this._minLength;
    }

    /**
     * Obtiene la clase CSS aplicada al input.
     *
     * @returns {string|null} Clase CSS del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get className(){
        return this._className;
    }

    /**
     * Obtiene el identificador unico del campo.
     *
     * @returns {string|null} Identificador del input.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get id(){
        return this._id;
    }

    /**
     * Obtiene el componente de icono asociado al campo.
     *
     * @returns {React.ComponentType|null} Componente de icono.
     *
     * @author Luis Angel Sarmiento Diaz
     */
    get icon(){
        return this._icon;
    }
}

export default InputsForms;
