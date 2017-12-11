import React from 'react';
import ReactDOM from 'react-dom';
import DangerButton from "./dangerButton.js";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DangerButton />, div);
});
