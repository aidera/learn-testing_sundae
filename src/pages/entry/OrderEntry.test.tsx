import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { instance } from '../../api/backend';

import { server } from '../../mocks/server';
import OrderEntry from './OrderEntry';

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get(`${instance.defaults.baseURL}/scoops`, (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get(`${instance.defaults.baseURL}/toppings`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<OrderEntry />);

  // !!!NOTE!!! will wait only for the first alert, so use waitFor
  //   const alerts = await screen.findAllByRole('alert', {
  //     name: /unexpected error /i,
  //   });
  // expect(alerts).toHaveLength(2);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
