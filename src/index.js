module.exports = function warmup(temperature) {
  // your implementation here
  let Fahrenheit = Math.round(temperature * 9/5 + 32);
  return Fahrenheit;
};
