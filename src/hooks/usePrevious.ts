import { useRef } from 'react';
import { GenericObject } from '../utils/types';

export default function usePrevious(value: GenericObject): GenericObject<unknown> | undefined {
  const currentRef = useRef<GenericObject>(value);
  const previousRef = useRef<GenericObject>();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
