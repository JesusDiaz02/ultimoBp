import React from 'react'
import {useGEtGifs} from '../hooks/useGEtGifs'
import GifItem from './GifItem';

const GifContenedor = ({valorBusqueda}) => {

  const {gifs, cargando} = useGEtGifs(valorBusqueda);
  return (
    <>
        <h3>{valorBusqueda}</h3>
        {cargando && <p className='animate__animated animate__bounceInUp'>Cargando</p>}


        <div className='card-grid animate__animated animate__bounceInUp'>
            {
                gifs.map((gif)=>(
                    <GifItem
                    key={gif.id}
                    {... gif}/>
                ))
            }
        </div>


    </>
  )
}

export default GifContenedor