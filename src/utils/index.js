export function generateEmptyArray(num, defaultValue) {
  var arr = Array.apply(null, Array(num));
  return arr.map((v) => { return defaultValue })
}