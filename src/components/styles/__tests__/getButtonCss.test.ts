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
        '  \n' +
        '  font-weight: normal;\n' +
        '  color: #343434;\n' +
        '  cursor: pointer;\n' +
        '  &:hover { background-color: #d7d7d7; }\n' +
        '  \n' +
        '  background-color: #ebebeb;\n' +
        '  transition: all 0.3s ease;\n' +
        '  white-space: nowrap;\n' +
        '  overflow: hidden;\n',
    );
  });

  it('should return styled values', () => {
    const res = getButtonCss('100px', 60, 10, 5, 20, 'bold', 'red', '#ccc', 'blue', 'green');
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
        '  color: red;\n' +
        '  cursor: pointer;\n' +
        '  &:hover { background-color: green; }\n' +
        '  \n' +
        '  background-color: blue;\n' +
        '  transition: all 0.3s ease;\n' +
        '  white-space: nowrap;\n' +
        '  overflow: hidden;\n',
    );
  });
});
