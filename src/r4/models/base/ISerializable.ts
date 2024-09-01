export interface ISerializable {
  toJson(): Record<string, unknown>;
  toString(): string;
  serialize(): string;
  toPrettyString(): string;
}
