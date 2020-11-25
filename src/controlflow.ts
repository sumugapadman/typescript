/**
 * if else
 */

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else if (discount > 10) {
    discount = 15; // 15%
} else {
    throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `)

/**
 * Switch Case
 */

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

/**
 * for loop patterns
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// omit initialization
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}

// omit condition - break mandatory else compiler error.
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}

// omit everything
let j = 0;
for (; ;) {
    console.log(j);
    j++;
    if (j > 9) break;
} // valid

/**
 * While patterns
 */

let wcounter = 0;

while (wcounter < 5) {
    console.log(wcounter);
    wcounter++;
}

// example ul with id 'list' & 4 children
let list = document.querySelector('#list');

while (list.firstChild) {
    list.removeChild(list.firstChild);
}

/**
 * do while
 */

let ix = 0;

do {
    console.log(ix);
    ix++
} while (ix < 10); // valid

/**
 * Break Statement
 */

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var xi = 0; xi < products.length; xi++) {
    if (products[xi].price == 900)
        break;
}

// show the products
console.log(products[xi]); // { name: 'tablet', price: 900 }

/**
 * Continue Statements
 */

for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 2)
        continue;

    // the following code will be skipped for odd numbers
    console.log(index); // 0 2 4 6 8 ..
}





