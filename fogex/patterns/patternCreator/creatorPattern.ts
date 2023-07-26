// const creatorPattern = (pattern, patternLength, value) => {
//   const optionalPatternList = [];
//   const countOfPatternList = [];
//   let patternSplit = pattern.split('');

//   let a = [...patternSplit].map((item, index) => {
//     if (item == '?') {
//       return index - 1;
//     }
//   });

//   a = a.filter((item) => item !== undefined);

//   for (let i = 0; i < a.length; i++) {
//     optionalPatternList.push([...patternSplit][a[i]]);
//   }

//   const b = pattern.split('-');

//   countOfPatternList.push(b);
//   const groupBy = (array, key) => {
//     return array.reduce((result, currentValue) => {
//       (result[currentValue[key]] = result[currentValue[key]] || []).push(
//         currentValue
//       );

//       return result;
//     }, {});
//   };

//   const lowerCase = patternSplit.includes('a');
//   const upperCase =
//     patternSplit.includes('A') && !optionalPatternList.includes('A');
//   const number =
//     patternSplit.includes('#') && !optionalPatternList.includes('#');
//   const specialChar =
//     patternSplit.includes('!') && !optionalPatternList.includes('!');

//   const lowerCasePattern = lowerCase ? '(?=.*[a-z])' : '';
//   const upperCasePattern = upperCase ? '(?=.*[A-Z])' : '';
//   const numberPattern = number ? '(?=.*[0-9])' : '';
//   const specialCharPattern = specialChar ? '(?=.*[!@#$%^&*])' : '';

//   const passwordPattern = new RegExp(
//     `^${lowerCasePattern}${upperCasePattern}${numberPattern}${specialCharPattern}.{${patternLength}}$`
//   );

//   return passwordPattern.test(value);
// };

// export default creatorPattern;
