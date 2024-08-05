export const RemoveUndefinedAttributes = (obj: { [key: string]: any }) => {
  return JSON.parse(JSON.stringify(obj));
};
