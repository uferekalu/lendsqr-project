import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import { NotificationProvider } from '../notification/NotificationContext';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

jest.mock('../../utils/api', () => ({
  callAPI: jest.fn(),
}));

const { callAPI } = require('../../utils/api');

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockAddNotification = jest.fn();
jest.mock('../notification/NotificationContext', () => ({
  ...jest.requireActual('../notification/NotificationContext'),
  useNotification: () => ({
    addNotification: mockAddNotification,
  }),
}));

describe('Login Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
  });
  test('renders Login component', () => {
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </NotificationProvider>,
    );

    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
    expect(screen.getByText(/Enter details to login./i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/FORGOT PASSWORD?/i)).toBeInTheDocument();
  });

  test('validates email input', () => {
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </NotificationProvider>,
    );

    const emailInput = screen.getByPlaceholderText(/Email/i);
    expect(
      screen.queryByText(/Invalid email address/i),
    ).not.toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();

    fireEvent.change(emailInput, {
      target: { value: 'valid.email@example.com' },
    });
    fireEvent.blur(emailInput);
    expect(
      screen.queryByText(/Invalid email address/i),
    ).not.toBeInTheDocument();
  });

  test('validates password input', () => {
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </NotificationProvider>,
    );

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'short' } });

    const errorMessage = screen.getByText(
      /Password must contain a capital letter, a small letter, a number, and a symbol/i,
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(
      <NotificationProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </NotificationProvider>,
    );

    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const toggleButton = screen.getByText(/SHOW/i);

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('submits form with valid data and navigates to dashboard with notification', async () => {
    callAPI.mockResolvedValueOnce([
      { email: 'test@example.com', password: 'Valid1!' },
    ]);

    render(
      <NotificationProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </NotificationProvider>,
    );

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Valid1!' } });

    const loginButton = screen.getByText(/LOG IN/i);

    fireEvent.click(loginButton);

    expect(loginButton).toHaveTextContent('loading...');
    expect(loginButton).toBeDisabled();

    await waitFor(() => {
      expect(loginButton).not.toHaveTextContent('loading...');
    });

    expect(loginButton).toHaveTextContent('LOG IN');
    expect(loginButton).not.toBeDisabled();

    expect(mockAddNotification).toHaveBeenCalledWith(
      'Login successful!!',
      3000,
      'rgba(57, 205, 204, 1)',
      'white',
    );
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
