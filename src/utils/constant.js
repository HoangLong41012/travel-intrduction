const defaultLocale = 'en';

const languageList = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Tiếng Việt',
    locale: 'vi',
  },
];

const homeImage =
  'https://firebasestorage.googleapis.com/v0/b/tourist-5c2f7.appspot.com/o/ruong-bac-thang.jpg?alt=media&token=7c908c26-03f6-4a6e-ac79-52681b9d48fd';

const destinations = [
  {
    id: 'sapa',
    vi: 'Sapa',
    en: 'Sapa',
  },
  {
    id: 'hanoi',
    vi: 'Hà Nội',
    en: 'Hanoi',
  },
];

module.exports = {
  defaultLocale,
  homeImage,
  languageList,
  destinations,
};
