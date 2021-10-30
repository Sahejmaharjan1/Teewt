/** A high-level generic object. */
export type GenericObject<T = unknown> = { [key: string]: T };

/** A high-level error object. */
export interface ErrorObject {
  message: string;
  description: string;
}

/** Generic type to allow null. */
export type Nullable<T> = T | null;

/** Function with single parameter returning void */
// eslint-disable-next-line no-unused-vars
export type FunctionWithParam<T> = (p: T) => void;

/** Function with single parameter returning void */
export type FunctionWithNoParam = () => void;

export interface Location {
  line: number;
  column: number;
  sourceName: null;
}

export interface SignUpErrors {
  path: string[];
  data: null;
  errorType: string;
  errorInfo: null;
  locations: Location[];
  message: string;
}

export interface SignUpError {
  errors: SignUpErrors[];
}
