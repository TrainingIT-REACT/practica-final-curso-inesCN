const Home = require("../Home")

beforeAll(() => { console.log("beforeAll")});
beforeEach(() => { console.log("beforeEach")});
afterEach(() => { console.log("afterEach")});
afterAll(() => { console.log("afterAll")});

it("should test", () => {
    console.log("test");
    expect(1 + 1).toBe(2);
});