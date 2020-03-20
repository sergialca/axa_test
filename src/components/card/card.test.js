import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Card from './card';

//render testing
it ('renders without crashing when passing an empty object as a prop', () => {
    const div = document.createElement("div");
    const info = {
    }
    render(<Card info={info}></Card>, div);
})

it ('renders without crashing when passing object as a prop', () => {
    const div = document.createElement("div");
    const info = {
        name: 'test',
        professions: ''
    }
    render(<Card info={info}></Card>, div);
})
