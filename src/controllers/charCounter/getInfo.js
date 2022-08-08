const fetchApi = require('./fetchApi')
const countLetter = require("./countLetter.js");

 const getInfo = async (resource, letter) => {
  try {
    let dataName = await fetchApi(resource)
    let count = countLetter(dataName, letter, resource);
    return count
    
  } catch (e) {
    console.error(e);
  }
};

module.exports = getInfo

