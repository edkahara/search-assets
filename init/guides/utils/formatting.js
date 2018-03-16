/* eslint-disable camelcase */
const preFormatted = {
  arraybuffer: 'ArrayBuffer',
  aws: 'AWS',
  bytelength: 'byteLength',
  charat: 'charAt',
  charcodeat: 'charCodeAt',
  codepointat: 'codePointAt',
  columnnumber: 'columnNumber',
  compareexchange: 'compareExchange',
  copywithin: 'copyWithin',
  css: 'CSS',
  css3: 'CSS3',
  defineproperties: 'defineProperties',
  defineproperty: 'defineProperty',
  deleteproperty: 'deleteProperty',
  displayname: 'displayName',
  dynamodb: 'DynamoDB',
  e: 'E',
  endswith: 'endsWith',
  epsilon: 'EPSILON',
  filename: 'fileName',
  findindex: 'findIndex',
  foreach: 'forEach',
  fromcharcode: 'fromCharCode',
  frompointcode: 'fromPointCode',
  getdate: 'getDate',
  getday: 'getDay',
  getfullyear: 'getFullYear',
  gethours: 'getHours',
  getmilliseconds: 'getMilliseconds',
  getminutes: 'getMinutes',
  getmonth: 'getMonth',
  getownpropertydescriptor: 'getOwnPropertyDescriptor',
  getownpropertydescriptors: 'getOwnPropertyDescriptors',
  getownpropertynames: 'getOwnPropertyNames',
  getownpropertysymbols: 'getOwnPropertySymbols',
  getprototypeof: 'getPrototypeOf',
  getseconds: 'getSeconds',
  gettime: 'getTime',
  getomezoneoffset: 'getTimezoneOffset',
  getutcdate: 'getUTCDate',
  getutcday: 'getUTCDay',
  getutcfullyear: 'getUTCFullYear',
  getutchours: 'getUTCHours',
  getutcmilliseconds: 'getUTCMilliseconds',
  getutcminutes: 'getUTCMinutes',
  getutcmonth: 'getUTCMonth',
  getutcseconds: 'getUTCSeconds',
  getyear: 'getYear',
  hasownproperty: 'hasOwnProperty',
  html: 'HTML',
  html5: 'HTML5',
  indexof: 'indexOf',
  ignorecase: 'ignoreCase',
  isarray: 'isArray',
  isealed: 'isSealed',
  isextensible: 'isExtensible',
  isfinite: 'isFinite',
  isfrozen: 'isFrozen',
  isgenerator: 'isGenerator',
  isinteger: 'isInteger',
  islockfree: 'isLockFree',
  isnan: 'isNaN',
  issafeinteger: 'isSafeInteger',
  isview: 'isView',
  javascript: 'JavaScript',
  jquery: 'jQuery',
  json: 'JSON',
  lastindexof: 'lastIndexOf',
  linenumber: 'lineNumber',
  ln2: 'LN2',
  ln10: 'LN10',
  localcompare: 'localCompare',
  log2e: 'LOG2E',
  log10e: 'LOG10E',
  max_safe_integer: 'MAX_SAFE_INTEGER',
  max_value: 'MAX_VALUE',
  min_safe_integer: 'MIN_SAFE_INTEGER',
  min_value: 'MIN_VALUE',
  mongodb: 'MongoDB',
  nan: 'NaN',
  negative_infinity: 'NEGATIVE_INFINITY',
  padend: 'padEnd',
  padstart: 'padStart',
  parsefloat: 'parseFloat',
  parseint: 'parseInt',
  pi: 'PI',
  positive_infinity: 'POSITIVE_INFINITY',
  preventextentions: 'preventExtensions',
  propertyisenumerable: 'propertyIsEnumerable',
  reduceright: 'reduceRight',
  regexp: 'RegExp',
  setdate: 'setDate',
  setfullyear: 'setFullYear',
  sethours: 'setHours',
  setmilliseconds: 'setMilliseconds',
  setminutes: 'setMinutes',
  setmonth: 'setMonth',
  setprototypeof: 'setPrototypeOf',
  setseconds: 'setSeconds',
  settime: 'setTime',
  setutcdate: 'setUTCDate',
  setutcfullyear: 'setUTCFullYear',
  setutchours: 'setUTCHours',
  setutcmilliseconds: 'setUTCMilliseconds',
  setutcminutes: 'setUTCMinutes',
  setutcmonth: 'setUTCMonth',
  setutcseconds: 'setUTCSeconds',
  setyear: 'setYear',
  sql: 'SQL',
  sqrt1_2: 'SQRT1_2',
  sqrt2: 'SQRT2',
  startswith: 'startsWith',
  todatestring: 'toDateString',
  toexponential: 'toExponential',
  tofixed: 'toFixed',
  toisostring: 'toISOString',
  tojson: 'toJSON',
  tolocaledatestring: 'toLocaleDateString',
  tolocalelowercase: 'toLocaleLowerCase',
  tolocalestring: 'toLocaleString',
  tolocaletimestring: 'toLocaleTimeString',
  tolocaleuppercase: 'toLocaleUpperCase',
  tolowercase: 'toLowerCase',
  toprecision: 'toPrecision',
  tosource: 'toSource',
  tostring: 'toString',
  totimestring: 'toTimeString',
  touppercase: 'toUpperCase',
  toutcstring: 'toUTCString',
  trimleft: 'trimLeft',
  trimRight: 'trimRight',
  valueof: 'valueOf',
  __definegetter__: '__defineGetter__',
  __definesetter__: '__defineSetter__',
  __lookupgetter__: '__lookupGetter__',
  __lookupsetter__: '__lookupSetter__'
};

const stopWords = [
  'a',
  'am',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'if',
  'in',
  'into',
  'it',
  "it's",
  'its',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'on',
  'or',
  'the',
  'to',
  'with'
];

module.exports = {
  preFormatted,
  stopWords
};
