function confirmEnding(str, target) {
  //Check if a string (first argument, str) ends with the given target string (second argument, target).
  let regExStr = str.slice(0, (0 - target.length));
  console.log(regExStr);
  let regEx = new RegExp(regExStr + target + "$");  
  console.log(regEx);
  let found = regEx.test(str);
  console.log(regEx.test(str));
  return found;
}
