import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifContenedor from '../components/GifContenedor';
import { useGEtGifs } from '../hooks/useGEtGifs';
jest.mock('../hooks/useGetGifs')


describe('pruebas en <GifContenedor/>',()=>{

    

    test('debe mostrar los gifs al cargar el hook', ()=>{

        const gifs = [
            {
                id : '1',
                url : 'https://jesus.diaz/imagen.jpg',
                title : 'imagen uno'
            },
            {
                id : '2',
                url : 'https://jesus.diaz/imagen2.jpg',
                title : 'imagen dos'
            },
            {
                id : '3',
                url : 'https://jesus.diaz/imagen3.jpg',
                title : 'imagen tres'
            }
        ]
        
        useGEtGifs.mockReturnValue({
            gifs:gifs,
            cargando : false
        })

        
        const wrapper = shallow(<GifContenedor valorBusqueda={'pokemon'}/>)

        expect(wrapper.find('p').exists()).toBe(false)

})

test('debe mostrar cargando', ()=>{

    
    useGEtGifs.mockReturnValue({
        gifs:[],
        cargando : true
    })

    
    const wrapper = shallow(<GifContenedor valorBusqueda={'pokemon'}/>)

    expect(wrapper.find('p').exists()).toBe(true)

})
test('cantidad de  elemenentos GIfItem coinciden con el numero de resultados', ()=>{

    const gifs = [
        {
            id : '1',
            url : 'https://jesus.diaz/imagen.jpg',
            title : 'imagen uno'
        },
        {
            id : '2',
            url : 'https://jesus.diaz/imagen2.jpg',
            title : 'imagen dos'
        },
        {
            id : '3',
            url : 'https://jesus.diaz/imagen3.jpg',
            title : 'imagen tres'
        }
    ]
    
    useGEtGifs.mockReturnValue({
        gifs:gifs,
        cargando : false
    })

    
    const wrapper = shallow(<GifContenedor valorBusqueda={'pokemon'}/>)

    expect(wrapper.find('GifItem').length).toBe(3)

})
})