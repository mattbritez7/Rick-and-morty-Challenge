const getInfo = require('../controllers/charCounter/getInfo');

test('test api', () => {
  expect( getInfo('location', 'l')).resolves.toBe({
    "char": "l",
    "count": 17,
    "resource": "location"
  }).catch(error => { throw error});
});