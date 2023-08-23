/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const capitalize: (A: string) => string = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export function formatAmount(value: string) {
  if (!value) return ''; // empty value would break the app so we dont proceed if value is empty

  // Split the value into integer and decimal parts
  const [integerPart, decimalPart] = value.split('.');

  // Format the integer part with commas
  const formattedIntegerPart = Number(integerPart).toString()
    .replace(/\D/g, '') // this removes all non-number characters
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // this add the commas in appropriate places

  // Combine the integer and decimal parts to create the formatted value
  let formattedValue = formattedIntegerPart;
  if (decimalPart !== undefined) {
    formattedValue += `.${decimalPart.slice(0, 2)}`; // this is checking whether there's a decimal part, it then joins them together and also approximate to 2 decimal places
  }

  return formattedValue; // whenever you call this function and pass in a parameter(the number you want to format), it returns the formatted number. e.g formatAmount(43213.08) would return 43,213.08
}

export const formatMoney = (digit: number = 0) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: digit,
});

export const formatTimeStamp = (dateString: string) => new Date(dateString).toLocaleDateString();

// export const convertMoneyFormat: (A: string) => string = (amount) => new Intl.NumberFormat('en-NG').format(parseFloat(amount.split(',').join('')));
export const convertMoneyFormat: (A: string) => string = (amount) => formatMoney().format(Number(amount.split(',').join('')));

// String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const formatPhoneNumber: (A: string) => string = (number) => `+234${number.slice(-10)}`;

export const validatePhoneNumber: (A: string) => boolean = (number) => !!number?.toString().substring(0, 3).match(/080|081|090|070|091/);

export const isValidUrl = (text: string) => {
  let detectedUrl: string;
  text.replace(/\n/g, ' ').split(' ').forEach((token) => {
    if (REGEX_VALID_URL.test(token) && !detectedUrl) {
      detectedUrl = token;
    }
  });
  return detectedUrl;
};

export const REGEX_VALID_URL = new RegExp('^'
  // protocol identifier
  + '(?:(?:https?|ftp)://)'
  // user:pass authentication
  + '(?:\\S+(?::\\S*)?@)?'
  + '(?:'
  // IP address exclusion
  // private & local networks
  + '(?!(?:10|127)(?:\\.\\d{1,3}){3})'
  + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})'
  + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})'
  // IP address dotted notation octets
  // excludes loopback network 0.0.0.0
  // excludes reserved space >= 224.0.0.0
  // excludes network & broacast addresses
  // (first & last IP address of each class)
  + '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])'
  + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}'
  + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
  + '|'
  // host name
  + '(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)'
  // domain name
  + '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*'
  // TLD identifier
  + '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))'
  // TLD may end with dot
  + '\\.?'
  + ')'
  // port number
  + '(?::\\d{2,5})?'
  // resource path
  + '(?:[/?#]\\S*)?'
  + '$', 'i');
