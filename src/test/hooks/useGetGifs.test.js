import {useGEtGifs} from '../../hooks/useGEtGifs';
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas del custom hook useGetGifs', ()=>{

    test('Debe retornar el estado inicial del hook', ()=>{
        const {result} = renderHook(()=>useGEtGifs('pokemon'));
        const {gifs, cargando} = result.current;

        expect(gifs).toEqual([]);
        expect(cargando).toBe(true);
    })

    test('Debe retornar los elementos del valor de la búsqueda', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useGEtGifs('pokemon'));
        await waitForNextUpdate();
        const {gifs, cargando} = result.current;
        
        expect(gifs.length).toBe(5);
        expect(cargando).toBe(false);
    })
    
})