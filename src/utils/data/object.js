import { getPreferredLanguage } from '../../services/localStorage';

// eslint-disable-next-line import/prefer-default-export
export const getDisplayName = (obj) => {
  const lang = getPreferredLanguage();

  if (lang === 'en') {
    return obj?.en || obj?.name || '';
  }

  if (lang === 'vi') {
    return obj?.vi || obj?.name || '';
  }

  return obj?.en || obj?.name || '';
};
