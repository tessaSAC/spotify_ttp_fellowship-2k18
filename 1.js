// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(str, order) {
  let sorted = ''
  const charMap = new Map()
  order.split('').forEach(char => charMap.set(char, 0))

  // Count character instances in string
  str.split('').forEach(char => charMap.set(char, charMap.get(char) + 1))

  Array.from(charMap.entries()).forEach(([char, count]) => sorted += char.repeat(count))

  return sorted
}
