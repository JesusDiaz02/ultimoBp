import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useGEtGifs = (valorBusqueda) => {

    const[estado, setEstado] = useState({
        gifs:[],
        cargando : true
    })

    useEffect(()=>{
        getGifs(valorBusqueda)
        .then(gifs => {
            setEstado({
                gifs: gifs,
                cargando: false
            });
        })

    })

    return estado;
}


