const baseURL ='https://api.spacexdata.com/v3/rockets'
const api = {
    fetchRockets: async () => {
        const response = await fetch(`${baseURL}rockets`);
        const data = await response.json();
        const rockets = data.map(
          ({
            rocket_id: rocketId,
            rocket_name: rocketName,
            rocket_type: rocketType,
            flickr_images: rocketImages,
          }) => {
            const rocketImage = rocketImages[0];
            return {
              rocketId,
              rocketName,
              rocketType,
              rocketImage,
            };
          },
          console.log(rockets)
        );
        return rockets;
      },
    };
    
    export default api;