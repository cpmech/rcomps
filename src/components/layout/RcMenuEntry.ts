import { ReactNode } from 'react';

export interface RcMenuSubSubEntry {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
}

export interface RcMenuSubEntry {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
  subSubEntries?: RcMenuSubSubEntry[];
}

export interface RcMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  href?: string;
  underline?: boolean;
  entries?: RcMenuSubEntry[];
  separator?: boolean;
}
