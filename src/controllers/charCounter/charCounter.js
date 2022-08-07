const getInfo = require("./getInfo.js") ;
const resources = require( "../../helpers/resources.js");

const charCounter = async () => {
  try {
    let data = await Promise.all(
      resources.map(async (e) => {
        let resource = e.resource;
        let letter = e.letter;
        let data = await getInfo(resource, letter);
        return data;
      })
    );
    return data
  } catch (e) {
    console.error(e);
  }
};

module.exports = charCounter


