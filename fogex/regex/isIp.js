let patternIp = new RegExp(/^((0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)\.){3}(0|1[0-9]{0,2}|2[0-9]?|2[0-4][0-9]|25[0-5]|[3-9][0-9]?)$/);

const isIp = (value) => {
  if (value == null || patternIp == '/(?:)/') return;
  return patternIp.test(value);
};

export default isIp;
