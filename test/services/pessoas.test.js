const assert = require('assert');
const app = require('../../src/app');

describe('\'pessoas\' service', () => {
  it('registered the service', () => {
    const service = app.service('pessoas');

    assert.ok(service, 'Registered the service');
  });
});
