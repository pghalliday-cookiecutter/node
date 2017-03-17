import test from '../../src/index.js';

describe('test', () => {
  it('should pass', () => {
    test().should.eql('hello world');
  });
});
