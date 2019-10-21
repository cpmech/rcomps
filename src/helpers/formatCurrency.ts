const formatLongNumber = (n: string, comma = ',') => {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, comma);
};

export const formatCurrency = (
  inputVal: string,
  onBlur?: boolean,
  unit = 'US$',
  point = '.',
  comma = ',',
) => {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  // ref: https://codepen.io/559wade/pen/LRzEjj

  // don't validate empty input
  if (!inputVal) {
    return '';
  }

  // original length
  // let originalLen = inputVal.length;

  // initial caret position
  // let caretPos = input.prop('selectionStart');

  // check for decimal
  if (inputVal.indexOf(point) >= 0) {
    // get position of last decimal
    // this prevents multiple decimals from
    // being entered
    const decimalPos = inputVal.indexOf(point);

    // split number by decimal point
    let leftSide = inputVal.substring(0, decimalPos);
    let rightSide = inputVal.substring(decimalPos);

    // add commas to left side of number
    leftSide = formatLongNumber(leftSide, comma);

    // clear right side
    rightSide = rightSide.replace(/\D/g, '');

    // On blur make sure 2 numbers after decimal
    if (onBlur) {
      rightSide += '00';
    }

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2);

    // join number by .
    inputVal = unit + ' ' + leftSide + point + rightSide;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    inputVal = formatLongNumber(inputVal, comma);
    inputVal = unit + ' ' + inputVal;

    // final formatting
    if (onBlur) {
      inputVal += point + '00';
    }
  }

  // results
  return inputVal;

  /*
  // put caret back in the right position
  var updatedLen = inputVal.length;
  caretPos = updatedLen - originalLen + caretPos;
  input[0].setSelectionRange(caretPos, caretPos);
  */
};
