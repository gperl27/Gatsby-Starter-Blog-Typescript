import { ThemedStyledFunction } from "styled-components"

export type ComponentProps<
  T extends React.ComponentType<any>
> = T extends ThemedStyledFunction<T, any, infer TP>
  ? JSX.LibraryManagedAttributes<T, TP>
  : T extends React.ExoticComponent<infer EP>
  ? JSX.LibraryManagedAttributes<T, EP>
  : T extends React.FunctionComponent<infer FP>
  ? JSX.LibraryManagedAttributes<T, FP>
  : T extends React.ComponentClass<infer CP>
  ? JSX.LibraryManagedAttributes<T, CP>
  : {}
