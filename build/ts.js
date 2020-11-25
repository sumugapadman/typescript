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
let discount;
let itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else if (discount > 10) {
    discount = 15;
}
else {
    throw new Error('The number of items cannot be negative!');
}
console.log(`You got ${discount}% discount. `);
let targetId = 'btnDelete';
switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
for (let i = 0;; i++) {
    console.log(i);
    if (i > 9)
        break;
}
let j = 0;
for (;;) {
    console.log(j);
    j++;
    if (j > 9)
        break;
}
let wcounter = 0;
while (wcounter < 5) {
    console.log(wcounter);
    wcounter++;
}
let list = document.querySelector('#list');
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
let ix = 0;
do {
    console.log(ix);
    ix++;
} while (ix < 10);
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];
for (var xi = 0; xi < products.length; xi++) {
    if (products[xi].price == 900)
        break;
}
console.log(products[xi]);
for (let index = 0; index < 9; index++) {
    if (index % 2)
        continue;
    console.log(index);
}
let messsage;
let input;
input = 100;
input = 'Hi';
let click;
click = 'click';
let mouseEvent;
mouseEvent = 'click';
mouseEvent = 'dblclick';
mouseEvent = 'mouseup';
mouseEvent = 'mousedown';
var allowedEvents;
(function (allowedEvents) {
    allowedEvents[allowedEvents["click"] = 0] = "click";
    allowedEvents[allowedEvents["dblclick"] = 1] = "dblclick";
    allowedEvents[allowedEvents["mouseup"] = 2] = "mouseup";
    allowedEvents[allowedEvents["mousedown"] = 3] = "mousedown";
})(allowedEvents || (allowedEvents = {}));
let myEvent;
myEvent = allowedEvents.click;
myEvent = allowedEvents.mousedown;
let anotherEvent;
anotherEvent = allowedEvents.mouseup;
let counter;
let counter1 = 0;
let counters = 0;
function increment(counter) {
    return counter++;
}
function incrementer(counter) {
    return counter++;
}
let myarr = [new Date(), new RegExp('\d+')];
document.addEventListener('click', function (event) {
    console.log(event.button);
});
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
let code;
code = 123;
code = "ABC";
let empId;
empId = 111;
empId = "E111";
function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number.');
    else if (typeof (code) === "string")
        console.log('Code is string.');
}
let something = "Hello World!";
something = 23;
something = true;
let arr = ["John", 212, true];
arr.push("Smith");
console.log(arr);
function sayHi() {
    console.log('Hi!');
}
let speech = sayHi();
console.log(speech);
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
console.log('hello world');
//# sourceMappingURL=ts.js.map