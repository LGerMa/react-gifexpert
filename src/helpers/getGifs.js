export const getGifs = async ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=1WFioVqfz2eoZiVMBzbAv9U2U6l9SCi7&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log("🚀 ~ file: getGifs.js:10 ~ gifs ~ gifs:", gifs);

  return gifs;
};
