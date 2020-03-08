// formatLongNumber formats number 1000000 to 1,234,567
export const formatLongNumber = (n: string, comma = ',') => {
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, comma);
};

// formatValue appends prefix to value and fixes decimal side
// ref: https://codepen.io/559wade/pen/LRzEjj
export const formatNumber = (
  inputVal: string,
  prefix: string = '',
  swapDotByComma: boolean = false,
  numDigits = 2,
) => {
  // don't validate empty input
  if (!inputVal) {
    return '';
  }

  // constants
  const point = swapDotByComma ? ',' : '.';
  const comma = swapDotByComma ? '.' : ',';

  // check for decimal
  if (inputVal.indexOf(point) >= 0) {
    // get position of last decimal. this prevents multiple decimals from being entered
    const decimalPos = inputVal.indexOf(point);

    // split number by decimal point
    let leftSide = inputVal.substring(0, decimalPos).replace(/\D/g, '');
    let rightSide = inputVal.substring(decimalPos).replace(/\D/g, '');

    // handle left = 0
    if (leftSide.length === 0) {
      leftSide += '0';
    } else {
      if (Number(leftSide) === 0) {
        leftSide = '0';
      }
    }

    // add commas to left side of number
    leftSide = formatLongNumber(leftSide, comma);

    // Limit decimal to only numDigits digits
    rightSide = rightSide.substring(0, numDigits);

    // join number by .
    inputVal = prefix + leftSide + point + rightSide;
  } else {
    // no decimal entered./ add commas to number and remove all non-digits
    inputVal = formatLongNumber(inputVal, comma);
    inputVal = prefix + inputVal;
  }

  // results
  return inputVal;
};
