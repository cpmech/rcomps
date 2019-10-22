import { formatCurrency } from '../formatCurrency';

describe('formatCurrency (US)', () => {
  it('10.45. should become 10.45', () => {
    expect(formatCurrency('10.45.')).toBe('$ 10.45');
  });

  it('1.0.45 should become 10.45', () => {
    expect(formatCurrency('1.0.45')).toBe('$ 1.04');
  });

  it('1.0.45. should become 10.45', () => {
    expect(formatCurrency('1.0.45.')).toBe('$ 1.04');
  });

  it('. should become 0.', () => {
    expect(formatCurrency('.')).toBe('$ 0.');
  });

  it('00,000.1 should become 0.1', () => {
    expect(formatCurrency('00,000.1')).toBe('$ 0.1');
  });

  it('.45 should become 0.45', () => {
    expect(formatCurrency('.45')).toBe('$ 0.45');
  });

  it('.45123 should become 0.45', () => {
    expect(formatCurrency('.45123')).toBe('$ 0.45');
  });

  it('1234 should become 1,234', () => {
    expect(formatCurrency('1234')).toBe('$ 1,234');
  });

  it('12345678 should become 12,345,678', () => {
    expect(formatCurrency('12345678')).toBe('$ 12,345,678');
  });

  it('1234.123 should become 1,234.12', () => {
    expect(formatCurrency('1234.123')).toBe('$ 1,234.12');
  });

  it('a1b2c3d4 should become 1,234', () => {
    expect(formatCurrency('a1b2c3d4')).toBe('$ 1,234');
  });

  it('12,34 should become 1,234', () => {
    expect(formatCurrency('12,34')).toBe('$ 1,234');
  });

  it('$1234.456 should become 1,234.45', () => {
    expect(formatCurrency('$1234.456')).toBe('$ 1,234.45');
  });
});

describe('formatCurrency (BR)', () => {
  it('10,45, should become 10,45', () => {
    expect(formatCurrency('10,45,', 'R$ ', true)).toBe('R$ 10,45');
  });

  it('1,0,45 should become 10,45', () => {
    expect(formatCurrency('1,0,45', 'R$ ', true)).toBe('R$ 1,04');
  });

  it('1,0,45, should become 10,45', () => {
    expect(formatCurrency('1,0,45.', 'R$ ', true)).toBe('R$ 1,04');
  });

  it(', should become 0,', () => {
    expect(formatCurrency(',', 'R$ ', true)).toBe('R$ 0,');
  });

  it('00.000,1 should become 0,1', () => {
    expect(formatCurrency('00.000,1', 'R$ ', true)).toBe('R$ 0,1');
  });

  it(',45 should become 0,45', () => {
    expect(formatCurrency(',45', 'R$ ', true)).toBe('R$ 0,45');
  });

  it(',45123 should become 0,45', () => {
    expect(formatCurrency(',45123', 'R$ ', true)).toBe('R$ 0,45');
  });

  it('1234 should become 1.234', () => {
    expect(formatCurrency('1234', 'R$ ', true)).toBe('R$ 1.234');
  });

  it('12345678 should become 12.345.678', () => {
    expect(formatCurrency('12345678', 'R$ ', true)).toBe('R$ 12.345.678');
  });

  it('1234,123 should become 1.234,12', () => {
    expect(formatCurrency('1234,123', 'R$ ', true)).toBe('R$ 1.234,12');
  });

  it('a1b2c3d4 should become 1.234', () => {
    expect(formatCurrency('a1b2c3d4', 'R$ ', true)).toBe('R$ 1.234');
  });

  it('12.34 should become 1.234', () => {
    expect(formatCurrency('12.34', 'R$ ', true)).toBe('R$ 1.234');
  });

  it('$1234,456 should become 1.234,45', () => {
    expect(formatCurrency('$1234,456', 'R$ ', true)).toBe('R$ 1.234,45');
  });
});
