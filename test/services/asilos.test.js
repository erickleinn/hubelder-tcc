const assert = require('assert');
const app = require('../../src/app');

describe('\'asilos\' service', () => {
  it('registered the service', () => {
    const service = app.service('asilos');

    assert.ok(service, 'Registered the service');
  });
});
