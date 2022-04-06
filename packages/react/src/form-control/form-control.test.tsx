import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from '../textarea';
import { FormControl } from './form-control';
import { FormLabel } from './form-label';
import { FormHelperText } from './form-helper-text';
import { FormErrorMessage } from './form-error';
import { vi } from 'vitest';
import { FormErrorIcon, RequiredIndicator } from '.';

it('should render', () => {
  // act
  render(
    <FormControl data-testid="control">
      <FormLabel>Name</FormLabel>
      <Textarea />
      <FormHelperText>Enter a name</FormHelperText>
      <FormErrorMessage>Name is required</FormErrorMessage>
    </FormControl>
  );
  const control = screen.getByTestId('control');

  // assert
  expect(control).toBeInTheDocument();
});

it('should render <div> tag by default', () => {
  render(
    <FormControl data-testid="control">
      <FormLabel>Name</FormLabel>
      <Textarea />
      <FormHelperText>Enter a name</FormHelperText>
      <FormErrorMessage>Name is required</FormErrorMessage>
    </FormControl>
  );
  const control = screen.getByTestId('control');

  // assert
  expect(control).toBeInstanceOf(HTMLDivElement);
});

it("should create underlying elements ids based on 'id' prop", () => {
  // act
  render(
    <FormControl id="name" isInvalid>
      <FormLabel data-testid="label">Name</FormLabel>
      <Textarea data-testid="input" />
      <FormHelperText data-testid="helper-text">Enter a name</FormHelperText>
      <FormErrorMessage data-testid="error-message">
        Name is required
      </FormErrorMessage>
    </FormControl>
  );

  const input = screen.getByTestId('input');
  const label = screen.getByTestId('label');
  const helperText = screen.getByTestId('helper-text');
  const errorMessage = screen.getByTestId('error-message');

  // assert
  expect(input).toHaveAttribute('id', 'name');
  expect(label).toHaveAttribute('id', 'name-label');
  expect(helperText).toHaveAttribute('id', 'name-helper-text');
  expect(errorMessage).toHaveAttribute('id', 'name-feedback');
});

it("should create underlying elements ids with a generated id when 'id' prop is not set", () => {
  // act
  render(
    <FormControl isInvalid>
      <FormLabel data-testid="label">Name</FormLabel>
      <Textarea data-testid="input" />
      <FormHelperText data-testid="helper-text">Enter a name</FormHelperText>
      <FormErrorMessage data-testid="error-message">
        Name is required
      </FormErrorMessage>
    </FormControl>
  );

  const input = screen.getByTestId('input');
  const label = screen.getByTestId('label');
  const helperText = screen.getByTestId('helper-text');
  const errorMessage = screen.getByTestId('error-message');

  // assert
  expect(input).toHaveAttribute(
    'id',
    expect.stringMatching(/^blitz-field-(.+)/)
  );
  expect(label).toHaveAttribute('id', `${input.id}-label`);
  expect(helperText).toHaveAttribute('id', `${input.id}-helper-text`);
  expect(errorMessage).toHaveAttribute('id', `${input.id}-feedback`);
});

it('should calls provided input callbacks', async () => {
  // arrange
  const onFocus = vi.fn();
  const onBlur = vi.fn();

  render(
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Textarea
        data-testid="input"
        placeholder="Name"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </FormControl>
  );
  const input = screen.getByTestId('input');

  fireEvent.focus(input);
  fireEvent.blur(input);

  expect(onBlur).toHaveBeenCalled();
  expect(onFocus).toHaveBeenCalled();
});

test('only displays error icon and message when invalid', () => {
  const { rerender } = render(
    <FormControl id="name" isInvalid>
      <FormLabel>Name</FormLabel>
      <RequiredIndicator />
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
      <FormErrorIcon data-testid="icon" />
      <FormErrorMessage data-testid="message">
        Your name is invalid
      </FormErrorMessage>
    </FormControl>
  );

  expect(screen.getByTestId('icon')).toBeVisible();
  expect(screen.getByTestId('message')).toBeVisible();

  rerender(
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <RequiredIndicator />
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
      <FormErrorIcon data-testid="icon" />
      <FormErrorMessage data-testid="message">
        Your name is invalid
      </FormErrorMessage>
    </FormControl>
  );

  expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  expect(screen.queryByTestId('message')).not.toBeInTheDocument();
});

