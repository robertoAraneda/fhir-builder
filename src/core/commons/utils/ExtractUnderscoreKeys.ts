import { UnderscoreKeys } from '../../../r4/builders/base/resource-type-map.interface';

export type ExtractUnderscoreKeys<T> = keyof Pick<T, UnderscoreKeys<T>>;
