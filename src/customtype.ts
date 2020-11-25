/**
 * Type Aliases
 */
type chars = string;
let messsage: chars; // same as string type


type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid

/**
 * String Literal Types
 */

let click : 'click';
click = 'click'; //valid

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid


// less verbose way of achieving the above.
enum allowedEvents {
    click,
    dblclick,
    mouseup,
    mousedown
}

type xMouseEvent = allowedEvents;
let myEvent: xMouseEvent;

myEvent = allowedEvents.click; //valid
myEvent = allowedEvents.mousedown; //valid

let anotherEvent: xMouseEvent;
anotherEvent = allowedEvents.mouseup //valid

/**
 * Type Inference
 */

 // type annotation & type inference
 let counter: number;
 let counter1 = 0;

 let counters: number = 0;

 // the following 2 methods are the same.
 function increment(counter: number) {
    return counter++;
 }

 function incrementer(counter: number) : number {
    return counter++;
 } 

 // when typescript does not find a common type , it returns a union array type. 
 let myarr = [new Date(), new RegExp('\d+')]; // type : (RegExp | Date)[]


/**
 * Contextual Typing
 */

 // the below would throw a compile error for 'scroll' event
document.addEventListener('click', function (event) {
    console.log(event.button); // valid
});





