import React from 'react';
import MyPopup from './MyPopup';

export default {
    title: 'MyPopup',
    component: MyPopup,
    parameters: {
        screenshot: {
            click: '.my-popup',
        },
    },
};

export const Top = () => <MyPopup message='I am at the top of the world :)' position={'top'}/>;

export const Bottom = () => <MyPopup message='I am down here' position={'bottom'}/>;
