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