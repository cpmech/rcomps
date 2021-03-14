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
