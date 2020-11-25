let age = 32;
let username = "John";
let isUpdated = true;
function display(id, name) {
    console.log("Id = " + id + ", Name = " + name);
}
var employee;
employee = {
    id: 100,
    name: "John"
};
let employeefirstName = 'John';
let employeelastName = 'Doe';
let employeesurName = 'Mr';
const num = 100;
let first = 123;
let second = 0x37CF;
let third = 0o377;
let fourth = 0b111001;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
let employeeName = "John Smith";
let employeeDept = "Finance";
let employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
let employeeDesc2 = `${employeeName} works in the ${employeeDept} department.`;
console.log(employeeDesc1);
console.log(employeeDesc2);
let isPresent = true;
let fruits = ['Apple', 'Orange', 'Banana'];
let fruits1 = ['Apple', 'Orange', 'Banana'];
let fruits2;
fruits2 = ['Apple', 'Orange', 'Banana'];
let values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
var employee1 = [1, "Steve"];
var user;
user = [1, "Steve", true, 20, "Admin"];
var employee2 = [1, "Steve"];
employee2[0];
employee2[1];
var employee3 = [1, "Steve"];
employee3.push(2, "Bill");
console.log(employee3);
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
var PrintMedia1;
(function (PrintMedia1) {
    PrintMedia1[PrintMedia1["Newspaper"] = 1] = "Newspaper";
    PrintMedia1[PrintMedia1["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia1[PrintMedia1["Magazine"] = PrintMedia1.Newsletter * 3] = "Magazine";
    PrintMedia1[PrintMedia1["Book"] = 10] = "Book";
})(PrintMedia1 || (PrintMedia1 = {}));
function getPrintMediaCode(type) {
    return 20;
}
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var PrintMedia2;
(function (PrintMedia2) {
    PrintMedia2[PrintMedia2["Newspaper"] = 1] = "Newspaper";
    PrintMedia2[PrintMedia2["Newsletter"] = 2] = "Newsletter";
    PrintMedia2[PrintMedia2["Magazine"] = 3] = "Magazine";
    PrintMedia2[PrintMedia2["Book"] = 4] = "Book";
})(PrintMedia2 || (PrintMedia2 = {}));
PrintMedia2.Magazine;
PrintMedia2["Magazine"];
PrintMedia2[3];
console.log(PrintMedia2);
console.log('hello world');
//# sourceMappingURL=ts.js.map