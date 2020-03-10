let counter = 0;

const anything = setInterval(() => {
  counter++;
  console.log('hello there');
  if (counter > 15) {
    clearInterval(anything);
  }
}, 2000);
