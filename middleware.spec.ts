import { middleware } from './middleware';

jest.mock('@vercel/edge-config');

describe('middleware', () => {
  it('should not fail', async () => {
    await middleware();
  });
})