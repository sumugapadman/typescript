/**
 * Return Type
 */

function add(a: number, b: number): number {
    return a + b;
}

function echo(message: string): void {
    console.log(message.toUpperCase());
}

/**
 * arrow function
 */

// pattern 1
let adds: (x: number, y: number) => number;
adds = function (x: number, y: number) {
    return x + y;
};

//pattern 2 
let addition: (a: number, b: number) => number =
function (x: number, y: number) {
    return x + y;
};

/**
 * Inferring function types
 */
let addd = function (x:number, y:number): number {
    return x + y;
}

/**
 * Optional Parameters in functions
 */

 function mutliply(a:number, b:number, c?:number): number {
    if(typeof c !== undefined){
        return a*b*c;
    }
    return a*b;
 }

/**
 * Default Parameters
 */

function sampleName(price, discount=0.5){
    return price*(1-discount);
}

// default parameters cannot be used in function type definitions.
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

/**
 * Rest Parameters spread operator
 */

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

/**
 * Function Overloading
 */

function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// the above mentioned functions can be rewritten as union types . 
function custadd(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
// or 
function custadd1(a: any, b: any): any {
    return a + b;
}

/**
 * Method Overloading
 */

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    // overloaded method
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}



