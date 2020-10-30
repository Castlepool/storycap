import React from 'react';
import MySelect from './MySelect';

// TODO: indent 2 spaces only
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

export const Empty = () => <MySelect />;

export const FewOptions = () => (
    <MySelect
        options={[
            { label: 'volvo', value: 'volvo' },
            { label: 'audi', value: 'audi', disabled: true },
            { label: 'porsche', value: 'audi' },
        ]}
    />
);

export const ManyOptions = () => (
    <MySelect
        options={[...Array(15).keys()].map(i => ({ label: `option ${i}`, value: `value${i}`}))}
    />
);
