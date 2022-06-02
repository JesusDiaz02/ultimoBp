

export const getGifs = async (valorBusqueda) => {

    const url=`https://api.giphy.com/v1/gifs/search?api_key=KikOPTivEN9LzFWFIyh7cAcz9G1DiCBq&q=${valorBusqueda}&limit=5`;
    const resp=await fetch(url);
    const {data} = await resp.json();
    

    const gifs = data.map(({id, title, images}) => {
        return {
            id : id,
            title: title,
            url : images.downsized.url
        }

    })
    return gifs;
}
