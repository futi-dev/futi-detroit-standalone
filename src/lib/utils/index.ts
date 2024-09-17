import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export enum FUTISite {
  LF112 = 'LF112',
  FUTIWOLF = 'FUTIWOLF',
  FURRY = 'FURRY',
  FUTI = 'FUTI',
  LOCALHOST = 'LOCALHOST',
}

export const getCurrentSite = () =>
  (location.hostname
    .split('.')
    .map((x) => x.toUpperCase())
    .find((x) => ['LF112', 'FUTIWOLF', 'FURRY', 'FUTI', 'LOCALHOST'].includes(x)) || 'LF112') as FUTISite;
