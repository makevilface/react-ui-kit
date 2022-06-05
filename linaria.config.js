/* eslint-disable global-require */

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  rules: [
    {
      action: require('@linaria/shaker').default,
    },
    {
      test: /[\\/]node_modules[\\/]/,
      action: 'ignore',
    },
  ],
  displayName: isDev,
};
