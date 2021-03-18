import { ReactNode } from 'react';

export interface RcMenuSubSubEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  link?: ReactNode;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
}

export interface RcMenuSubEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  link?: ReactNode;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
  initShowSubSub?: boolean;
  subSubEntries?: RcMenuSubSubEntry[];
}

export interface RcMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  link?: ReactNode;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
  initShowSub?: boolean;
  entries?: RcMenuSubEntry[];
  separator?: boolean;
}

export interface RcMenuOptions {
  iconSize?: string;
  subIconSize?: string;
  colorLabel?: string;
  colorLabelHover?: string;
  colorIcon?: string;
  bgColor?: string;
  minWidth?: string;
  maxWidth?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingHoriz?: string;
  gapVertEntries?: string;
  gapVertEntriesWithoutSub?: string;
  gapVertSeparator?: string;
  gapVertSubEntries?: string;
  gapVertSubSubEntries?: string;
  gapHorizLabel?: string;
  gapHorizSubLabel?: string;
  gapHorizSubSubLabel?: string;
  fontSizeSubEntries?: string;
  fontSizeSubSubEntries?: string;
  labelWordBreak?: boolean;
  labelSubWordBreak?: boolean;
  showHideIconSize?: string;
}

export const rcDefaultMenuOptions = ({
  iconSize = undefined,
  subIconSize = undefined,
  colorLabel = '#484848',
  colorLabelHover = '#757575',
  colorIcon = '#484848',
  bgColor = undefined,
  minWidth = undefined,
  maxWidth = undefined,
  paddingTop = '40px',
  paddingBottom = '80px',
  paddingHoriz = '20px',
  gapVertEntries = '60px',
  gapVertEntriesWithoutSub = '20px',
  gapVertSeparator = '30px',
  gapVertSubEntries = '15px',
  gapVertSubSubEntries = '10px',
  gapHorizLabel = '10px',
  gapHorizSubLabel = '10px',
  gapHorizSubSubLabel = '10px',
  fontSizeSubEntries = '90%',
  fontSizeSubSubEntries = '80%',
  labelWordBreak = false,
  labelSubWordBreak = true,
  showHideIconSize = '20px',
}: RcMenuOptions): RcMenuOptions => ({
  iconSize,
  subIconSize,
  colorLabel,
  colorLabelHover,
  colorIcon,
  bgColor,
  minWidth,
  maxWidth,
  paddingTop,
  paddingBottom,
  paddingHoriz,
  gapVertEntries,
  gapVertEntriesWithoutSub,
  gapVertSeparator,
  gapVertSubEntries,
  gapVertSubSubEntries,
  gapHorizLabel,
  gapHorizSubLabel,
  gapHorizSubSubLabel,
  fontSizeSubEntries,
  fontSizeSubSubEntries,
  labelWordBreak,
  labelSubWordBreak,
  showHideIconSize,
});
