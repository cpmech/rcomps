# TypeScript React Components with Emotion

[See the beautiful storybook!](https://cpmech.github.io/rcomps)

This project contains "a couple" of React Components written in TypeScript and using the [fantastic emotion js](https://github.com/emotion-js/emotion).

## Installation

```bash
yarn add @cpmech/rcomps
```

We export the components as **pure TypeScript** because **emotion** needs to be transpiled in the final application.

So you'll have to copy the components to your project. However, we suggest the following strategy:

### 1 Add the following line to your **package.json**:

```json
{
  "scripts": {
    "postinstall": "bash ./scripts/npm_postinstall.bash",
  }
}
```

### 2 Add the following `./scripts/npm_postinstall.bash` script to your project:

```bash
#!/bin/bash

set -e

echo "... installing rcomps ..."
rm -rf ./src/rcomps
mkdir -p ./src/rcomps
cp -rv ./node_modules/@cpmech/rcomps/* ./src/rcomps/
```

## Documentation

[Check also the storybook](https://cpmech.github.io/rcomps)

The components are organized into three kinds:

1. **foundation** are components that do not depend on others
2. **layout** are components that help to manage other components
3. **composite** are components that rely on _foundation_ components

All components have the prefix _Rc_.

### Foundation

* `RcButton` -- a fancy button, wrapping HTML input button
* `RcCard` -- a fancy card
* `RcChartRing` -- "donut" style of graph
* `RcCollapse` -- hide/show content
* `RcError` -- print in red errors, useful to forms (and RcInput)
* `RcGameCard` -- a card with zoom
* `RcInput` -- a fancy input box, wrapping HTML input
* `RcLinkOrDiv` -- wrapps HTML "a" (link) or a div with onClick
* `RcNotifier` -- shows a box at the botton of the screen
* `RcPair` -- positions two items side-by-side
* `RcPicker` -- a fancy picker
* `RcProgress` -- shows a linear progress bar
* `RcSpinCircle` -- shows a spinning circle
* `RcSpinDots` -- shows spinning dots
* `RcSwitch` -- implements a toggle/switch
* `RcText` -- a fancy static input box, wrapping HTML input

### Layout

* `Dimensions` -- contains a couple of components such as RcPhone, RcTablet, etc
* `RcLayout` -- implements the "holy grail" layout using HTML grid
* `RcMenuHoriz` -- shows a horizontal menu
* `RcMenuVert` -- shows a vertical menu
* `RcModal` -- shows a modal box
* `RcSideNav` -- implements a floating side navigation box
* `RcTabs` -- shows a tabbed menu
* `RcYouTube` -- shows a YouTube video, in a consistent and easy way

### Composite

* `RcDualMenuHoriz` -- presents two sets of horizontal menus (left and right)
* `RcFlexTable` -- shows a (long) table while being flexible for narrow and wide screens
* `RcInputDate` -- implements a (powerful) input box for dates (with translation)
* `RcInputNumber` -- implements an input box for numbers (with locales)
* `RcModalYesNo` -- shows a modal box, with buttons yes/no
* `RcPopup` -- shows "popup" modal boxes, for different uses (message, error, is-loading, progress)
* `RcProgressBar` -- shows a progress bar in a container
* `RcSpinAndMsgCircle` -- shows a spinning cirlce and a message
* `RcSpinAndMsgDots` -- shows spinning dots and a message
* `RcSpinnerPage` -- shows a spinning circle in the middle of the page
* `RcSwitchAndText` -- shows a switch (toggle) component with a text to the left or right
