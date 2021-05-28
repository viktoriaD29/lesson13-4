import calcc from './calculator'

it('shoud get sum of numbers', () => {
  const result = calcc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
})

it('shoud get difference in numbers', () => {
  const result = calcc('1 - 2');

  expect(result).toEqual('1 - 2 = -1');
})

it('shoud get multiplication of numbers', () => {
  const result = calcc('1 * 2');

  expect(result).toEqual('1 * 2 = 2');
})

it('shoud get division of numbers', () => {
  const result = calcc('1 / 2');

  expect(result).toEqual('1 / 2 = 0.5');
})