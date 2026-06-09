import { render, screen } from '@testing-library/react';
import App from './App';
import { isExecutionPatchInitialResult } from '@apollo/client/v4-migration';
import { describe } from 'vitest';

describe('App component', () => {
    test("First test", () => {
        render(<App />)

        const testElement = screen.getByText('Home Page');
        expect(testElement).toBeInTheDocument();
    })
})