test('only displays required indicator when required', () => {
  const { rerender } = render(
    <FormControl id="name" isRequired>
      <FormLabel>Name</FormLabel>
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
      <FormErrorMessage>Your name is invalid</FormErrorMessage>
    </FormControl>
  );

  const indicator = screen.getByRole('presentation', { hidden: true });

  expect(indicator).toBeVisible();
  expect(indicator).toHaveTextContent('*');

  rerender(
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
      <FormErrorMessage>Your name is invalid</FormErrorMessage>
    </FormControl>
  );

  expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
});

test('has the proper aria attributes', async () => {
  const { rerender } = render(
    <FormControl id="name">
      <FormLabel>Name</FormLabel>
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
    </FormControl>
  );
  let input = screen.getByLabelText(/Name/);

  expect(input).toHaveAttribute('aria-describedby', 'name-helper-text');
  expect(input).not.toHaveAttribute('aria-invalid');
  expect(input).not.toHaveAttribute('aria-required');
  expect(input).not.toHaveAttribute('aria-readonly');

  rerender(
    <FormControl id="name" isRequired isInvalid isReadOnly>
      <FormLabel>Name</FormLabel>
      <Textarea placeholder="Name" />
      <FormHelperText>Enter your name please!</FormHelperText>
      <FormErrorMessage data-testid="error">
        Your name is invalid
      </FormErrorMessage>
    </FormControl>
  );
  input = screen.getByLabelText(/Name/);
  const indicator = screen.getByRole('presentation', { hidden: true });
  const errorMessage = screen.getByTestId('error');

  expect(input).toHaveAttribute('aria-invalid', 'true');
  expect(input).toHaveAttribute('aria-required', 'true');
  expect(input).toHaveAttribute('aria-readonly', 'true');
  expect(input).toHaveAttribute(
    'aria-describedby',
    'name-feedback name-helper-text'
  );
  expect(indicator).toHaveAttribute('aria-hidden');
  expect(errorMessage).toHaveAttribute('aria-live', 'polite');
});

test('has the correct role attributes', () => {
  render(
    <FormControl data-testid="control" id="name" isRequired>
      <FormLabel>Name</FormLabel>
      <Textarea placeholder="Name" />
    </FormControl>
  );
  const control = screen.getByTestId('control');

  expect(
    screen.getByRole('presentation', { hidden: true })
  ).toBeInTheDocument();
  expect(screen.getByRole('group')).toEqual(control);
});

test('has the correct data attributes', async () => {
  render(
    <FormControl
      data-testid="control"
      id="name"
      isRequired
      isInvalid
      isDisabled
      isReadOnly
    >
      <FormLabel data-testid="label">Name</FormLabel>
      <RequiredIndicator data-testid="indicator" />
      <Textarea placeholder="Name" />
      <FormHelperText data-testid="helper-text">
        Please enter your name!
      </FormHelperText>
      <FormErrorMessage data-testid="error-message">
        Your name is invalid.
      </FormErrorMessage>
    </FormControl>
  );

  fireEvent.focus(screen.getByLabelText(/Name/));

  const label = screen.getByTestId('label');
  expect(label).toHaveAttribute('data-focus');
  expect(label).toHaveAttribute('data-invalid');
  expect(label).toHaveAttribute('data-readonly');
});

test('can provide a custom aria-describedby reference', () => {
  const { rerender } = render(<Textarea aria-describedby="reference" />);
  expect(screen.getByRole('textbox')).toHaveAttribute(
    'aria-describedby',
    'reference'
  );

  rerender(
    <FormControl id="name">
      <Textarea aria-describedby="name-expanded-helper-text" />
      <FormHelperText>Please enter your name!</FormHelperText>
      <p id="name-expanded-helper-text">
        Sometimes it can be really helpfull to enter a name, trust me.
      </p>
    </FormControl>
  );

  expect(screen.getByRole('textbox')).toHaveAttribute(
    'aria-describedby',
    'name-expanded-helper-text name-helper-text'
  );
});

test('it renders the optionalIndicator in FormLabel if it is provided', () => {
  render(
    <FormControl isRequired={false}>
      <FormLabel optionalIndicator=" (optional)">Test</FormLabel>
      <Textarea />
    </FormControl>
  );

  expect(screen.getByText('Test (optional)')).toBeInTheDocument();
});
