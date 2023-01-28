import axios from 'axios';

// axios.REQUEST_TYPE( 'URL' , { headers:{}, params:{} } )

const searchImages = async (searchterm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID TZLcBHa7zU6Dm8Kf--6syWl6p26AikGxDV_qSg04JPQ', // Access Key generated on Unsplash - see unspl docs
    },
    params: {
      query: searchterm,
    },
  });
  // console.log(response);
  return response.data.results; // narrow the whole RESPONSE from Unsplash to only 'data.results'
};

export default searchImages;
