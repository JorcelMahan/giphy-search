

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;


    const response = await fetch(url);
    const { data } = await response.json();



    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.fixed_height_downsampled.url,
        };
    });

    return gifs;
};