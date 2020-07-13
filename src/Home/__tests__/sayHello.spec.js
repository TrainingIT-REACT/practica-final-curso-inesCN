const sayHello = require("../sayHello")

describe("#sayHello", () => {
    it("should reply when parameter is empty", () => {
        expect(sayHello()).toBe("Hola!");
    });
});