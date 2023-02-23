const Engineer = require("../lib/Engineer");

test("Can create GitHub.", () => {
    const testGithub = "swaguespack";
    const e = new Engineer("Shellby", 11, "shellby@test.com", testGithub);
    expect(e.github).toBe(testGithub);
});

test("Can get GitHub", () => {
    const testGithub = "swaguespack";
    const e = new Engineer("Shellby", 11, "shellby@test.com", testGithub);
    expect(e.getGithub()).toBe(testGithub);
});

test("Can get role.", () => {
    const returnValue = "Engineer";
    const e = new Engineer("Shellby", 11, "shellby@test.com", "swaguespack");
    expect(e.getRole()).toBe(returnValue);
});