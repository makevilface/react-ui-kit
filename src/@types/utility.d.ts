type Nullable<T> = T | null;
type Maybe<T> = T | undefined;

type StrictOmit<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
