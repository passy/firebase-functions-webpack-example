import * as triggers from '../lib/index.js';

it('sends a response', () => {
  const req = {};
  const res = {
    send: (text) => {
      expect(text).toBe('Hello from Purescript!');
    }
  };

  console.log(triggers);
  triggers.helloWorld(req, res);
});
