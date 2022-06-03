import {useState} from 'react'

const AgregarBusqueda = ({setValoresBusqueda}) =>{
    const [valorBusqueda, setValorBusqueda] = useState('');
    const cambiarValorBusqueda=(e)=>{
        setValorBusqueda(e.target.value);

    }
    const buscar = (e)=>{
        e.preventDefault();
        setValoresBusqueda(valores =>[valorBusqueda, ...valores])
        setValorBusqueda('')
    }


    return (
        <form onSubmit={buscar}>
            <input
            type ='text'
            value = {valorBusqueda}
            onChange={cambiarValorBusqueda}
            />
        </form>
    )
}

export default AgregarBusqueda