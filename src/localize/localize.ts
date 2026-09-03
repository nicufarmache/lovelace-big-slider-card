import * as en from './languages/en.json';
import * as de from './languages/de.json';
import * as es from './languages/es.json';
import * as fr from './languages/fr.json';
import * as it from './languages/it.json';
import * as nl from './languages/nl.json';
import * as pl from './languages/pl.json';
import * as pt from './languages/pt.json';
import * as ro from './languages/ro.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  en: en,
  de: de,
  es: es,
  fr: fr,
  it: it,
  nl: nl,
  pl: pl,
  pt: pt,
  ro: ro,
};

function getSelectedLanguage(): string {
  try {
    return localStorage.getItem('selectedLanguage') || 'en';
  } catch {
    return 'en';
  }
}

function resolveKey(key: string, dict: any): string | undefined {
  try {
    const val = key.split('.').reduce((o, i) => o?.[i], dict);
    return typeof val === 'string' ? val : undefined;
  } catch {
    return undefined;
  }
}

export function localize(string: string): string {
  const rawLang = getSelectedLanguage().replace(/['"]+/g, '').replace('-', '_');
  const baseLang = rawLang.split('_')[0];
  const lang = languages[rawLang] ? rawLang : (languages[baseLang] ? baseLang : 'en');

  return resolveKey(string, languages[lang])
    ?? resolveKey(string, languages.en)
    ?? string;
}
