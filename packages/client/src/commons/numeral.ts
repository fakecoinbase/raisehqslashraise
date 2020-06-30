import numeral from 'numeral';

/** Start of number formatting */
export const numeralFormat = '0[.]0,0'; // This format is 0,000

if (!numeral?.locales?.hero) {
  numeral.register('locale', 'hero', {
    delimiters: {
      thousands: '.',
      decimal: ','
    },
    abbreviations: {
      thousand: 'k',
      million: 'mm',
      billion: 'b',
      trillion: 't'
    },
    /* eslint-disable */
    ordinal: function (number) {
      var b = number % 10;
      return b === 1 || b === 3
        ? 'er'
        : b === 2
        ? 'do'
        : b === 7 || b === 0
        ? 'mo'
        : b === 8
        ? 'vo'
        : b === 9
        ? 'no'
        : 'to';
    },
    currency: {
      symbol: '€'
    }
  });
  /* eslint-enable */
}

numeral.locale('hero');
numeral.defaultFormat(numeralFormat);

numeral.nullFormat('<0.01');

export const formatBigNumber = {
  prefix: '',
  decimalSeparator: ',',
  groupSeparator: '.',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0,
  suffix: ''
};
export default numeral;
