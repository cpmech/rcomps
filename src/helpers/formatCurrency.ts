// formatLongNumber formats number 1000000 to 1,234,567
const formatLongNumber = (n: string, comma = ',') => {
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, comma);
};

// formatCurrency appends $ to value and validates decimal side
// ref: https://codepen.io/559wade/pen/LRzEjj
export const formatCurrency = (
  inputVal: string,
  unit = '$',
  point = '.',
  comma = ',',
  onBlur?: boolean,
) => {
  // don't validate empty input
  if (!inputVal) {
    return '';
  }

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

    // On blur make sure 2 numbers after decimal
    if (onBlur) {
      rightSide += '00';
    }

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2);

    // join number by .
    inputVal = unit + ' ' + leftSide + point + rightSide;
  } else {
    // no decimal entered./ add commas to number and remove all non-digits
    inputVal = formatLongNumber(inputVal, comma);
    inputVal = unit + ' ' + inputVal;

    // final formatting
    if (onBlur) {
      inputVal += point + '00';
    }
  }

  // results
  return inputVal;
};
