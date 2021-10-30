import { DependencyList, useEffect, useRef } from 'react';

/* eslint-disable */

export default function useUpdateEffect(callback: () => void, dependencies: DependencyList) {
  const firstRenderRef = useRef<boolean>(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
