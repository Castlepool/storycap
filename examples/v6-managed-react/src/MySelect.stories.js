import React from 'react';
import MySelect from './MySelect';

export default {
  title: 'MySelect',
  component: MySelect,
  parameters: {
    screenshot: {
      variants: {
        expanded: {
          extends: ['MOBILE', 'TABLET', 'DESKTOP'],
          click: '.my-select',
        },
        hovered: {
          extends: ['DESKTOP'],
          hover: '.my-select',
        },
        focused: {
          extends: ['MOBILE', 'TABLET', 'DESKTOP'],
          focus: '.my-select',
        },
      },
    },
  },
};

export const Empty = () => <MySelect/>;

export const FewOptions = () => (
  <MySelect
    options={[
      {label: 'car  🚗', value: 'car'},
      {label: 'locomotive 🚂', value: 'train', disabled: true},
      {label: 'ship 🚢', value: 'ship'},
      {label: 'horse 🎠', value: 'horse'},
    ]}
  />
);

export const ManyOptions = () => (
  <MySelect
    options={[...Array(20).keys()].map(i => ({label: `option ${i}`, value: `value${i}`}))}
  />
);
