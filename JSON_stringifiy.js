function stringifyJSON(obj) {
  if (isString(obj)) {
    return `"${obj}"`;
  }

  if (isBoolean(obj) || isNumber(obj) || isNull(obj)) {
    return `${obj}`;
  }

  if (isDate(obj)) {
    return `"${obj.toJSON()}"`;
  }

  if (Array.isArray(obj)) {
    const converted = obj
      .reduce((acc, cur) => `${acc + (isSymbol(cur) ? null : stringifyJSON(cur))},`, '')
      .slice(0, -1);

    return `[${converted}]`;
  }

  if (typeof obj === 'object') {
    const converted = Object.entries(obj)
      .reduce((acc, [key, value]) => {
        if (
          isSymbol(key) ||
          isFunction(value) ||
          isUndefined(value) ||
          isSymbol(value)
        ) {
          return acc;
        }
        return acc + `"${key}":${stringifyJSON(value)},`;
      }, '')
      .slice(0, -1);

    return `{${converted}}`;
  }
}

const isString = value => typeof value === 'string' || value instanceof String;
const isNumber = value => typeof value === 'number' || value instanceof Number;
const isBoolean = value => typeof value === 'boolean' || value instanceof Boolean;
const isDate = value => value instanceof Date;
const isSymbol = value => typeof value === 'symbol';
const isFunction = value => typeof value === 'function';
const isNull = value => value === null;
const isUndefined = value => typeof value === 'undefined';

const tests = [
  {},
  true,
  'foo',
  [1, 'false', false],
  { x: 5 },
  new Date(2006, 0, 2, 15, 4, 5),
  { x: 5, y: 6 },
  [new Number(1), new String('false'), new Boolean(false)],
  { x: undefined, y: Object, z: Symbol('') },
  { [Symbol('foo')]: 'foo' },
  { [Symbol.for('foo')]: 'foo' },
  [Symbol.for('foo0'), Symbol.for('foo1'), Symbol.for('foo2'), Symbol.for('foo3')],
  { [Symbol.for('foo')]: 'foo' },
  function (k, v) {
    if (typeof k === 'symbol') {
      return 'a symbol';
    }
  },
  Object.create(null, {
    x: { value: 'x', enumerable: false },
    y: { value: 'y', enumerable: true },
  }),
];

tests.forEach((test, index) => {
  result = JSON.stringify(test) === stringifyJSON(test);
  if (!result) {
    console.log(test, index);
    console.log(JSON.stringify(test));
    console.log(stringifyJSON(test));
    console.log('------------');
  }
});

// JSON.stringify({}); // '{}'
// JSON.stringify(true); // 'true'
// JSON.stringify('foo'); // '"foo"'
// JSON.stringify([1, 'false', false]); // '[1,"false",false]'
// JSON.stringify({ x: 5 }); // '{"x":5}'

// JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// // '"2006-01-02T15:04:05.000Z"'

// JSON.stringify({ x: 5, y: 6 });
// // '{"x":5,"y":6}' or '{"y":6,"x":5}'
// JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
// // '[1,"false",false]'

// // Symbols:
// JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// // '{}'
// JSON.stringify({ [Symbol('foo')]: 'foo' });
// // '{}'
// JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// // '{}'
// JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
//   if (typeof k === 'symbol') {
//     return 'a symbol';
//   }
// });
// // '{}'

// // Non-enumerable properties:
// JSON.stringify(
//   Object.create(null, {
//     x: { value: 'x', enumerable: false },
//     y: { value: 'y', enumerable: true },
//   })
// );
// // '{"y":"y"}'
