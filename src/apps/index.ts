/**
 * Note: Add a new import here when adding a new app.
 */
import dictionary from "./DictionaryApp";
import CurrencyConversionApp from "./CurrencyConversionApp";
import JSONFormatterApp from "./JSONFormatterApp";
import { InstantApp } from "./types";
// import timer from "./timer";

/**
 * Note: Update me when adding a new app.
 */
const availableApps: Array<InstantApp> = [
  JSONFormatterApp,
  dictionary,
  CurrencyConversionApp,
];

export default availableApps;
