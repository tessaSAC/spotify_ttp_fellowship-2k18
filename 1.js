// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByString(str, order) {
  const charCount = {}
  let sorted = ''
  order = order.split('')
  order.forEach(char => charCount[char] = 0)

  // Count character instances in string:
  str.split('').forEach(char => ++charCount[char])

  // For each character in `order`, add that character to the string by it's count number of times:
  order.forEach(char => sorted += char.repeat(charCount[char]))

  // Alt:
  // const charMap = new Map()  // Map guarantees insertion order
  // order.split('').forEach(char => charMap.set(char, 0))
  // str.split('').forEach(char => charMap.set(char, charMap.get(char) + 1))
  // Array.from(charMap.entries()).forEach(([char, count]) => sorted += char.repeat(count))

  return sorted
}
