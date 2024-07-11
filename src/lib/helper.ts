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
  switch (header) {
    case 'durationMinutes':
      return 'Duration Minutes';
    default:
      return header.charAt(0).toUpperCase() + header.slice(1);
  }
};

export const hasProperty = <O, P extends PropertyKey>(
  obj: O,
  prop: P
): obj is O & Record<P, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, prop);
