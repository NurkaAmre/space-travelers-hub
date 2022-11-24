
const api =  {
  fetchRockets: async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map(
    ({

      rocket_id: rocketId,
      rocket_name: rocketName,
      description: rocketDescription,
      flickr_images: rocketImages,
    }) => {
      const rocketImage = rocketImages[Math.floor(Math.random() * rocketImages.length)];
      return {
        rocketId,
        rocketName,
        rocketDescription,
        rocketImage,
        reserved: false,
      };
    },
  );
  return rockets;
}
}

    
export default api;