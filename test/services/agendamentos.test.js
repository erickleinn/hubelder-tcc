const assert = require('assert');
const app = require('../../src/app');

describe('\'agendamentos\' service', () => {
  it('registered the service', () => {
    const service = app.service('agendamentos');

    assert.ok(service, 'Registered the service');
  });
});
