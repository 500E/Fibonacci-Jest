import fibo from './fibo'

test(`Return [1,1,2,3,5,8,13,21] when calling fibo(8)`, () => {
  const array = [ 1, 1, 2, 3, 5, 8, 13, 21 ]
  expect(fibo(8)).toEqual(array)
})

test(`Should throw an error when input is not an integer`, () => {
  expect(() => {
    fibo(2.5)
  }).toThrow(`Input must be an integer`)
})

test(`Should throw an error when input is negative number`, () => {
  expect(() => {
    fibo(-7)
  }).toThrow(`Input can't be negative number`)
})

test(`Array length should be the same as first argument`, () => {
  expect(fibo(10)).toHaveLength(10)
})
