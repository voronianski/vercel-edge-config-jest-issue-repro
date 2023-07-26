import { middleware } from './middleware';

describe('middleware', () => {
  it('should not fail', async () => {
    await middleware();
  });
})