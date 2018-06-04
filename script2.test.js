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