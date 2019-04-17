/* eslint-disable no-bitwise */

// eslint-disable-next-line import/prefer-default-export
export function hash(str = '') {
  const hashNum = [...str].reduce(
    (prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
    0
  )
  return btoa(hashNum)
}
