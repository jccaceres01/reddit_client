/**
 * 
 * Test shortenNumber
 */

import shortenNumber from "../../src/utils/shortenNumber";

describe('Test shortenNumber function', () => {
  it('should not be null', () => {
    const num = Math.ceil(Math.random() * 1000000000000);
    const digits = 2;
    expect(shortenNumber(num, digits).not.toBeNull());
  });
});