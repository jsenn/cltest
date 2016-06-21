function range(first, limit) {
  let ret = [];

  for (let n = first; n < limit; ++n) {
    ret.push(n);
  }

  return ret;
}

/* Return a random integer from the interval [a, b).
 */
function randint(a, b) {
  return Math.floor(a + (Math.random() * (b - a)));
}

export default {
  range: range,
  randint: randint
};

