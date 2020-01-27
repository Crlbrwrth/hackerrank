function circularArrayRotation(a, k, queries) {
  let x = 0;
  while (x < k) {
      let y = a.pop()
      a.unshift(y)
      x++
  }
  return queries.map(e => a[e])
}
