import { errorMessages } from './en';
import { NotifierTitle } from './enums';
import { ErrorObject } from './types';

export const generateErrorMessage = (title: NotifierTitle, description?: string): ErrorObject => ({
  message: errorMessages.default.message.replace('~~~', title),
  description: description || errorMessages.default.description.replace('~~~', title),
});

export function intToString(num: string) {
  const newNum = num.toString().replace(/[^0-9.]/g, '');
  if (parseInt(newNum, 10) < 1000) {
    return newNum;
  }
  let si = [
    { v: 1e3, s: 'K' },
    { v: 1e6, s: 'M' },
    { v: 1e9, s: 'B' },
    { v: 1e12, s: 'T' },
    { v: 1e15, s: 'P' },
    { v: 1e18, s: 'E' },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (parseInt(newNum, 10) >= si[index].v) {
      break;
    }
  }
  return (parseInt(newNum, 10) / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s;
}
