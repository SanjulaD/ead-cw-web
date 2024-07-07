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
