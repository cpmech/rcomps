import { ReactNode } from 'react';

export interface RcMenuSubSubEntry {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
}

export interface RcMenuSubEntry {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  subSubEntries?: RcMenuSubSubEntry[];
}

export interface RcMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  entries?: RcMenuSubEntry[];
}
