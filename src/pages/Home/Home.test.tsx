// src/pages/Home.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe('<Home />', () => {
  it('renders heading and subheading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /discover the power of clean ui/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/a well-structured interface/i)
    ).toBeInTheDocument();
  });

  it('renders image with correct alt text', () => {
    render(<Home />);
    const image = screen.getByAltText(/modern ui dashboard/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });

  it('renders feature list items', () => {
    render(<Home />);
    const features = [
      'Intuitive and minimal design',
      'Fully responsive components',
      'Easy theming with Tailwind CSS',
    ];
    features.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders action buttons', () => {
    render(<Home />);
    const startButton = screen.getByRole('button', { name: /get started/i });
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i });

    expect(startButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('buttons should be clickable', async () => {
    render(<Home />);
    const startButton = screen.getByRole('button', { name: /get started/i });
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i });

    await userEvent.click(startButton);
    await userEvent.click(learnMoreButton);

    // No action tied to button yet, just verifying no crash
    expect(true).toBe(true);
  });
});
