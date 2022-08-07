const charCounter = require('../controllers/charCounter/charCounter')

test('test api', () => {
    expect( charCounter()).resolves.toBe({
      "char": "l",
      "count": 17,
      "resource": "location"
    }).catch(error => { throw error});
  });