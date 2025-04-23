import { KEY_TRANSLATIONS } from './const.ts'
import { languages } from './ui.ts'

/**
 * Tipo que representa las claves de idioma válidas (ej: 'en', 'es').
 * @typedef {keyof typeof languages} KeyLang
 */
export type KeyLang = keyof typeof languages

/**
 * Tipo que representa las claves de traducción válidas.
 * @typedef {(typeof KEY_TRANSLATIONS)[keyof typeof KEY_TRANSLATIONS]} KeyTranslation
 */
export type KeyTranslation = (typeof KEY_TRANSLATIONS)[keyof typeof KEY_TRANSLATIONS]

/**
 * Representa una estructura de traducciones para múltiples idiomas.
 * @template {string} [L=string] - Tipo de las claves de idioma (ej: 'en', 'es')
 * @template {string} [T=string] - Tipo de las claves de traducción (ej: 'button.text', 'title')
 * @typedef {Record<L, Record<T, string>>} UI
 */
export type UI<L extends string, T extends string> = Record<L, Record<T, string>>
