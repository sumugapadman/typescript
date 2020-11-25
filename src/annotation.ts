/**
 * Variable Annotations
 */

let age: number = 32;
let username: string = "John"; 
let isUpdated: boolean = true; 


/**
 * Function Annotations
 */

function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}


/**
 * Object Annotations
 */
var employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}

let employeefirstName = 'John'; // valid
let employeelastName: string = 'Doe' // valid
let employeesurName: any = 'Mr' //valid
const num:number = 100; // valid 