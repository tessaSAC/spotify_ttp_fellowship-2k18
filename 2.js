// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(code) {
  let decoded = ''

  // base case: at end of string or nesting group
  if (!code) return ''

  // if a number
  if (+code[0] > 0) {
    decoded += decodeString(code.slice(2, -1)).repeat(+code[0])
    // if a string
  } else {
    const until = (code.search(/[^a-z]/)) >= 0
      ? (code.search(/[^a-z]/))
      : undefined
    decoded += code.slice(0, until)

    // is there more?
    if (until) decoded += decodeString(code.slice(until))
  }
  return decoded
}