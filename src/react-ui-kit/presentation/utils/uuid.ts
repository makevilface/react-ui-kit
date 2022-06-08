/**
 * Generates unique id`s
 * @see https://gist.github.com/gordonbrander/2230317#gistcomment-1618310
 */
export const uuid = () => {
  const arr = new Uint32Array(3);
  window.crypto.getRandomValues(arr);
  return (
    performance.now().toString(36) +
    Array.from(arr)
      .map((A) => A.toString(36))
      .join('')
  ).replace(/\./g, '');
};
