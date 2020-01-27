function superReducedString(s) {
  s = s.split('')
  for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
          s.splice(i, 2)
          i = -1
      }
  }
  s = s.join('')
  return s ? s : 'Empty String'
}

console.log(superReducedString('aabcccdde'))
