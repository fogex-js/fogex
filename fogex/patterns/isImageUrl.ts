const pattern = {
  default:
    /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg|jpeg|gif|png))$/,
  png: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:png))$/,
  jpg: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg))$/,
  jpeg: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpeg))$/,
  gif: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:gif))$/,
}

const isImageUrl = (value, extension) => {
  let patternCase = new RegExp(pattern[extension])
  if (value === null) {
    return false
  } else if (patternCase === new RegExp('/(?:)/')) {
    let patternDefaultImageUrl = new RegExp(pattern['default'])
    return patternDefaultImageUrl.test(value)
  } else {
    return patternCase.test(value)
  }
}

export default isImageUrl
