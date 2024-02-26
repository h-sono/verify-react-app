import React from 'react';
import { MemoryRouter } from 'react-router-dom';

/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

// 以下で全storyをMemoryRouterでラップし、React Routerフックが使用できるようにしている。
// ※React Routerフック：useNavigate()など。
export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
]
