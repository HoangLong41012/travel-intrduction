import {
  getPreferredLanguage,
  setPreferredLanguage,
} from '../../../services/localStorage';
import { reloadWithLocale } from '../../../utils/redirect';

const selectLanguageFunction = async ({ router, locale }) => {
  const preferredLang = getPreferredLanguage();
  // check if selected language is not equal to language saved in local storage
  if (preferredLang && preferredLang !== locale) {
    setPreferredLanguage(locale);
    reloadWithLocale({ router, locale });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { selectLanguageFunction };
