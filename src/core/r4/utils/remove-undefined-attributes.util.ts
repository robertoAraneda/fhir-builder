export const RemoveUndefinedAttributes = (obj: Record<string, any>) => {
  return JSON.parse(JSON.stringify(obj));
};
