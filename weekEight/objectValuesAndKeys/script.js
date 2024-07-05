const obj = { a: "a", b: "b", c: "c", d: "d", e: "e" };

const letters = Object.values(obj);

const keys = Object.keys(obj);

// for (let i = 0; i < letters.length; i++) {
//   obj[keys[i]] = letters[i].toUpperCase();
// }

letters.map((el, i) => (obj[keys[i]] = el.toUpperCase()));

console.log(obj);
