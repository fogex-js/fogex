const patternMd5 = new RegExp(/^[a-f0-9]{32}$/);

const isMd5 = (value) => {
  if (value == null || patternMd5 == '/(?:)/') return;
  return patternMd5.test(value);
};

export default isMd5;
