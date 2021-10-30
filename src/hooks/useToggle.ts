import { useState } from 'react';
import { FunctionWithParam } from 'utils/types';

export default function useToggle(defaultValue: boolean): [boolean, FunctionWithParam<boolean | null>] {
  const [value, setValue] = useState<boolean>(defaultValue);

  function toggleValue(currValue: boolean | null): void {
    setValue((currentValue) => (typeof currValue === 'boolean' ? value : !currentValue));
  }

  return [value, toggleValue];
}
