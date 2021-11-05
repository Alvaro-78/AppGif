//  encodeURI nos soluciona los errores que pueda dar la url
const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category,
  )}&limit=20&api_key=RSnS98lIRy8kdgDH5qUR3kjiSYEtHUk5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
