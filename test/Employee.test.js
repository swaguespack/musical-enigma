const Employee = require("../lib/Employee");

test("Can create new employee.", () => {
    const e =  new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name.", () => {
    const name = "Shellby";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id.", () => {
    const id = 1;
    const e = new Employee("Shellby", id);
    expect(e.id).toBe(id);
});

test("Can set email.", () => {
    const email = "shellby@test.com";
    const e = new Employee("Shellby", 2, email);
    expect(e.email).toBe(email);
});

test("Can get name.", () => {
    const testName = "Shellby";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Cant get id.", () => {
    const testId = 1;
    const e = new Employee("Shellby", testId);
    expect(e.getId().toBe(testId))
});

test("Can get email.", () => {
    const testEmail = "shellby@test.com";
    const e = new Employee("Shellby",1,testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

test("Can get role.", () =>{
    const returnVal = "Employee";
    const e = new Employee("Shellby", 1,"shellby@test.com");
    expect(e.getRole()).toBe(returnVal)
})