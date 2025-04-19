// eslint-disable-next-line import/prefer-default-export
export const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};
