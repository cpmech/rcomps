import { formatCurrency } from '../formatCurrency';

describe('formatCurrency', () => {
  it('10.45. should become 10.45', () => {
    expect(formatCurrency('10.45.')).toBe('US$ 10.45');
  });
});
