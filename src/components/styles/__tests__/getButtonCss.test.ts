import { getButtonCss } from '../getButtonCss';

describe('getButtonCss', () => {
  it('should return the default values', () => {
    const res = getButtonCss();
    expect(res.styles).toBe(
      '\n' +
        '  \n' +
        '  height: 40px;\n' +
        '  padding-left: 28px;\n' +
        '  padding-right: 28px;\n' +
        '  border-radius: 0px;\n' +
        '  border-width: 0;\n' +
        '  font-size: 14px;\n' +
        '  font-weight: normal;\n' +
        '  cursor: pointer;\n' +
        '  color: #343434;\n' +
        '  background-color: #ebebeb;\n' +
        '  &:hover {\n' +
        '    background-color: #d7d7d7;\n' +
        '  }\n' +
        '  transition: all 0.3s ease;\n',
    );
  });

  it('should return styled values', () => {
    const res = getButtonCss(100, 60, 10, 5, 20, 'bold', 'red', 'blue', 'green');
    expect(res.styles).toBe(
      '\n' +
        `  width: 100px;\n` +
        '  height: 60px;\n' +
        '  padding-left: 10px;\n' +
        '  padding-right: 10px;\n' +
        '  border-radius: 5px;\n' +
        '  border-width: 0;\n' +
        '  font-size: 20px;\n' +
        '  font-weight: bold;\n' +
        '  cursor: pointer;\n' +
        '  color: red;\n' +
        '  background-color: blue;\n' +
        '  &:hover {\n' +
        '    background-color: green;\n' +
        '  }\n' +
        '  transition: all 0.3s ease;\n',
    );
  });
});
