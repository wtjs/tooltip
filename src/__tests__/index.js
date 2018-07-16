import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Tooltip from '..';

// since we want to render into the dom need to cleanup
afterEach(cleanup);

// test constants
const text = 'Hello world';
const children = 'Hover over me!';
const testId = 'wtjs-tooltip';

test('renders the children properly', () => {
    const App = () => <Tooltip render={text}>{children}</Tooltip>;
    const { getByText } = render(<App />);
    expect(getByText(children).innerHTML).toBe(children);
});

test('does not render tooltip initially', () => {
    const App = () => <Tooltip render={text}>{children}</Tooltip>;
    const { getByTestId } = render(<App />);
    // initially tooltip content should not be rendered
    expect(getByTestId(testId).innerHTML).toBe('');
});

test('renders tooltip on enter and hides on leave', () => {
    const App = () => <Tooltip render={text}>{children}</Tooltip>;
    const { getByText, getByTestId } = render(<App />);
    fireEvent(
        getByText(children),
        new MouseEvent('mouseenter', {
            bubbles: true, // event must bubble for react event handling to work
        }),
    );
    expect(getByText(text).textContent).toBe(text);
    fireEvent(
        getByText(children),
        new MouseEvent('mouseleave', {
            bubbles: true, // event must bubble for react event handling to work
        }),
    );
    expect(getByTestId(testId).innerHTML).toBe('');
});

test('renders tooltip on focus and hides on blur', () => {
    const App = () => <Tooltip render={text}>{children}</Tooltip>;
    const { getByText, getByTestId } = render(<App />);
    // for keyboard or mouse events
    fireEvent(
        getByText(children),
        new Event('focus', {
            bubbles: true, // event must bubble for react event handling to work
        }),
    );
    expect(getByText(text).textContent).toBe(text);
    fireEvent(
        getByText(children),
        new Event('blur', {
            bubbles: true, // event must bubble for react event handling to work
        }),
    );
    expect(getByTestId(testId).innerHTML).toBe('');
});
