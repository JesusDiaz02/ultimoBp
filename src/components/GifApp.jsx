import React, { useState } from "react"
import AgregarBusqueda from './AgregarBusqueda';
import GifContenedor from './GifContenedor';

const GifApp = ({categorias=['pokemon']}) =>{
    const [catergoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
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