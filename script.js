// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. console.log the all the singers in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers. console.log all in favNumbers array.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation. favSingers[0],  favSingers[1],  favSingers[2],  favNumbers [1] and lastly mixedArr[3]

let favSingers = ['Billie Eilish', 'Ed Sheeran', ' Olivia Rodrigo'];

console.log("Favorite Singers: ", favSingers);

let favNumbers = [16, 8, 24, 32];
console.log("Favorite Numbers: ", favNumbers);

let mixedArr = ["a string", ["an array within an array"], 123, true];

console.log("First favorite singer: ", favSingers[0]);
console.log("Second favorite singer: ", favSingers[1]);
console.log("Third favorite singer: ", favSingers[2]);
console.log("Second favorite number: ", favNumbers[1]);
console.log("Fourth element of mixed array: ", mixedArr[3]);