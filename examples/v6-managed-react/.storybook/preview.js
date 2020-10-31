import { addParameters } from '@storybook/react';
import { withScreenshot } from 'storycap';

export const decorators = [withScreenshot];

addParameters({
  screenshot: {
    viewport: 'iPhone 8',
    viewports: {
      MOBILE: 'iPhone 8',
      TABLET: 'iPad',
      DESKTOP: {width: 1920, height: 1080},
    },
  },
});
