/**
 * Datatype : Number
 */

let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first); // 123

console.log(second); // 14287

console.log(third); // 255

console.log(fourth); // 57 


/**
 *  Datatype : String
 */

let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1); //John Smith works in the Finance department. 
console.log(employeeDesc2); //John Smith works in the Finance department. 

/**
 * Datatype : Boolean
 */

let isPresent:boolean = true;

/**
 * Datatype : Array
 */

let fruits: string[] = ['Apple', 'Orange', 'Banana']; //valid
let fruits1: Array<string> = ['Apple', 'Orange', 'Banana']; //valid

//single entity array
let fruits2: Array<string>;
fruits2 = ['Apple', 'Orange', 'Banana']; 

//multiple entity array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //valid
let values1: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //valid

/**
 * Datatype : Tuple
 */

// tuple example
var employee1: [number, string] = [1, "Steve"]; // valid

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// accessing tuple 
var employee2: [number, string] = [1, "Steve"];
employee2[0]; // returns 1
employee2[1]; // returns "Steve"

// adding elements into tuple 
var employee3: [number, string] = [1, "Steve"];
employee3.push(2, "Bill"); 
console.log(employee3); //Output: [1, 'Steve', 2, 'Bill']

/**
 * Datatype : Enum
 */

// declares a set of constants 
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}


// Computed enum
enum PrintMedia1 {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}
  
function getPrintMediaCode(type:string){
    return 20;
}

// Hetrogenous enum 

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}

// Reverse Mapping

enum PrintMedia2 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
PrintMedia2.Magazine;   // returns  3
PrintMedia2["Magazine"];// returns  3
PrintMedia2[3];         // returns  Magazine


/* {
    '1': 'Newspaper',
    '2': 'Newsletter',
    '3': 'Magazine',
    '4': 'Book',
    Newspaper: 1,
    Newsletter: 2,
    Magazine: 3,
    Book: 4 
} */

console.log(PrintMedia2);


