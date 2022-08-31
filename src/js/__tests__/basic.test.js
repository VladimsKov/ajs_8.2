import ErrorRepository from '../basic';

test.each([
  [0, 'typeError'],
  [1, 'syntax error'],
  [2, 'wrong value error'],
  [4, 'Unknown error'],
])('translate(code) test: %s to be %s', (value, expected) => {
  const testRepository = new ErrorRepository();
  expect(testRepository.translate(value)).toBe(expected);
});
