const creatorPattern = (
  pattern: string,
  patternLength: number,
  value: string
): boolean => {
  const optionalPatternList: string[] = [];
  const countOfPatternList: string[][] = [];
  let patternSplit = pattern.split('');

  let a = [...patternSplit].map((item: string, index: number) => {
    if (item === '?') {
      return index - 1;
    }
    return undefined;
  });

  a = a.filter((item) => item !== undefined);

  for (let i = 0; i < a.length; i++) {
    optionalPatternList.push([...patternSplit][a[i] as number] );
  }

  const b = pattern.split('-');

  countOfPatternList.push(b);
  // const groupBy = (array, key) => {
  //   return array.reduce((result, currentValue) => {
  //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
  //       currentValue
  //     );

  //     return result;
  //   }, {});
  // };

  const lowerCase = patternSplit.includes('a');
  const upperCase = patternSplit.includes('A') && !optionalPatternList.includes('A');
  const number = patternSplit.includes('#') && !optionalPatternList.includes('#');
  const specialChar = patternSplit.includes('!') && !optionalPatternList.includes('!');

  const lowerCasePattern = lowerCase ? '(?=.*[a-z])' : '';
  const upperCasePattern = upperCase ? '(?=.*[A-Z])' : '';
  const numberPattern = number ? '(?=.*[0-9])' : '';
  const specialCharPattern = specialChar ? '(?=.*[!@#$%^&*])' : '';

  const passwordPattern = new RegExp(
    `^${lowerCasePattern}${upperCasePattern}${numberPattern}${specialCharPattern}.{${patternLength}}$`
  );

  return passwordPattern.test(value);
};

export default creatorPattern;
