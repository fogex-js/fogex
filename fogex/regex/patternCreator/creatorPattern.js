const creatorPattern = (pattern, passwordLength, value) => {
  let patternSplit = pattern.split('');

  const lowerCase = patternSplit.includes('a');
  const upperCase = patternSplit.includes('A');
  const number = patternSplit.includes('#');
  const specialChar = patternSplit.includes('!');

  const lowerCasePattern = lowerCase ? '(?=.*[a-z])' : '';
  const upperCasePattern = upperCase ? '(?=.*[A-Z])' : '';
  const numberPattern = number ? '(?=.*[0-9])' : '';
  const specialCharPattern = specialChar ? '(?=.*[!@#$%^&*])' : '';

  const passwordPattern = new RegExp(
    `^${lowerCasePattern}${upperCasePattern}${numberPattern}${specialCharPattern}.{${passwordLength}}$`
  );

  return passwordPattern.test(value);
};

export default creatorPattern;
