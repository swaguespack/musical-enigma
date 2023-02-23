const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "Georgia Tech";
    const e = new Intern("Nick", 1, "nick@test.com", testSchool);
    expect(e.school).toBe(testSchool);
});

test("Can get school", () => {
    const testSchool = "Georgia Tech";
    const e = new Intern("Nick", 1, "nick@test.com", testSchool);
    expect(e.getSchool()).toBe(testSchool);
});

test("Can get role.", () => {
    const returnValue = "Intern";
    const e = new Intern("Nick", 1, "nick@test.com", "Georgia Tech");
    expect(e.getRole()).toBe(returnValue);
});