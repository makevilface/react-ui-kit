const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config, { configType }) => {
    const cssRuleIndex = config.module.rules.findIndex((r) => String(r.test) === String(/\.css$/));

    const isDev = configType.toLowerCase() !== 'production';

    if (cssRuleIndex !== undefined) {
      config.module.rules[cssRuleIndex] = {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
        ],
      };
    }

    config.module.rules.push({
      test: /\.[jt]sx?$/,
      use: [
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: isDev,
          },
        },
      ],
      exclude: /node_modules/,
    });

    config.plugins.push(
      new MiniCssExtractPlugin({ filename: 'styles.css', ignoreOrder: true }),
      new ForkTsCheckerWebpackPlugin({ async: isDev }),
    );

    return config;
  },
};
