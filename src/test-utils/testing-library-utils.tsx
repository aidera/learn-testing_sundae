import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { OrderDetailsProvider } from '../context/OrderDetails';

const AllTheProviders: FC = ({ children }) => {
  return <OrderDetailsProvider>{children}</OrderDetailsProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
