import React from 'react'
import PropTypes from 'prop-types'

//Otra forma de destructuring es pasar directamente la propiedad
const Result = ( { value , memory } ) => (
    //const { value } = props; o lo que se me ocurra poner --> const Result (aca)
    //debugger
    <section className="result">
        {value}
        <div>
            {memory}
        </div>
        
    </section>
)

Result.propTypes = {
    //El .string chequea que sea un string
    //El . isRequired chequea que este pasado
    value: PropTypes.string.isRequired
}

//Pasamos propiedades por default para que no tire undefined
Result.defaultProps = {
    value: "0"
}

export default Result;