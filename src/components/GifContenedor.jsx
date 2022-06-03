import React from 'react'
import {useGEtGifs} from '../hooks/useGEtGifs'
import GifItem from './GifItem';

const GifContenedor = ({valorBusqueda}) => {

  const {gifs, cargando} = useGEtGifs(valorBusqueda);
  return (
    <>
        <h3>{valorBusqueda}</h3>
        {cargando && <p>Cargando</p>}


        <div>
            {
                gifs.map(({id, title, url})=>(
                    <GifItem
                    key={id}
                    id={id}
                    title={title}
                    url={url}></GifItem>
                ))
            }
        </div>


    </>
  )
}

export default GifContenedor