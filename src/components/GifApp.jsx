import React, { useState } from "react"
import AgregarBusqueda from './AgregarBusqueda';
import GifContenedor from './GifContenedor';

const GifApp = () =>{
    const [valoresBusqueda, setValoresBusqueda] = useState(['pokemon']);
    return (
        <>
        <div>Aplicacion de gifs</div>
        <AgregarBusqueda setValoresBusqueda={setValoresBusqueda}/>
        <hr/>
        <ol>
            {
                valoresBusqueda.map(valoresBusqueda=>(
                    <GifContenedor
                    key={valoresBusqueda}
                    valorBusqueda={valoresBusqueda}/>

                ))
            }
        </ol>
        </>
    )
}

export default GifApp