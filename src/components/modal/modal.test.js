import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Modal from './modal';

//render testing
it ('renders without crashing when passing an empty object as a prop', () => {
    const div = document.createElement("div");
    const info = {
        thumbnail: ''
    };
    render(<Modal info={info}></Modal>, div);
})

it ('renders without crashing when passing object as a prop', () => {
    const div = document.createElement("div");
    const info = {
        name: 'test',
        professions: ''
    }
    render(<Modal info={info}></Modal>, div);
})
