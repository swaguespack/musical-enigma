const Manager = require("../lib/Manager");

test("Can create office number.", () => {
    const testOfficeNumber = "5";
    const e = new Manager("Amber", 1, "Amber@test.com", testOfficeNumber);
    expect(e.officeNumber).toBe(testOfficeNumber);
});

test("Can get office number", () => {
    const testOfficeNumber = "5";
    const e = new Manager("Amber", 1, "Amber@test.com", testOfficeNumber);
    expect(e.getofficeNumber()).toBe(testOfficeNumber);
});

test("Can get role.", () => {
    const returnValue = "Manager";
    const e = new Manager("Amber", 1, "Amber@test.com", "5");
    expect(e.getRole()).toBe(returnValue);
});