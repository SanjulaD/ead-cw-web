export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const formatTableHeader = (header: string): string => {
  return header
    .replace(/([A-Z])/g, ' $1') // Add a space before each capital letter
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};

export const hasProperty = <O, P extends PropertyKey>(
  obj: O,
  prop: P
): obj is O & Record<P, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, prop);
