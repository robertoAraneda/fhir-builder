type IsArray<T> = T extends Array<any> ? T : never;
type ExtractUnderscoreArrayItems<T> = {
  [K in keyof T]: K extends `_${string}` ? (IsArray<T[K]> extends never ? never : K) : never;
}[keyof T];

type PickUnderscoreArrayProperties<T> = Pick<T, ExtractUnderscoreArrayItems<T>>;

export type ExtractUnderscoreArrayKeys<T> = keyof PickUnderscoreArrayProperties<T>;
