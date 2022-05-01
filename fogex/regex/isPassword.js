let patternPasswordStrong = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

const isPassword = (value) => {
  if (value == null || patternPasswordStrong == '/(?:)/') return;
  return patternPasswordStrong.test(value);
};

export default isPassword;
