function fibo(num) {
  const arr = [ 1, 1 ]
  if (!Number.isInteger(num)) {
    throw new Error(`Input must be an integer`)
  }
  if (num < 0) {
    throw new Error(`Input can't be negative number`)
  }
  if (num === 0) {
    return []
  }
  if (num === 1) {
    return [ 1 ]
  }
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr
}

export default fibo
