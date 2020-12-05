[![CI](https://github.com/unki2aut/loadfxt/workflows/CI/badge.svg?branch=main)](https://github.com/unki2aut/loadfxt) [![codecov](https://codecov.io/gh/unki2aut/loadfxt/branch/main/graph/badge.svg?token=QKQXL80K7B)](https://codecov.io/gh/unki2aut/loadfxt)

# loadfxt
Tiny JavaScript library to load fixtures of different formats.  
Don't know why this isn't included in every testing framework already 🤷

## Use with `javascript`
```js
const loadfxt = require('loadfxt').default;

console.log(loadfxt('test.txt').toBinaryString());
```

## Use with `typescript`
```ts
import loadfxt from 'loadfxt';

console.log(loadfxt('test.txt').toBinaryString());
```

## API Examples

1. **Binary data**
```js
loadfxt('<path/to/fixture>').toArrayBuffer();
```

1. **Binary string**  
   Each byte is represented as one character in the resulting string.
```js
loadfxt('<path/to/fixture>').toBinaryString();
```

1. **UTF-8 string**  
   The loaded data will be represented in UTF-8 encoding.
```js
loadfxt('<path/to/fixture>').toUtf8();
```

1. **JSON**
```js
loadfxt('<path/to/fixture>').toJson();
```
