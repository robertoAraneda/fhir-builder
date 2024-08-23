export abstract class Buildable<T> {
  // Abstract method to be implemented by concrete classes
  protected abstract builderInstance(): T;

  // Static builder method
  static builder<T>(this: new () => Buildable<T>): T {
    const instance = new this();
    return instance.builderInstance();
  }
}
