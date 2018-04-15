const getUnbalancedStringIdx = str => {
  if (!str || typeof str !== 'string') return 'Invalid string'

  let braces = {};
  let sum = 0;
  let unbalancedIdx = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') braces[i] = 1
    if (str[i] === '}') braces[i] = -1
  }

  for (let i in braces) {
    sum += braces[i];

    if (sum < 0) {
      unbalancedIdx = i;
      break;
    }
    if (sum === 1 && unbalancedIdx === -1) unbalancedIdx = i
    if (sum === 0) unbalancedIdx = -1
  }

  console.log('unbalanced string index is', unbalancedIdx);

  return unbalancedIdx;
}

getUnbalancedStringIdx('{}{foo();}}}{}');

module.exports = getUnbalancedStringIdx;
