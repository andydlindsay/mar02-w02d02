let x = 1;
console.log(`x is ${x}`);

setTimeout(() => {
  x++;
  console.log(`inside the call x is ${x}`);
}, 2000);

console.log(`after call x is ${x}`);
