function runningTime(arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          counter++
          i = -1
      }
  }
  return counter
}