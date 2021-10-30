import * as React from 'react';
import { StackActions } from '@react-navigation/core';
import { createNavigationContainerRef } from '@react-navigation/native';

export const isReadyRef: React.MutableRefObject<boolean | null> = React.createRef();

// export const navigationRef: React.RefObject<NavigationContainerRef> =
// React.createRef();
export const navigationRef = createNavigationContainerRef();

// eslint-disable-next-line @typescript-eslint/ban-types
export function navigate(name: string, params: Object): void {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function replace(name: string, params: Object = {}): void {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack(): void {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
