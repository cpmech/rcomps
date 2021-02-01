import { ReactNode } from 'react';

export interface IMenuEntry {
  comp?: ReactNode;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  entries?: {
    icon?: ReactNode;
    label?: string;
    onClick?: () => void;
  }[];
}
