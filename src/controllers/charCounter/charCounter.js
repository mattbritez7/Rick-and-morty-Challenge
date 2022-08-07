const getInfo = require("./getInfo.js") ;
const info = require( "../../helpers/resources.js");

const charCounter = async () => {
  try {
    let map = await Promise.all(
      info.map(async (e) => {
        let resource = e.resource;
        let letter = e.letter;
        let data = await getInfo(resource, letter);
        return data;
      })
    );
    return map
  } catch (e) {
    console.error(e);
  }
};

module.exports = charCounter


