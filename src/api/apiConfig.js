const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "23127c4373d8feda0d7cfcb715cb6bad",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
