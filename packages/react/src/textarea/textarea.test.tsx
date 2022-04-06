import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Textarea } from './textarea';

it('should render', () => {
  // act
  render(<Textarea data-testid="textarea" />);
  const textarea = screen.getByTestId('textarea');

  // assert
  expect(textarea).toBeInTheDocument();
});
