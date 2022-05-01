const patternImageUrls = {
  default: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg|jpeg|gif|png))$/,
  png: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:png))$/,
  jpg: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpg))$/,
  jpeg: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:jpeg))$/,
  gif: /^(http\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\/\S*)?(?:[a-zA-Z0-9_])+\.(?:gif))$/,
};

const isImageUrl = (value, extension) => {
  let patternImageUrl = new RegExp(patternImageUrls[extension]);
  if (value == null) {
    return false;
  } else if (patternImageUrl == '/(?:)/') {
    let patternDefaultImageUrl = new RegExp(patternImageUrls['default']);
    return patternDefaultImageUrl.test(value);
  } else {
    return patternImageUrl.test(value);
  }
};

export default isImageUrl;
