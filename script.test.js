<<<<<<< HEAD
const googleSearch = require('./script');

dbMock = [
  'dogs.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
]

it('silly test', () => {
  expect('hello').toBe('hello');
});
it('is running', () => {
  expect(googleSearch('dog', dbMock)).toExist;
});

it('is is working', () => {
  expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
});

it('works with undefined and null input', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([])
  expect(googleSearch(null, dbMock)).toEqual([])
});

it('does not return more than 3 matches', () => {
  expect(googleSearch('.com', dbMock).length).toEqual(3)
=======
//*Import test functions

const googleSearch = require("./script");

//*Mock data
const dbMock = ['dog.com', 'cat.com', 'disney.com', 'kit.com', 'test.com'];

describe("Test google search", () => {

    it("should return empty array", () => {
        expect(googleSearch('nothing', dbMock)).toEqual([]);
    })
    it("Should return Dog array", () => {
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com']);
    });
    it("work with undefined and null", () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    it("does not return more than 3 matches", () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
>>>>>>> 69a85eea0910b7910309e1184f049c9c3492b4ac
});
