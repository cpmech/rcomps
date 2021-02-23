import { ReactNode } from 'react';

export interface RcMenuSubSubEntry {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
}

export interface RcMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  entries?: {
    icon?: ReactNode;
    label?: string;
    onClick?: () => void;
    subSubEntries?: RcMenuSubSubEntry[];
  }[];
}
