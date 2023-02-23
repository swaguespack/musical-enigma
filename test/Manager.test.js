const Manager = require("../lib/Manager");

test("Can create office number.", () => {
    const testOfficeNum = "98";
    const e = new Manager("Shellby", 1, "shellby@test.com", testOfficeNum);
    expect(e.school).toBe(testOfficeNum);
});

test("Can get office number", () => {
    const testOfficeNum = "98";
    const e = new Manager("Shellby", 1, "shellby@test.com", testOfficeNum);
    expect(e.getOfficeNumber()).toBe(testOfficeNum);
});

test("Can get role.", () => {
    const returnValue = "Manager";
    const e = new Manager("Shellby", 1, "shellby@test.com", "98");
    expect(e.getRole()).toBe(returnValue);
});