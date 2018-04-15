const getUnbalancedStringIdx = require('./');


test('returns "Invalid string" for ""', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('');
  expect(unbalancedStringIdx).toBe('Invalid string');
});

test('returns "Invalid string" for null', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx(null);
  expect(unbalancedStringIdx).toBe('Invalid string');
});

test('returns "Invalid string" for {}', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx({});
  expect(unbalancedStringIdx).toBe('Invalid string');
});

test('returns "Invalid string" if no argument is passed', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx();
  expect(unbalancedStringIdx).toBe('Invalid string');
});


test('returns -1 for "hello world"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('hello world');
  expect(unbalancedStringIdx).toBe(-1);
});

test('returns -1 for "{{}{}}"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('{{}{}}');
  expect(unbalancedStringIdx).toBe(-1);
});

test('returns -1 for "{{{foo();}}}{}"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('{{{foo();}}}{}');
  expect(unbalancedStringIdx).toBe(-1);
});


test('returns 0 for "}"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('}');
  expect(unbalancedStringIdx).toBe('0');
});

test('returns 0 for "{{{}"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('{{{}');
  expect(unbalancedStringIdx).toBe('0');
});

test('returns 8 for "{foo();}}}{}"', () => {
  const unbalancedStringIdx = getUnbalancedStringIdx('{foo();}}}{}');
  expect(unbalancedStringIdx).toBe('8');
});
