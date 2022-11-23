const baseURL ='https://api.spacexdata.com/v3/rockets'
const api = {
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
            const rocketImage = rocketImages[0];
            return {
              rocketId,
              rocketName,
              rocketDescription,
              rocketImage,
            };
          },
        );
        return rockets;
      },
    };
    
    export default api;