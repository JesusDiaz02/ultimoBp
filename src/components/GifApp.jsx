import React, { useState } from "react"
import AgregarBusqueda from './AgregarBusqueda';
import GifContenedor from './GifContenedor';

const GifApp = () =>{
    const [catergoriasBusqueda, setCategoriasBusqueda] = useState(['pokemon']);
    return (
        <>
        <div>Aplicacion de gifs</div>
        <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda}/>
        <hr/>
        <ol>
            {
                catergoriasBusqueda.map(categoriaBusqueda=>(
                    <GifContenedor
                    key={categoriaBusqueda}
                    valorBusqueda={categoriaBusqueda}/>

                ))
            }
        </ol>
        </>
    )
}

export default GifApp