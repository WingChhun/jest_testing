<<<<<<< HEAD
const swapi = require('./script2');
const fetch = require('node-fetch');

it('calls swapi to get people', () => {
  //expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  //code, in order to make sure that assertions in a
  //callback actually got called.
  expect.assertions(1)
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  })
})

it('calls swapi to get people with promise', () => {
  expect.assertions(2)
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
})

it('getPeople returns count and results', () => {
  mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
        count: 87,
        results: [0,1,2,3,4,5]
    })
  }))

  expect.assertions(4)
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  })
  // done()
})

// Mock functions are also known as "spies", because
// they let you spy on the behavior of a function that is
// called indirectly by some other code, rather than just
// testing the output. You can create a mock function with
// jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.


=======
//* Test asynchronous javascript */

const fetch = require("node-fetch");
const swapi = require("./script2");

describe("Work with Swapi API", () => {

    //TODO: Done as a parameter acts as a middleware
    it("Should return object with 87 count", (done) => {

        //*Number of expect or assertions in the test
        expect.assertions(2);
        swapi
            .getPeople(fetch)
            .then(data => {
                expect(data.count).toEqual(87);
                expect(data.count)
                    .not
                    .toEqual(85);
                done(); //* Return done() flag
            });
    });
});

it('getPeople returns count and results', () => {
    expect.assertions(4);
    //*mock - return a Promise
    const mockFetch = jest
        .fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            })

        }));
    return swapi
        .getPeople(mockFetch)
        .then(data => {
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith("https://swapi.co/api/people")
            expect(data.results.length).toBeGreaterThan(5);
            expect(data.count).toEqual(87);
        })
});
>>>>>>> 69a85eea0910b7910309e1184f049c9c3492b4ac
