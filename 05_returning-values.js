const higherOrderFn = (cb) => {
  const obj = {
    name: 'Andy',
    isAwake: true
  };

  console.log('before the timeout call');

  setTimeout(() => {
    const key = 'name';
    obj[key] = 'Alice';
    cb(obj);
  }, 2000);

  console.log('after the timeout call');
};

console.log('before the main call');
higherOrderFn((param) => {
  console.log('inside the callback');
  console.log(param);
});
console.log('after the main call');
