export interface IBuildable<T> {
  fromJSON?(json: unknown): this;
  build(): T;
}
