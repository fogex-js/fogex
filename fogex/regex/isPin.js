const patternPins = {
  4: /^[0-9]{4}$/,
  6: /^[0-9]{6}$/,
};

const isPin = (value, pinLength) => {
  let patternPin = new RegExp(patternPins[pinLength]);
  if (value == null || patternPins == '/(?:)/') return;
  return patternPin.test(value);
};

export default isPin;
