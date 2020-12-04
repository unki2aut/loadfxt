[![Build Status](https://travis-ci.org/unki2aut/loadfxt.svg?branch=main)](https://travis-ci.org/unki2aut/loadfxt) [![codecov](https://codecov.io/gh/unki2aut/loadfxt/branch/main/graph/badge.svg?token=QKQXL80K7B)](https://codecov.io/gh/unki2aut/loadfxt)

# loadfxt
Tiny JavaScript library to load fixtures of different formats.  
Don't know why this isn't included in every testing framework already 🤷

## Examples

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
loadfxt('<path/to/fixture>').toJson();
```

1. **JSON**
```js
loadfxt('<path/to/fixture>').toJson();
```
