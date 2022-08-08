const axios = require('axios'); 

 const fetchApi = async (resource) => {
  try {
    const fetch = await axios.get(
      `https://rickandmortyapi.com/api/${resource}`
    );
    const data = fetch.data.results;
    const dataName = data.map((e) => {
      return e.name;
    });
    return dataName
    
  } catch (e) {
    console.error(e);
  }
};

module.exports = fetchApi
