/**
 * 
 * Test shortenNumber
 */

import shortenNumber from "../../utils/shortenNumber";

describe('Test shortenNumber function', () => {
  
  const num = Math.ceil(Math.random() * 1000000000000);
  const digits = 2;

  it('should not be null', () => {
    expect(shortenNumber(num, digits)).not.toBeNull();
  });

  it('should return a string', () => {
    expect(typeof shortenNumber(num, digits)).toBe('string');
  });

  it('should return 1k when num = 1000 and digits = 1 ', () => {
    expect(shortenNumber(1000, 2)).toBe('1k');
  });
});
