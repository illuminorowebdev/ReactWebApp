export const getFileNameFromKey = (key) => {
  const strs = String(key).split('/');
  const length = strs.length;
  if (strs[length - 1] === '') {
    return strs[length - 2];
  }
  return strs[length - 1];
};
