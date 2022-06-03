import {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useGEtGifs = (valorBusqueda) => {

    const[estado, setEstado] = useState({
        gifs:[],
        cargando : true
    })

    useEffect(()=>{
    setTimeout(()=>
        getGifs(valorBusqueda)
        .then(gifs => {
            setEstado({
                gifs: gifs,
                cargando: false
            });
        }),3000)

    }, [valorBusqueda])

    return estado;
}


