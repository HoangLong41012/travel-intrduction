// eslint-disable-next-line import/prefer-default-export
export const isServer = () => typeof window === `undefined`;
export const isWeb = () => !isServer();

const localStorageCache = {};

const _setLocalStorage = ({ key, val }) => {
  if (!isServer()) {
    localStorageCache[key] = val;
    window.localStorage.setItem(key, val);
  }
};

const _getLocalStorage = ({ key }) => {
  if (isServer()) {
    return null;
  }
  if (localStorageCache[key]) {
    return localStorageCache[key];
  }
  const localStorageVal = window.localStorage.getItem(key);
  if (localStorageVal) {
    localStorageCache[key] = localStorageVal;
  }
  return localStorageVal;
};

const _getLocalStorageJsonData = ({ key }) => {
  try {
    const localStorageString = _getLocalStorage({ key });
    if (localStorageString) {
      return JSON.parse(localStorageString);
    }
  } catch (err) {
    return null;
  }
  return null;
};

function _getLocalStorageStringData(key) {
  if (isServer()) {
    return null;
  }
  return JSON.parse(_getLocalStorage({ key }));
}

const _setJsonDataToLocalStorage = (data, key) => {
  if (isServer()) {
    return null;
  }
  return _setLocalStorage({ key, val: JSON.stringify(data) });
};

function _setStringToLocalStorage(data, key) {
  _setLocalStorage({ key, val: JSON.stringify(data) });
}

const _defaultLang = 'en';
const _getBrowserLanguage = () => {
  if (isServer()) {
    return _defaultLang;
  }
  const navigatorLang = navigator.language || '';
  if (navigatorLang.includes('vi')) {
    return 'vi';
  }
  if (navigatorLang.includes('ja')) {
    return 'ja';
  }
  if (navigatorLang.includes('en')) {
    return 'en';
  }
  if (navigatorLang.includes('ko')) {
    return 'ko';
  }
  if (navigatorLang.includes('zh')) {
    return 'zh';
  }
  if (navigatorLang.includes('th')) {
    return 'th';
  }
  return _defaultLang;
};

export const logout = () => {
  delete localStorageCache.JWT_TOKEN;
  delete localStorageCache.USER;

  window.localStorage.removeItem('JWT_TOKEN');
  window.localStorage.removeItem('USER');
};

export const getPreferredLanguage = () => {
  return _getLocalStorageStringData('LANG') || _getBrowserLanguage();
};

export const setPreferredLanguage = (locale) => {
  _setStringToLocalStorage(locale, 'LANG');
};

export const setJWTToken = (token) => {
  _setStringToLocalStorage(token, 'JWT_TOKEN');
};

export const getJWTToken = () => {
  return _getLocalStorageStringData('JWT_TOKEN');
};

export const setCurrentUser = (user) => {
  _setJsonDataToLocalStorage(user, 'USER');
};

export const getCurrentUser = () => {
  return _getLocalStorageJsonData('USER');
};

export const setHotelId = (hotelId) => {
  _setStringToLocalStorage(hotelId, 'hotelId');
};

export const getHotelId = () => {
  return _getLocalStorageStringData('hotelId');
};

export const setCurrency = (currency) => {
  _setStringToLocalStorage(currency, 'currency');
};

export const getCurrency = () => {
  return _getLocalStorageStringData('currency');
};
