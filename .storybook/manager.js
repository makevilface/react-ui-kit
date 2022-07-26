// @ts-nocheck
import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';
import svg6 from '../public/netflix.svg';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: svg6,
    brandTitle: 'Gamma Components',
  },
});
