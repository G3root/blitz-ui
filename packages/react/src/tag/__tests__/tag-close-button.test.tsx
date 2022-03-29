import * as React from 'react';
import {
  render as testRenderer,
  screen,
  RenderOptions
} from '@testing-library/react';
import { TagCloseButton } from '../tag-close-button';
import { Tag } from '../tag';

const Provider = ({ children }: { children: React.ReactNode }) => (
  <Tag>{children}</Tag>
);

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => testRenderer(ui, { wrapper: Provider, ...options });

it('should render', () => {
  // act
  render(<TagCloseButton />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toBeInTheDocument();
});

it('should render <button> tag by default', () => {
  // act
  render(<TagCloseButton />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toBeInstanceOf(HTMLButtonElement);
});

it('should have type=button', () => {
  // act
  render(<TagCloseButton />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveAttribute('type', 'button');
});

it('should have class from class prop', () => {
  // arrange
  const stubClass = 'stub';

  // act
  render(<TagCloseButton className={stubClass} />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveClass(stubClass);
});

it('should have aria-label="close"', () => {
  // arrange
  const label = 'close';

  // act
  render(<TagCloseButton />);
  const button = screen.getByRole('button');

  // assert
  expect(button).toHaveAttribute('aria-label', label);
});
