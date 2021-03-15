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
  entries?: RcMenuSubEntry[];
  separator?: boolean;
}

export interface RcMenuOptions {
  color?: string;
  colorHover?: string;
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
  indentSub?: string;
  fontSizeSubEntries?: string;
  fontSizeSubSubEntries?: string;
  labelWordBreak?: boolean;
  labelSubWordBreak?: boolean;
}

export const rcDefaultMenuOptions = ({
  color = '#484848',
  colorHover = '#757575',
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
  indentSub = '30px',
  fontSizeSubEntries = '90%',
  fontSizeSubSubEntries = '80%',
  labelWordBreak = false,
  labelSubWordBreak = true,
}: RcMenuOptions): RcMenuOptions => ({
  color,
  colorHover,
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
  indentSub,
  fontSizeSubEntries,
  fontSizeSubSubEntries,
  labelWordBreak,
  labelSubWordBreak,
});
