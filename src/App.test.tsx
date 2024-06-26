import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock components and routes
jest.mock('./components/login/Login', () => () => <div>Login Component</div>);

describe('App Component', () => {
  test('renders Login component for root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const loginElement = screen.getByText(/Login Component/i);
    expect(loginElement).toBeInTheDocument();
  });

});
