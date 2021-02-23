import { floatBoxCss } from '../floatBoxCss';

describe('floatBoxCss', () => {
  it('should return the default values', () => {
    const res = floatBoxCss(true);
    expect(res.styles).toBe(
      '\n' +
        '  display: block;\n' +
        '  position: absolute;\n' +
        '  \n' +
        '  background-color: #f9f9f9;\n' +
        '  min-width: 160px;\n' +
        '  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n' +
        '  z-index: 1;\n' +
        '  \n' +
        '  \n',
    );
  });

  it('should return styled values', () => {
    const res = floatBoxCss(false, '350px');
    expect(res.styles).toBe(
      '\n' +
        '  display: none;\n' +
        '  position: absolute;\n' +
        '  \n' +
        '  background-color: #f9f9f9;\n' +
        '  min-width: 160px;\n' +
        '  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n' +
        '  z-index: 1;\n' +
        '  height: 350px; overflow: auto;\n' +
        '  \n',
    );
  });
});
