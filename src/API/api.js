const baseURL ='https://api.spacexdata.com/v3/rockets'
const api =  {
  fetchRockets: async () => {
  const response = await fetch(`${baseURL}rockets`);
  const data = await response.json();
  const rockets = data.map(
    ({

      rocket_id: rocketId,
      rocket_name: rocketName,
      description: rocketDescription,
      flickr_images: rocketImages,
    }) => {
      return {
        rocketId,
        rocketName,
        rocketDescription,
        rocketImages,
      };
    },
  );
  return rockets;
}
}

    
export default api;