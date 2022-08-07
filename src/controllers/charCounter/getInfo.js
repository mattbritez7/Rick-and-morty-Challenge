const axios = require('axios'); 
const countLetter = require("./countLetter.js");

 const getInfo = async (resource, letter) => {
  try {
    const fetchApi = await axios.get(
      `https://rickandmortyapi.com/api/${resource}`
    );
    const data = fetchApi.data.results;
    const dataName = data.map((e) => {
      return e.name;
    });
    let count = countLetter(dataName, letter, resource);
    return count
    
  } catch (e) {
    console.error(e);
  }
};

module.exports = getInfo

