export const getGif = async (categ)=>{
    try {
        const api = 's6Tmwoqj3IHhMsEEzuQs2E4tCKauvT4G';
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categ)}&limit=10&api_key=${api}`;

        const resp = await fetch(url);
        const {data} = await resp.json();
        
        console.log(data);
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            } 
        })
        console.log(gifs);
        return gifs;
    } catch (error) {
        console.log(error);
    }
}