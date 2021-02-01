import { getFloatCss } from '../getFloatCss';

describe('getFloatCss', () => {
  it('should return the default values', () => {
    const res = getFloatCss(true);
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
        '  \n' +
        '  a {\n' +
        '    color: black;\n' +
        '    padding: 12px 16px;\n' +
        '    text-decoration: none;\n' +
        '    display: block;\n' +
        '    cursor: pointer;\n' +
        '  }\n' +
        '  a:hover {\n' +
        '    background-color: #f1f1f1;\n' +
        '  }\n',
    );
  });

  it('should return styled values', () => {
    const res = getFloatCss(false, 350);
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
        '  \n' +
        '  a {\n' +
        '    color: black;\n' +
        '    padding: 12px 16px;\n' +
        '    text-decoration: none;\n' +
        '    display: block;\n' +
        '    cursor: pointer;\n' +
        '  }\n' +
        '  a:hover {\n' +
        '    background-color: #f1f1f1;\n' +
        '  }\n',
    );
  });
});
