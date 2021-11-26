import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SummaryForm from './SummaryForm';

describe('checkbox', () => {
  test('checkbox is unchecked by default', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /I agree to/i });
    expect(checkbox).not.toBeChecked();
  });

  test('checking checkbox enables button', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /I agree to/i });
    const button = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);

    expect(button).toBeEnabled();
  });

  test('unchecking checkbox disables button', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /I agree to/i });
    const button = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);
    userEvent.click(checkbox);

    expect(button).toBeDisabled();
  });
});

test('popover responds on hover', async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(/no ice-cream will/i);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice-cream will/i);
  expect(popover).toBeInTheDocument();

  // popover disapears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => {
    return screen.getByText(/no ice-cream will/i);
  });
});
